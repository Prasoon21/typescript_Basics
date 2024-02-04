var num1Ele = document.getElementById('num1');
var num2Ele = document.getElementById('num2');
var buttonEle = document.querySelector('button');
var numResults = [];
var stringResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
if (buttonEle) {
    buttonEle.addEventListener('click', function () {
        var num1 = num1Ele.value;
        var num2 = num2Ele.value;
        var result = add(+num1, +num2);
        numResults.push(result);
        var stringResult = add(num1, num2);
        stringResults.push(stringResult);
        printResult({ val: result, timestamp: new Date() });
        console.log(numResults, stringResults);
    });
}
