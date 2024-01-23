var num1 = "";
var n1 = 0;
var num2 = "";
var n2 = 0;
var res = 0;
var buffer = 0;
var flag = 0;
var op = "";
function getValue(num){
    if(flag == 0){
        num1 += num;
        n1 = parseFloat(num1);
    }
    else{
        num2 += num;
        n2 = parseFloat(num2);
    }
    
}

function getFunc(sym){
    flag = 1;
    op = sym;
}

function getRes(){
    switch(op){
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
    buffer = res;
    num1 = "";
    num2 = "";
    n1 = 0;
    n2 = 0;
    flag = 0;
    op = "";
    return res;
}