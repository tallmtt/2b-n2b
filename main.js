if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

// Variables and Lists


function dataentry() {
	// Check what variables exist and calculations needed to do
	if (localStorage.getItem('price')) {
		price = localStorage.price;
		//alert(price);
		let price2 = prompt("What is the price/cost?", price);
		localStorage.price = price2;
		mprice = 'Price: $' + price2
		document.getElementById("price").innerHTML = mprice;
	} else {
		price();
	}
	
	if (localStorage.getItem('period')) {
		period = localStorage.period;
		//alert(period);
		let period2 = prompt("How many time periods (months/days/years)?", period);
		localStorage.period = period2;
		time = 'Time period: ' + period2 + ' <select name = "timeunits"><option value = "months" selected>months</option><option value = "days">days</option><option value = "years">years</option></select><br>'
		document.getElementById('period').innerHTML = time;
	} else {
		period();
	}
	
	if (localStorage.getItem('life')) {
		life = localStorage.life;
		//alert(life);
		let life2 = prompt("How long is it useful?", life);
		localStorage.life = life2;
		ownership = 'Expected length of ownership/usefulness: ' + life2
		document.getElementById('life').innerHTML = ownership;
	} else {
		life();
	}

};

function price() {
	let price = prompt("What is the price/cost?");
	localStorage.price = price;
	mprice = 'Price: $'+price
	document.getElementById("price").innerHTML = mprice;
};

function period() {
	let period = prompt("How many time periods (months/days/years)?");
	localStorage.period = period;
	time = 'Time period: ' + period + ' <select name = "timeunits"><option value = "months" selected>months</option><option value = "days">days</option><option value = "years">years</option></select><br>'
	document.getElementById('period').innerHTML = time;
}

function life() {
	let life = prompt("How long is it useful?");
	localStorage.life = life;
	ownership = 'Expected length of ownership/usefulness: ' + life
	document.getElementById('life').innerHTML = ownership;
}

function calculations() {
	alert('Finally!');
	
}