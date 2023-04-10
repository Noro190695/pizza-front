let array = [1,4, 1,2,2,3,3,4,5,5,6,6];
function singleNumber(array){
    for(let i = 0; i<array.length;i++){
        if(array[i]===array[i+1]){
            i++
            continue;
        }
        return array[i]
    }
    
}
console.log(singleNumber(array));