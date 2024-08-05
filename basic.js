//1. Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 

let numArray = [11,6,2,7,71]

function primeCheck(numArray) {
   let i=0;
   while(i<numArray.length){
      if(numArray[i]==2||numArray[i]%2!=0){
         console.log("prime number",numArray[i]);

      }else{
         console.log("not prime number",numArray[i]);

      }
      i++;
   }
}
primeCheck(numArray);



//2. Write a JavaScript program to find the most frequent item of an array

const myArray = [2, 4, 2, 2, 4, 2, 5, 3, 6];

function findMostFrequentItem(array){
   if(array.length == 0){
      return "array is empty";
   }

   let frequencyMap = {};
   let maxFrequency = 0;
   let mostFrequentItem;

   for(item of  array){

      frequencyMap[item] = (frequencyMap[item] || 0) + 1;

      if(frequencyMap[item]>maxFrequency){
         maxFrequency = frequencyMap[item]
         mostFrequentItem = item;

      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
   }
   return mostFrequentItem;

}
const result = findMostFrequentItem(myArray);
console.log("The most frequent item is:", result);


// 3. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.

function oddEvenCheck() {
   for (let i = 0; i <= 15; i++) {
      if (i%2==0) {
         console.log(i,"is even");
      } else {
         console.log(i,"is odd");
         
      }      
   }
}
oddEvenCheck();


//4. Write a JavaScript program to find the sum of squares of the elements of an array.

let array1 = [1,2,3,4,5]

function sumOfSquares(){
   let sum = 0;
   for (elem of array1 ){
      sum = sum+elem*elem;
   }
   return sum;
}

 console.log(sumOfSquares(array1));



