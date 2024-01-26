/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumbers1 = Number(document.querySelector("#add1").value);
    let addNumbers2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumbers1, addNumbers2);


}

/* Function Expression - Subtract Numbers */
let subtract = function (number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let subtractNumbers1 = Number(document.querySelector("#subtract1").value);
    let subtractNumbers2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumbers1, subtractNumbers2);

}

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

function multiplyNumbers() {
    let multiplyNumbers1 = Number(document.querySelector("#factor1").value);
    let multiplyNumbers2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multiplyNumbers1, multiplyNumbers2);

}

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

function divideNumbers() {
    let divideNumbers1 = Number(document.querySelector("#dividend").value);
    let divideNumbers2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divideNumbers1, divideNumbers2);

}


/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", function(){
    const subtotal = document.getElementById("subtotal").value;
    let totalAmount = 0;
    var memberBox = document.getElementById("member");

    if ((memberBox.checked) === true) {
        // Apply 20% of discount to the subtotal
        let discount = subtotal * 0.2;
        totalAmount = subtotal - discount;
    } else {
        // let the same amount
        totalAmount = subtotal;

    }
    
    document.querySelector("#total").innerHTML = `$${Number(totalAmount).toFixed(2)}`;

});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = arr;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = arr.filter(num => num % 2 === 1);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = arr.filter(num => num % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = arr.reduce((sum, num) => sum + num);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = arr.map(num => num * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = arr.map(num => num * 2).reduce((sum, num) => sum + num);

document.querySelector("#addNumbers").addEventListener("click", addNumbers);
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);