// 2. 배열에 있는 true의 개수를 리턴하는 함수를 만드세요.
// 비어있는 배열이면 0을 리턴
// 배열 값 타입은 boolean
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

function countTrue(array){
    let count=0;
    for(let i=0; i<array.length; i++){
        if(array[i] == true) count++;
    }
    return count;
}

module.exports = countTrue;