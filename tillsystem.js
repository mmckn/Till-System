// recieve prices
//store in an array//
//add prices
//recieve payment
//subtract prices from payment
//return change
//determine change coins/notes use remainder?
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
	changeDisplay.innerHTML = "$" + changeRounded;
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
//map array if an item divides into the total then push it the number of times it divides into a new array then show this array
//NESTED FOR EACH