const calcAge = require("../libs/Question1");

test("calcAge(65) ➞ 23725", () =>{
expect(calcAge(65)).toBe(23725),
expect(calcAge(65)).toEqual(23725) }

)

test("calcAge(0) ➞ 0", () =>{
expect(calcAge(0)).toBe(0),
expect(calcAge(0)).not.toBeNull()}
)

test("calcAge(20) ➞ 7300", () =>{
expect(calcAge(20)).toBe(7300)}
)
