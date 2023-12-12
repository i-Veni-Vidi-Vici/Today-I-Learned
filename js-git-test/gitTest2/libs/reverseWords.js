// 3. 단어를 역순으로 나열하는 함수를 만들고 unit test를 작성하세요.
// 단어는 space로 구분됩니다.
// 단어에 포함된 space는 무시하세요.
// reverseWords(" the sky is blue") ➞ "blue is sky the"

// reverseWords("hello   world!  ") ➞ "world! hello"

// reverseWords("a good example") ➞ "example good a"

const reverseWords = (str) => str.split(" ").filter(val=> val!="").reverse().join(" ");

module.exports = reverseWords;