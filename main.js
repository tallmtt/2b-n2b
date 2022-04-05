if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

// Variables and Lists


function dataentry() {
    // 	Check what variables exist and calculations needed to do
    if (localStorage.getItem('price')) {
        price = localStorage.price;
    // 		alert(price);
        let price2 = prompt("What is the price/cost?", price);
        localStorage.price = price2;
        mprice = '<p><b>Price:</b> $' + price2 + '</p>'
        document.getElementById("price").innerHTML = mprice;
    } else {
        price();
    }

    if (localStorage.getItem('period')) {
        period = localStorage.period;
    // 		alert(period);
        let period2 = prompt("How many time periods (months/days/years)?", period);
        localStorage.period = period2;
//        time = '<p><b>Time period:</b> ' + period2 + ' <select id="timeunits"><option value = "Month" selected>months</option><option value = "Day">days</option><option value = "Year">years</option></select></p>'
		time = '<p><b>Time period:</b> ' + period + ' time periods</p>'
        document.getElementById('period').innerHTML = time;
    } else {
        period();
    }

    if (localStorage.getItem('uses')) {
        uses = localStorage.uses;
    // 		alert(uses);
        let uses2 = prompt("How often would you use it per time period?", uses);
        localStorage.uses = uses2;
        ownership = '<p><b>Uses per time period:</b> ' + uses2 + ' / period</p>'
        document.getElementById('uses').innerHTML = ownership;
    } else {
        uses();
    }

};

function price() {
    let price = prompt("What is the price/cost?");
    localStorage.price = price;
    mprice = '<p><b>Price:</b> $' + price + '</p>'
    document.getElementById("price").innerHTML = mprice;
};

function period() {
    let period = prompt("How many time periods (months/days/years)?");
    localStorage.period = period;
//    time = '<p><b>Time period:</b> ' + period + ' <select name = "timeunits"><option value = "months" selected>months</option><option value = "days">days</option><option value = "years">years</option></select></p>'
    time = '<p><b>Time period:</b> ' + period + ' time periods</p>'
    document.getElementById('period').innerHTML = time;
}

function uses() {
    let uses = prompt("How often would you use it per time period?");
    localStorage.uses = uses;
    ownership = '<p><b>Expected uses per time period:</b> ' + uses + '/period</p>'
    document.getElementById('uses').innerHTML = ownership;
}

function calculations() {

    price = localStorage.price;
    period = localStorage.period;
    uses = localStorage.uses;
	
//	if (document.getElementById('timeunits') {
//		timeunits = document.getElementById('timeunits').value;
//	} else {
		timeunits = "Time Periods"
//	}
    
//    labels();
//	  data();
    
	// Actual chart using chart.js
    new Chart(document.getElementById("costovertime"), {
        type: 'line',
        data: {
            labels: labels(),  // x-axis
            datasets: [{ 
                data: data(),  // y-axis
                label: "Cost per " + timeunits,
                borderColor: "#3e95cd",
                fill: false,
            },
			{ 
                data: eightytwenty(),
                label: "93% breakpoint",
                borderColor: "#8e5ea2",
                fill: true,
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Purchase Evaluation: Cost over time'
            },
            scales: {
                 xAxes: [{
					 display: true,
					 scaleLabel: {
						display: true,
						labelString: timeunits,
					}
                 }],
                 yAxes: [{
					 display: true,
					 scaleLabel: {
						display: true,
						labelString: 'Cost ($)',
					}
                 }],
			},
        }
    });

//costperuse
    new Chart(document.getElementById("costperuse"), {
        type: 'line',
        data: {
            labels: uselabels(),  // x-axis
            datasets: [{ 
                data: usedata(),  // y-axis
                label: "Cost per use",
                borderColor: "#3e95cd",
                fill: false,
//            },
//			{ 
//                data: eightytwenty(),
//                label: "93% breakpoint",
//                borderColor: "#8e5ea2",
//                fill: true,
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Purchase Evaluation: Per use cost'
            },
            scales: {
                 xAxes: [{
					 display: true,
					 scaleLabel: {
						display: true,
						labelString: 'Cost per use',
					}
                 }],
                 yAxes: [{
					 display: true,
					 scaleLabel: {
						display: true,
						labelString: 'Cost ($)',
					}
                 }],
			},
        }
    });


}

// labels for chart.js
function labels() {
    var periods = [];  
    for (let i = 1; i <= period; i++) {
//         alert("The number is " + i);
        periods.push(i);
    }
    return periods;
//     alert(periods);    
}

// data for chart.js
function data() {
    var costs = [];
    for (let i=0; i <=period; i++) {
        if (i<1) {
            divide = price;
        } else {
        divide = ((price/i).toFixed(2));
//         alert(divide);
        costs.push(divide);
        }
    }
    return costs;
//     alert(costs);
}

// use data
function uselabels() {
	var usetimes = []; 
	usetime = uses*period;
	for (let i=1; i <=usetime; i++) {
//		alert(usetimes);
		usetimes.push(i);
	}
	return usetimes;	
}

function usedata() {
    var usecosts = [];
	usetimes = uses*period
    for (let i=0; i <=usetimes; i++) {
        if (i<1) {
            divide = price;
        } else {
        divide = ((price/i).toFixed(2));
        usecosts.push(divide);
        }
    }
    return usecosts;
}

function eightytwenty() {
	let et = (0.07*price)  // 7% per time period (93% breakpoint)
    var eighty = [];
    for (let i=0; i <= period; i++) {
        if (i<1) {
            divide = price;
        } else {
				divide = ((price/i).toFixed(2));
//				alert('1) et =' + et + ', divide = ' + divide);
//				divideet = divide;
				if (divide >=et) {
//					alert('2)et =' + et + ', divide = ' + divide); // + ', divide-et: ' + divideet);
					eighty.push(divide);
				}
 		}
   }
    return eighty;
}

function resetpage() {
	window.Location.reload();
//	localStorage.price = ''
//	localStorage.removeItem('period');
//	localStorage.removeItem('uses');
}
