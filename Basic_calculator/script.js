function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function calculate(operator){

    let num1= Number(document.getElementById('num1').value);
    let num2= Number(document.getElementById('num2').value);

    let resvalue=0;


    if(operator === '+'){
        resvalue= add(num1, num2);
    }
    else if(operator === '-'){
        resvalue= subtract(num1, num2);
    }
    else if(operator === '*'){
        resvalue= multiply(num1, num2);
    }
    else if(operator === '/'){
        resvalue= divide(num1, num2);
    }

    document.getElementById('Result').innerText= "Result: " + resvalue;

}