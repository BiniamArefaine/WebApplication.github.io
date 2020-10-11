/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    let result = function2test();

    if(Array.isArray(expected)){
        expected = expected.toString();
    }
    if(Array.isArray(result)){
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

   // ---------------------------------------------------------- problem 5 ----------------------------------------------------------------  
   // a. sum funtion 
function sum(arr){
    let sum = 0;
    for(let i in arr){
        sum += arr[i];
    }

    return sum;
}

console.log("Expected output of sum() is 20 " + myFunctionTest(20 , function(){
    return sum([5,5,7,3])
}))


// b. multiply funtion 
function multiply(arr){

    let x = 1;
    for(let i in arr){
        x *= arr[i];
    }
    return x;

}

console.log("Expected output of multiply() is 32 " + myFunctionTest(32 , function(){
    return multiply([2,8,2])
}))

// ---------------------------------------------------------- problem 6---------------------------------------------------------------- 
function reverse(str){
      
    let strTemp = "";
    for(let i in str){
        strTemp += str[i] 
    }

    return strTemp;
}
 
console.log("Expected output of reverse() is mainib " + myFunctionTest('mainib' , function(){
    return reverse('biniam')
}))

// ---------------------------------------------------------- problem 7---------------------------------------------------------------- 
function findLongestWord1(arrWords){

    let maxSizedWord = arrWords[0].length;

        for (let i in arrWords){
            if (arrWords[i].length > maxSizedWord.length)
            maxSizedWord = arrWords[i].length;
        }

        return maxSizedWord;
}

console.log("Expected output of findLongestWord([people,cars,cats]) is people " + myFunctionTest(6, function () {
    return findLongestWord1(["people","cars","cats"])
}));
