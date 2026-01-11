const buttons = document.querySelectorAll('button');
const operators = document.querySelectorAll('.operator');
const displayElement = document.querySelectorAll('.input');
const num = document.querySelectorAll('.num');

let operatorInputed = '';
let preNum = '';
let resentNum = '';

function calculate( Num_1, operator, Num_2 ){
    let result = 0;
    N1 = Number(Num_1);
    N2 = Number(Num_2)
    switch (operator){
        case '+':
            result = N1 + N2;
            break;
        case '-':
            result = N1 - N2;
            break;
        case '*':
            result = N1 * N2;
            break;
        case '/':
            result = N1 / N2;
            break;
    }
    return String(result);
}