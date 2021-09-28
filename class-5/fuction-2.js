// Parametre

function meal() {
    var add = 2 + 3;
    return add;
}
// console.log(add);

// meal()

function add(num1, num2) {
    var add = num1 + num2;
    // console.log(add)
    return add;
}

var newAdd = add(10, 15);

var total = meal() + newAdd;
console.log(total)