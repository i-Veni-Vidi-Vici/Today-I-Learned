// addName 함수를 만들고 unit 테스트를 하는 코드를 만들어 git에 올려주세요.


// addName({}, "Brutus", 300) ➞ { Brutus: 300 }

// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

const addName = (obj, str, val)=>{
    obj[str]=val;
    return obj;
}

module.exports = addName;