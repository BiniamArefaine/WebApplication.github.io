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

function myarr(){
   return [1,1];
}

console.log("Expected output of myarr() is 40  " + myFunctionTest([1,1], function () {
    return myarr();
}))

// ---------------------------------------------------------- problem 2 ----------------------------------------------------------------
function max(num1, num2){
    if (num1 > num2)
        return num1;
    else
        return num2;
}

console.log("Expected output of max() is 20  " + myFunctionTest(20 , function () {
    return max(20, 10);
}))

   // ---------------------------------------------------------- problem 3 ----------------------------------------------------------------
function maxOfThree(num1, num2, num3){
    let maxOfTwo = num1 > num2 ? num1 : num2;
    return num3 > maxOfTwo ? num3 : maxOfTwo;
}

console.log("Expected output of maxOfThree() is 15 " + myFunctionTest(15 , function(){
    return maxOfThree(12,3,15)
}))

   // ---------------------------------------------------------- problem 4 ----------------------------------------------------------------
function isVowel(char){
    if (char.length === 0) return false;
    let vowels = 'AEIOU'
    if(vowels.indexOf(char) >= 0 || vowels.toLowerCase.indexOf(char) >= 0)
    return true; 
}

console.log("Expected output of isVowel() is True " + myFunctionTest(true , function(){
    return isVowel('A')
}))

   // ---------------------------------------------------------- problem 5 ----------------------------------------------------------------  
   // a. sum funtion 
function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

console.log("Expected output of sum() is 20 " + myFunctionTest(20 , function(){
    return sum([5,5,7,3])
}))


// b. multiply funtion 
function multiply(arr){

const prod = function () {
  return arr.reduce((a, b) => a * b, 1);
}
  return prod(arr);

}

console.log("Expected output of multiply() is 32 " + myFunctionTest(32 , function(){
    return multiply([2,8,2])
}))

// ---------------------------------------------------------- problem 6---------------------------------------------------------------- 
function reverse(str){
      
    let strTemp = "";
    for(let i = str.length-1; i >= 0; i--){
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

        for (let i=0; i < arrWords.length;i++){
            if (arrWords[i].length > maxSizedWord.length)
            maxSizedWord = arrWords[i].length;
        }

        return maxSizedWord;
}

console.log("Expected output of findLongestWord([people,cars,cats]) is people " + myFunctionTest(6, function () {
    return findLongestWord1(["people","cars","cats"])
}))

// ---------------------------------------------------------- problem 8---------------------------------------------------------------- 
function findLongestWord(arrWords2, num){
    let largerArrays = arrWords2.filter(function(e){
        return e.length > num;
    });
    return largerArrays;
}
console.log("Expected output of findLongestWord() is ['people', 'cars'] " + myFunctionTest(["people", "cars"] , function(){
    return findLongestWord(["Is", "people", "cars", "U"], 2)
}))

// ---------------------------------------------------------- problem 9---------------------------------------------------------------- 

// a. multiply each element by 10

function multipliedBy10(arr) {
     return arr.map(function (elem,i,arr) {
return elem * 10;
 })
}

console.log("Expected output of multipliedBy10([2,4,6]) is [20,40,60] " + myFunctionTest([20,40,60], function () {
     return multipliedBy10([2,4,6]);
 }));

// b. return all elements equal to 3
function allElementsequalTo3(arr) {
      return arr.filter(function (elem,i,arr) {
return elem == 3;
 })
 } 

console.log("Expected output of allElementsequalTo3([1,2,3]) is 3] " + myFunctionTest([3], function () {
      return allElementsequalTo3([1,2,3]);
 }));

// c. product of all elements
function productOfAllElements(arr) {
     return arr.reduce(function (total,elem,i,arr) {
return total * elem;
});
} 