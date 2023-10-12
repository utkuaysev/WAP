"use strict"
function max(param1, param2) {
    if(param1 > param2){
        return param1;
    }
    else{
        return param2;
    }
}

function maxOfThree(param1, param2, param3){
    if(param1 > param2 && param1 > param3){
        return param1;
    }
    else if(param2 > param3){
        return param2;
    }
    else{
        return param3;
    }
}

function isVowel(c){
    return "aeiou".indexOf(c) != -1;
}
function sum(arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        sum += element;
    }
    return sum;
}

function multiply(arr){
    let res = 1;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        res *= element;
    }
    return res;
}    
function reverse(str){
    let r_str = ""
    for (let index = str.length - 1; index >= 0; index--) {
        const element = str[index];
        r_str += element
    }
    return r_str;
}
function findLongestWordLength(arr){
    let max = -1;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element.length > max){
            max = element.length;
        }
    }
    return max;
}
function filterLongWords(arr, i){
    return arr.filter(item => item.length > i);

}
function computeSumOfSquares(arr){
    return arr.map(item => item * item)
        .reduce((x,y) => x + y)
}
function printOddNumbersOnly(arr){
    let arrOdd = arr.filter(item => item % 2 == 1)
    console.log(arrOdd.toString())
}
function computeSumOfSquaresOfEvensOnly(arr){
    return arr.filter(item => item % 2 == 0)
        .map(item => item * item)    
        .reduce((x,y) => x + y)
}
function funcSum(arr){
    return arr.reduce((x,y) => x + y)
}

function funcMultiply(arr){
    return arr.reduce((x,y) => x * y)
}    
function printFibo(n, a, b){
    getFiboRecursive(n,a,b,"")
}
function getFiboRecursive(n, a, b, str){
    if(n<=1){
        console.log(str + a);
        return str + a;
    }
    getFiboRecursive(n - 1, b, a + b, str + a +"," );
}

console.log(max(2,3))
console.log(max(3,2))
console.log(maxOfThree(1,2,3))
console.log(maxOfThree(4,2,3))
console.log(maxOfThree(1,2,0))
console.log(isVowel('a'))
console.log(isVowel('f'))
console.log(sum([1,2,3,4]))
console.log(multiply([1,2,3,4]))
console.log(reverse("jag testa"))
console.log(findLongestWordLength(["fa","fas","fasa","s"]))
console.log(filterLongWords(["fa","fas","fasa","s"], 2))
console.log(computeSumOfSquares([1,2,3,4]))
printOddNumbersOnly([1,2,3,4])
console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4]))
printFibo(10, 0, 1)
printFibo(10, 0, 1)

