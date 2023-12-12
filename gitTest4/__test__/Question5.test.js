// 5. object에 포함되는 형용사들의 개수를 object로 리턴하는 함수를 만드세요.
// countNumberOfOccurrences({
//   a: "moron",
//   b: "scumbag",
//   c: "moron",
//   d: "idiot",
//   e: "idiot"
// }) ➞ { moron: 2, scumbag: 1, idiot: 2 }


// countNumberOfOccurrences({
//   a: "moron",
//   b: "moron",
//   c:"moron"
// }) ➞ { moron: 3 }


// countNumberOfOccurrences({
//   a: "idiot",
//   b: "scumbag"
// }) ➞ { idiot: 1, scumbag: 1 }

const countNumberOfOccurrences = require("../libs/Question5")

describe(`Question5`, ()=>{

    test(`countNumberOfOccurrences({
        a: "moron",
        b: "scumbag",
        c: "moron",
        d: "idiot",
        e: "idiot"
      }) ➞ { moron: 2, scumbag: 1, idiot: 2 }`, ()=>{
        expect(countNumberOfOccurrences({
            a: "moron",
            b: "scumbag",
            c: "moron",
            d: "idiot",
            e: "idiot"
          })).toEqual({ moron: 2, scumbag: 1, idiot: 2 })
      })

      test(`countNumberOfOccurrences({
        a: "moron",
        b: "moron",
        c:"moron"
      }) ➞ { moron: 3 }`, ()=>{
        expect(countNumberOfOccurrences({
            a: "moron",
            b: "moron",
            c:"moron"
          })).toEqual({ moron: 3 })
      })

      test(`countNumberOfOccurrences({
        a: "idiot",
        b: "scumbag"
      }) ➞ { idiot: 1, scumbag: 1 }`, ()=>{
        expect(countNumberOfOccurrences({
            a: "idiot",
            b: "scumbag"
          })).toEqual({ idiot: 1, scumbag: 1 })
      })
})