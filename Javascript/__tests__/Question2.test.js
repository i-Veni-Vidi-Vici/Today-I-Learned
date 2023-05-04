const countTrue = require('../libs/Question2');

test("countTrue([true, false, false, true, false]) ➞ 2", ()=>{
    expect(countTrue([true, false, false, true, false])).toBe(2);
    expect(countTrue([true, false, false, true, false])).toEqual(2);
})

test("countTrue([false, false, false, false]) ➞ 0", ()=>{
    expect(countTrue([false, false, false, false])).toBe(0);
    expect(countTrue([false, false, false, false])).not.toBeNull();

})
test("countTrue([]) ➞ 0", ()=>{
    expect(countTrue([])).toBe(0);
    expect(countTrue([])).not.toBeNull();
})
