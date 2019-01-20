tenderclicked = false;
var one = document.querySelectorAll(".numbers");
one.forEach(function(button){button.addEventListener("click", function(){
	
	
	if (tenderclicked === false){document.querySelector(".tenderbox").innerHTML += button.innerHTML;}
	else {document.querySelector(".cashbox").innerHTML +=button.innerHTML;}
})
});
var addition = document.querySelector(".addition");
addition.addEventListener("click", function(){
	prices(document.querySelector(".tenderbox").innerHTML);
	document.querySelector(".tenderbox").innerHTML ="";
		 itemList();
	
	
})
var tender = document.querySelector(".tender");
tender.addEventListener("click", function() {
	 add();
	 showTotal();

	 tenderclicked = true;

})
function itemList(){
	var count = priceArray.length-1;
	
	
	
		var pricelist = document.createElement("li");

		pricelist.innerHTML =  priceArray[count];
		var purchaselist = document.querySelector(".purchaselist");
			
		purchaselist.appendChild(pricelist);
	
		

	}



var tenderedtotal = [];

priceArray = [];
function prices(x){
priceArray.push(parseFloat(x));
};
function add(){
	var purchaseAmount = priceArray.reduce(function(acc, value){
		
		var number =(acc * 100 + value * 100)/100;
		
		return number;

}, );tenderedtotal.push(purchaseAmount);}

function showTotal(){
	var tenderbox = document.querySelector(".tenderbox");
	tt= parseFloat(tenderedtotal);
	tt2 = tt.toFixed(2);
		tenderbox.innerHTML = "$" + tt2;
	
}
var cash = document.querySelector(".cash");
cash.addEventListener("click", function(){
	calculateChange();
	showChange();
})


	

function calculateChange(){
	changeDisplay = document.querySelector(".change");
	payment = document.querySelector(".cashbox").innerHTML;
	parseInt(payment);
	change = (payment * 100 - tenderedtotal[0] * 100) /100;
	changeRounded= change
	if (change < 0){
		changeDisplay.innerHTML = "Insufficient Funds!";

	}
	else{
	changeDisplay.innerHTML = "$" + changeRounded;}
	//var total = payment - number;
		
}
function showChange(){
var coins = [20, 10, 5, 2, 1, .50, .20, .10, .02, .01];
coins.forEach(function(element){
	var num = ((change * 100)/(element * 100));
	console.log( "num" + num);
	var roundednum =Math.floor(num);
	console.log("roundednum" + roundednum);
	
	if (roundednum >0){ console.log(`$${element} x ${roundednum}`);

		 
		change1 = change - (roundednum * element);
		change=change1.toFixed(2);
		console.log("change" + change);
		changeList(`$${element} x ${roundednum}`);	
	}
})};

function changeList(x){

		var changelist = document.createElement("li");


		changelist.innerHTML = x
		var changes = document.querySelector(".changes");
	
		changes.appendChild(changelist);

	}


var search = document.querySelector(".search");
search.addEventListener("click", function(){


	for (var x = 0; x<items.length;x++){
		if (items[x]["barcode"] == document.querySelector(".tenderbox").innerHTML){
			prices(items[x]["price"]);
	itemList();
	document.querySelector(".tenderbox").innerHTML ="";
	return;

		}
		else {document.querySelector(".tenderbox").innerHTML ="";
		document.querySelector(".change").innerHTML = "Barcode not recognised";
	}
	}
})








var commonItems = document.querySelectorAll(".commonItems");

console.log(commonItems);
	commonItems.forEach(function(ele){
ele.addEventListener("click", function(){

var searchItem = ele.innerHTML;
console.log(searchItem);
for(var i = 0; i < items.length; i++){
if (items[i]["item"] == searchItem){
	console.log(items[i]["price"])

	prices(items[i]["price"]);
	itemList();
	return
}
else{console.log("nomatch")}
}

})

	})



	
	


var items = [
{
	"item": "Croissant",
	barcode: 101,
	"price": 0.89
},
{
	"item": "Large Cappucino/Latte",
	barcode: 1010101012,
	"price": 2.19
},
{
	"item": "Large Americano",
	barcode: 1010101013,
	"price": 2.19
},
{
	"item": "Medium Americano",
	barcode: 1010101014,
	"price": 1.99
},
{
	"item": "Medium Cappucino/Latte",
	barcode: 1010101015,
	"price": 1.99
},
{
	"item": "bread",
	barcode: 1010101016,
	"price": 1.09
},


{
	"item":"milk",
	barcode:2020202027,
	price: 1.10,
}




]





















