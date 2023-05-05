
function nearestChapter(obj, num){
    let val;
    let result;
    let key;
    let retKey;
    // for(let i=0; i<Object.keys(obj).length; i++){
    //     val =obj[Object.keys(obj)[i]];
    //     if(i==0) 
    //         result= Math.abs(num-val);
    //     if(result>=Math.abs(num-val))
    //         key = Object.keys(obj)[i];
    // }
    for(key in obj){
        val =obj[key];
        if(!result){
            result= Math.abs(num-val); }
        if(result>=Math.abs(num-val))
            retKey = key;
    }
    return retKey;
    
}
module.exports = nearestChapter;