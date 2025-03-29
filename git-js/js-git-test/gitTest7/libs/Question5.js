// 5. object에 포함되는 형용사들의 개수를 object로 리턴하는 함수를 만드세요.
// countNumberOfOccurrences({
//   a: "moron",
//   b: "scumbag",
//   c: "moron",
//   d: "idiot",
//   e: "idiot"
// }) ➞ { moron: 2, scumbag: 1, idiot: 2 }


// countNumberOfOccurrences({
//   a: "moron",
//   b: "moron",
//   c:"moron"
// }) ➞ { moron: 3 }


// countNumberOfOccurrences({
//   a: "idiot",
//   b: "scumbag"
// }) ➞ { idiot: 1, scumbag: 1 }

const countNumberOfOccurrences =(obj)=>{
    let result={}
    for(let key in obj){
        if(!result[obj[key]])
            result[obj[key]]=0;
        result[obj[key]]++;
    }
    return result
}

module.exports= countNumberOfOccurrences