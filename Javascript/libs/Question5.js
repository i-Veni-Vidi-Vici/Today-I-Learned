function countNumberOfOccurrences(obj){
    let key;
    let result={};
    for(key in obj){
        if(!result[obj[key]]) result[obj[key]] =0;
        result[obj[key]]++;
    }
    return result;
}

module.exports = countNumberOfOccurrences;