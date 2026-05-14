// Sort an Array.
function sort (array){
    return array.sort((a,b) => a- b);
}
console.log(sort([10,2,3,5,1]));

/*
Note: array.sort((a,b) => a - b);
1. array.sort() method Changes orignal array
2. array.sort((a,b) => a - b); here we will get the acending order sorting.
(small -> larger)
3. if we make array.sort((a,b) => b- a); we will get decending order
( larger -> small)

example: [10,1,4,2,3] acending
step 1: 10 - 1 = 9 Result Positive 1 moves ahead like [1,10,4,2,3]
step 2: 10 - 4 = 6 result Positive 4 moves ahead like [1,4,10,2,3]
step 3: 10 - 2 = 8 result Positive 4 moves ahead like [1,4,2,10,3]
step 4: 10 - 3 = 7 result Positive 4 moves ahead like [1,4,2,3,10]
step 5: 1 - 4 = -3 Result Negative 1 remains on the same place [1,4,2,3,10]
step 6: 4 - 2 = 2 result Positive 2 moves ahead like [1,2,4,3,10]
step 7: 4 - 3 = 1 result Positive 3 moves ahead like [1,2,3,4,10]
step 8: 4 - 10 = -6 Result Negative 4 remains on the same place [1,2,3,4,10]
*/