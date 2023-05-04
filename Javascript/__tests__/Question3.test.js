const getFrequencies = require('../libs/Question3');

test('getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }', ()=>{
    //expect(getFrequencies(["A", "B", "A", "A", "A"])).toBe({ A: 4, B: 1 }),
    expect(getFrequencies(["A", "B", "A", "A", "A"])).toEqual({ A: 4, B: 1 })
})

test('getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }', ()=>{
    //expect(getFrequencies([1, 2, 3, 3, 2])).toBe({ "1": 1, "2": 2, "3": 2 }),
    expect(getFrequencies([1, 2, 3, 3, 2])).toEqual({ "1": 1, "2": 2, "3": 2 })
})
test('getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }', ()=>{
    //expect(getFrequencies([true, false, true, false, false])).toBe({ true: 2, false: 3 }),
    expect(getFrequencies([true, false, true, false, false])).toEqual({ true: 2, false: 3 })
})
test('getFrequencies([]) ➞ {}', ()=>{
    //expect(getFrequencies([])).toBe({}),
    expect(getFrequencies([])).toEqual({})
})