// 2. 모든 음악코드의 끝에 7을 붙이는 함수를 생성한 후 unit test를 작성하세요.
// 입력배열이 없으면 빈배열을 리턴합니다.
// 출력결과는 모두 valid chord 입니다.
// jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]

// jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]

// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

// jazzify([]) ➞ []


const jazzify = (arr)=>{

    return arr.map(val =>{
        return (!val.endsWith(7)) ? val+7: val;
    })

}

module.exports= jazzify;