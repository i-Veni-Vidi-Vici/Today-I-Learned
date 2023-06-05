// 3. 배열 값의 빈도를 리턴하는 함수를 만드세요. 함수 리턴은 object type이며, object key는 배열의 고유값입니다.
// 입력이 빈배열일 경우 빈 object를 리턴
// object는 배열값 순서와 같음
// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

// getFrequencies([]) ➞ {}

const getFrequencies = (arr)=>{
    let obj={}
    arr.forEach(val=> {
        if(!obj[val])
            obj[val]=0;
        obj[val]++;
    });

    return obj;
}

module.exports=getFrequencies