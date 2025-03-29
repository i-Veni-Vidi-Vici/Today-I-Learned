// 4. 현재 당신이 진행중인 챕터와 가장 가까운 챕터를 리턴하는 함수를 만드세요. 만일 두 챕터가 동일한 차이이면 더 높은 챕터를 리턴합니다.
// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10) ➞ "Chapter 2"


// nearestChapter({
//   "New Beginnings" : 1,
//   "Strange Developments" : 62,
//   "The End?" : 194,
//   "The True Ending" : 460
// }, 200) ➞ "The End?"


// nearestChapter({
//   "Chapter 1a" : 1,
//   "Chapter 1b" : 5
// }, 3) ➞ "Chapter 1b"

function nearestChapter(obj, chap) {
    let result;
    let key;
    for(val in obj){
        if(!result){
            result = Math.abs(chap- obj[val]);
            key= val;
        }
        if(result>=  Math.abs(chap- obj[val])){
            result = Math.abs(chap- obj[val]);
            key= val;
        }
    }
    return key;

}
module.exports= nearestChapter;