/*
Uses Selection Sort Algorithm
Run node sort.js to demonstrate
*/
let original = ["BOAT","Locomotive","Poet","Accelerate","GOLF","ACCIDENTAL","Submarine"]
console.log("original array =",original)
console.log("sorted array = ",sortArray(original))

function sortArray(array){
let sortedArray = array
let index
for(i = 0; i < array.length-1;i++){
    index = i
    for(j = i+1; j < array.length;j++){
        if (sortedArray[j].charCodeAt(2) < sortedArray[index].charCodeAt(2)){
            index = j
        }
        if (sortedArray[j].charCodeAt(2) == sortedArray[index].charCodeAt(2)){
            if (sortedArray[j].charCodeAt(1) < sortedArray[index].charCodeAt(1)){
                index = j
            }
            if (sortedArray[j].charCodeAt(1) == sortedArray[index].charCodeAt(1)){
                if (sortedArray[j].charCodeAt(0) < sortedArray[index].charCodeAt(0)){
                    index = j  
                }
            }
        }
    }
    if (i != index){
    [sortedArray[i], sortedArray[index]] = [sortedArray[index], sortedArray[i]];// swap the array values 
    } 
}
return sortedArray
}