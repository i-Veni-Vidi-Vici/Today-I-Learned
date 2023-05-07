const reverseWords = require("../libs/reverseWords");

test(`reverseWords(" the sky is blue") ➞ "blue is sky the"`, ()=>{
    expect(reverseWords(" the sky is blue")).toBe("blue is sky the"),
    expect(reverseWords(" the sky is blue")).toMatch("blue is sky the")
})

test(`reverseWords("hello   world!  ") ➞ "world! hello"`, ()=>{
    expect(reverseWords("hello   world!  ")).toBe("world! hello"),
    expect(reverseWords("hello   world!  ")).toMatch("world! hello")
})

test(`reverseWords("a good example") ➞ "example good a"`, ()=>{
    expect(reverseWords("a good example")).toBe("example good a"),
    expect(reverseWords("a good example")).toMatch("example good a")
})
