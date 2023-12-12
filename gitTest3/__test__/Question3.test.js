// 3. 배열 값의 빈도를 리턴하는 함수를 만드세요. 함수 리턴은 object type이며, object key는 배열의 고유값입니다.
// 입력이 빈배열일 경우 빈 object를 리턴
// object는 배열값 순서와 같음
// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

// getFrequencies([]) ➞ {}


const { default: expect } = require("expect");
const getFrequencies = require("../libs/Question3");

describe("Question3",()=>{
    test(`getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }`,()=>{
        expect(getFrequencies(["A", "B", "A", "A", "A"])).toEqual({ A: 4, B: 1 })
    })

    test(`getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }`,()=>{
        expect(getFrequencies([true, false, true, false, false])).toEqual({ true: 2, false: 3 })
    })

    test(`getFrequencies([]) ➞ {}
    `,()=>{
        expect(getFrequencies([])).toEqual({})
    })
}
)