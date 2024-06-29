const invertirArray = (array)=>{
    let copy = array.slice();
    let reversed = copy.reverse();
    console.log("Array original:", array);
    console.log("Array invertido:", reversed);
}

invertirArray([23,5,34,56,98,"cadena",7])