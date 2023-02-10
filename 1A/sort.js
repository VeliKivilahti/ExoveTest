/*
Uses Selection Sort Algorithm
Run node sort.js to demonstrate
*/
let original = ["BOAT","Locomotive","Poet","Accelerate","GOLF","ACCIDENTAL","Submarine"]
console.log("original array =",original)
console.log("sorted array = ",sortArray(original))

function sortArray(array){
let sortedArray = array 
let index, charIndex
for(i = 0; i < array.length-1;i++){
    index = i
    for(j = i+1; j < array.length;j++){
        charIndex = 2
        for (c= charIndex;sortedArray[j].charCodeAt(c) == sortedArray[index].charCodeAt(c) && c >= 0 ;c--) 
        { // Goes through the array until characters are not the same
            if (c !=0) { // check for that we aren't at the first / last letter that we check.
                charIndex = c-1   // make the charIndex the next character we check
            }
        }
          if (sortedArray[j].charCodeAt(charIndex) < sortedArray[index].charCodeAt(charIndex)){
            index = j
        }

    }
    if (i != index){
    [sortedArray[i], sortedArray[index]] = [sortedArray[index], sortedArray[i]];// swap the array values 
    } 
}
return sortedArray
}