const buttons = document.querySelectorAll('button');
const operators = document.querySelectorAll('.operator');
const displayElement = document.querySelector('.input');
const num = document.querySelectorAll('.num');

let operatorInputed = '';
let preNum = '';
let resentNum = '';

/* 연산 함수, 입력받은 operator에 따라 Num_1과 Num_2 연산 */
function calculate( Num_1, operator, Num_2 ){
    let result = 0;
    const N1 = Number(Num_1);
    const N2 = Number(Num_2)
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
            if (N2 === 0) return 'Erroe';

            result = N1 / N2;
            break;
    }
    return String(result);
}


/* 숫자 버튼 입력시 resentNum 새로 입력 후 dispaly 수정 */
num.forEach(btn => {
    btn.addEventListener('click', () => {
        resentNum += btn.textContent;
        displayElement.textContent = resentNum;
    });
});

/* 연산자 버튼 입력시 연산 */
operators.forEach(btn => {
    btn.addEventListener('click',() => {
        /* 연산자 버튼을 누루기에 앞서 뒷 숫자를 입력했는지를 확인 */
        if(resentNum === '' && preNum !== '') {
            operatorInputed = btn.textContent;
            return;
        }

        /* 연산자 버튼을 눌렀을때 이미 뒤 숫자까지 입력시 자동연산 */
        if(preNum !=='') {
            preNum = calculate(preNum, operatorInputed,resentNum);
            displayElement.textContent = preNum;
        }

        /* 앞 숫자가 없음에도 뒷 숫자만 존재한다면, 뒷숫자를 앞으로 연산 */
        else{
            preNum = resentNum;
        }

        /* 입력된 연산자 기억 */
        operatorInputed = btn.textContent;
        resentNum = '';
    })
})

/* = 연산자 처리 */
document.querySelector('.result').addEventListener('click', () => {
    /* 연산할 숫자가 모두 입력되어 있는지 확인 후 연산 */
    if (preNum === '' || resentNum ==='') return;

    const result = calculate(preNum, operatorInputed, resentNum);
    displayElement.textContent = result;

    /* 결과값을 기초 숫자로 삼고 나머지 초기화 */
    preNum = result;
    resentNum = '';
    operatorInputed = '';
});

/* 초기화 버튼 C */
document.querySelector('.ac').addEventListener('click', () => {
    preNum = '';
    resentNum = '';
    operatorInputed = '';
    displayElement.textContent = '0';
});

