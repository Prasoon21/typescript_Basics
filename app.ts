const num1Ele = document.getElementById('num1') as HTMLInputElement;
const num2Ele = document.getElementById('num2') as HTMLInputElement;
const buttonEle = document.querySelector('button');

const numResults: number[] = [];
const stringResults: string[] = []

type NumOrString = number | string;
type Result = { val: number; timestamp: Date }

interface ResultObj {
    val: number;
    timestamp: Date;
}

function add(num1: NumOrString, num2: NumOrString) {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    } else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}


function printResult(resultObj: Result){
    console.log(resultObj.val);
}

if(buttonEle){
    buttonEle.addEventListener('click', () => {
        const num1 = num1Ele.value;
        const num2 = num2Ele.value;
        const result = add(+num1, +num2);
        numResults.push(result as number);
        const stringResult = add(num1, num2);
        stringResults.push(stringResult as string);
        printResult({ val: result as number, timestamp: new Date() })
        console.log(numResults, stringResults);
    })
}


