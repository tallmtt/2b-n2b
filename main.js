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
        mprice = 'Price: $' + price2
        document.getElementById("price").innerHTML = mprice;
    } else {
        price();
    }

    if (localStorage.getItem('period')) {
        period = localStorage.period;
    // 		alert(period);
        let period2 = prompt("How many time periods (months/days/years)?", period);
        localStorage.period = period2;
        time = 'Time period: ' + period2 + ' <select id="timeunits"><option value = "months" selected>months</option><option value = "days">days</option><option value = "years">years</option></select><br>'
        document.getElementById('period').innerHTML = time;
    } else {
        period();
    }

    if (localStorage.getItem('uses')) {
        uses = localStorage.uses;
    // 		alert(uses);
        let uses2 = prompt("How long is it useful?", uses);
        localStorage.uses = uses2;
        ownership = 'Expected uses per time period: ' + uses2 + '/period'
        document.getElementById('uses').innerHTML = ownership;
    } else {
        uses();
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

function uses() {
    let uses = prompt("How long is it useful?");
    localStorage.uses = uses;
    ownership = 'Expected uses per time period: ' + uses + '/period'
    document.getElementById('uses').innerHTML = ownership;
}

function calculations() {

    price = localStorage.price;
    period = localStorage.period;
    uses = localStorage.uses;   
    timeunits = document.getElementById('timeunits').value;
    
    labels();
    
    data();
    
//     alert(periods);
    
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
//             labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
            labels: labels(),  // x-axis
            datasets: [{ 
//                 data: [12,6,4],
                data: data(),  // y-axis
                label: "Cost per " + timeunits,
                borderColor: "#3e95cd",
                fill: true,
            }]
        },
        options: {
            responsive: true,
            title: {
                display: false,
                text: 'Cost per ' + timeunits
            },
//             scales: {
//                 x: {
//                     display: true,
//                     title: {
//                         display: true,
//                         text: 'Month',
//                         color: '#911',
//                         font: {
//                             family: 'Comic Sans MS',
//                             size: 20,
//                             weight: 'bold',
//                             lineHeight: 1.2,
//                         },
//                         padding: {top: 20, left: 0, right: 0, bottom: 0}
//                     }
//                 },
//                 y: {
//                     display: true,
//                     title: {
//                     display: true,
//                     text: 'Value',
//                     color: '#191',
//                     font: {
//                         family: 'Times',
//                         size: 20,
//                         style: 'normal',
//                         lineHeight: 1.2
//                     },
//                     padding: {top: 30, left: 0, right: 0, bottom: 0}
//                     }
//                 }
//         },
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
