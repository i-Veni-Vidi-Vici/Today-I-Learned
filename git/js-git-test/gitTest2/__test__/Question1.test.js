const calcAge = require("../libs/Question1");

// Questions
// 1. years를 days로 변환하는 함수를 만드세요.
// 1년은 365일
// 윤년은 무시
// 입력은 오직 양수
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300
describe("Question1", () => {

test("calcAge(65) ➞ 23725", () => {
    expect(calcAge(65)).toBe(23725);
    expect(calcAge(65)).toEqual(23725);
});

test("calcAge(0) ➞ 0", () => {
    expect(calcAge(0)).toBe(0);
    expect(calcAge(0)).toEqual(0);
});

test("calcAge(20) ➞ 7300", () => {
    expect(calcAge(20)).toBe(7300);
    expect(calcAge(20)).toEqual(7300);
});

});