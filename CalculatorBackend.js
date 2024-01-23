var num1 = "";
var n1 = 0;
var num2 = "";
var n2 = 0;
var res = 0;
var buffer = 0;
var flag = 0;
var op = "";

function getValue(num) {
    if (flag == 0) {
        num1 += num;
        n1 = parseFloat(num1);
        document.getElementById("display").value = n1;
    } else {
        num2 += num;
        n2 = parseFloat(num2);
        document.getElementById("display").value = n2;
    }
}

function getFunc(sym) {
    if (flag == 1) {
        evaluate();
        num1 = buffer.toString();
        num2 = "";
        n1 = buffer;
        n2 = 0;
        flag = 0;
    }
    
    flag = 1;
    op = sym;
}

function clearDisplay() {
    num1 = "";
    num2 = "";
    n1 = 0;
    n2 = 0;
    flag = 0;
    op = "";
    document.getElementById("display").value = "";
}

function evaluate() {
    switch(op) {
        case "+":
            res = n1 + n2;
            break;
        case "-":
            res = n1 - n2;
            break;
        case "*":
            res = n1 * n2;
            break;
        case "/":
            res = n1 / n2;
            break;
    }
    
    document.getElementById("display").value = res;
    buffer = res;
    num1 = res.toString();
    num2 = "";
    n1 = res;
    n2 = 0;
    op = "";
}

// Function for handling the equals button
function equals() {
    if (flag == 1) {
        evaluate();
        flag = 0;
    }
}
