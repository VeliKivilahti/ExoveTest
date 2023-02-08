/*
Uses Selection Sort Algorithm
*/
let array = ["BOAT","Locomotive","Poet","Accelerate","GOLF","ACCIDENTAL","Submarine"]
sortArray(array)

function sortArray(array){
let newArray = array
let index
for(i = 0; i < array.length-1;i++){
    index = i
    for(j = i+1; j < array.length;j++){
        if (newArray[j].charCodeAt(2) < newArray[index].charCodeAt(2)){
            index = j
        }
        if (newArray[j].charCodeAt(2) == newArray[index].charCodeAt(2)){
            if (newArray[j].charCodeAt(1) < newArray[index].charCodeAt(1)){
                index = j
            }
            if (newArray[j].charCodeAt(1) == newArray[index].charCodeAt(1)){
                if (newArray[j].charCodeAt(0) < newArray[index].charCodeAt(0)){
                    index = j  
                }
            }
        }
    }
    if (i != index){
    [newArray[i], newArray[index]] = [newArray[index], newArray[i]];// swap the array values 
    } 
}
}