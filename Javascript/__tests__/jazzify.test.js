const jazzify = require('../libs/jazzify');

test(`jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]`,()=>{
    expect(jazzify(["G", "F", "C"])).toEqual(["G7", "F7", "C7"]);
    //expect(jazzify(["G", "F", "C"])).toBe(["G7", "F7", "C7"]);
})

test(`jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]`,()=>{
    expect(jazzify(["Dm", "G", "E", "A"])).toEqual(["Dm7", "G7", "E7", "A7"]);
    //expect(jazzify(["Dm", "G", "E", "A"])).toBe(["Dm7", "G7", "E7", "A7"]);
})


test(`jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]`,()=>{
    expect(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])).toEqual(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]);
   // expect(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])).toBe(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]);
})

test(`jazzify([]) ➞ []`,()=>{
    expect(jazzify([])).toEqual([]);
    //expect(jazzify([])).toBe([]);
})


