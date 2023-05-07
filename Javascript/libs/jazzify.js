
function jazzify(array){
    for(let i=0; i<array.length; i++){
        if(array[i][array[i].length-1] != 7)
            array[i]+=7;
    }
    return array;
}

module.exports = jazzify;
