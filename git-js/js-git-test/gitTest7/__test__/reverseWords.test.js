// 3. 단어를 역순으로 나열하는 함수를 만들고 unit test를 작성하세요.
// 단어는 space로 구분됩니다.
// 단어에 포함된 space는 무시하세요.
// reverseWords(" the sky is blue") ➞ "blue is sky the"

// reverseWords("hello   world!  ") ➞ "world! hello"

// reverseWords("a good example") ➞ "example good a"

const reverseWords = require('../libs/reverseWords')

describe(`reverseWords`, ()=>{

    test(`reverseWords(" the sky is blue") ➞ "blue is sky the"`,()=>{
        expect(reverseWords(" the sky is blue")).toMatch("blue is sky the");
    })

    test(`reverseWords("hello   world!  ") ➞ "world! hello"`,()=>{
        expect(reverseWords("hello   world!  ")).toMatch("world! hello");
    })

    test(`reverseWords("a good example") ➞ "example good a"`,()=>{
        expect(reverseWords("a good example")).toMatch("example good a");
    })
})