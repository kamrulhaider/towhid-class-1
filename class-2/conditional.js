var isFoodReady = true;

// jodi khabar ready hoy tahole khabo
// if food is ready i will eat

// if (condition) {
//     kajta korbo
// }

// if (isFoodReady == true) {
//     console.log("ami khabo")
// }

var iphonePrice = 100000;
var samsungPrice = 90000;
var myBudget = 170000;

if (iphonePrice > myBudget) {
    // console.log('samsung kinbo')
} else {
    // console.log('iphone kinbo')
}

// if (iphonePrice > myBudget && samsungPrice < myBudget) {
//     console.log('samsung')
// } else {
//     console.log('bari chole jabo')
// }

if (iphonePrice > myBudget || samsungPrice == myBudget) {
    // console.log('samsung')
} else {
    // console.log('iphone')
}

// multiple condition

var money = 10000;
var jomi = true;
var rasta = false;
var mistri = false;

if ((money > 50000 && jomi == true) || (rasta == true && mistri == true)) {
    // console.log('barir kaj suru')
} else {
    // console.log('banabo na')
}

// nested condition 

var chips = 18;
var biskit = 20;
var coke = 25;
var choclet = 10;

myBudget = 25;

if (chips < myBudget) {

    if ((myBudget - chips) == 10) {
        console.log('chips khabo')
    }
    else if (biskit < myBudget) {
        console.log('biskit')
    }
    else if (coke < myBudget) {
        console.log('coke')
    }
    else if (choclet < myBudget) {
        console.log('choclet')
    }
    else {
        console.log('bari chole jabo')
    }
}
