
function nearestChapter(obj, num){
    let val;
    let result;
    let key;
    for(let i=0; i<Object.keys(obj).length; i++){
        val =obj[Object.keys(obj)[i]];
        if(i==0) 
            result= Math.abs(num-val);
        if(result>=Math.abs(num-val))
            key = Object.keys(obj)[i];
    }
    return key;
}

module.exports = nearestChapter;