const { fetchData, fetchDataWithError, fetchDataWithCallback } = require('../libs/fetchData')

// function fetchData() {
//     return new Promise((res, rej) => {
//         res('peanut butter')
//     })
// }

// function fetchDataWithError() {
//     return new Promise((res, rej) => {
//         rej('error')
//     })
// }
test('the data is peanut butter', () => {
    // fetchData 함수 테스트 (.then 함수 이용)
    fetchData().then(res=> expect(res).toMatch('peanut butter'));
})

test('the data is peanut butter', async () => {
    // fetchData 함수 테스트 (async await 함수 이용)
    expect(await fetchData()).toMatch('peanut butter');
    
})

test('the fetch fails with an error', async () => {
    // fetchDataWithError 테스트
    try{
       await fetchDataWithError();
    } catch(err){
        expect(err).toMatch("error");

    }
    
})

test('the data is peanut butter with .resolves', async () => {
    // fetchData 함수 테스트 (.resolves 함수 이용)
    expect(fetchData()).resolves.toMatch('peanut butter')
})

test('the fetch fails with an error', async () => {
    // assertions 함수 이용
    // fetchDataWithError 함수 테스트 (.rejects 함수 이용)
    expect(fetchDataWithError()).rejects.toMatch("error")
})

// function fetchDataWithCallback(callback) {
//     const message = 'peanut butter'
//     return callback(null, message)
// }
test('the data is peanut butter', (done) => {
    // fetchDataWithCallback 테스트 (done 이용)
    function callback(err, message){
        if(err){
            console.log("Error!");
            return
        }
        setTimeout(() => {
            expect(err).toBeNull();
            expect(message).toMatch("peanut butter");
            done();
        }
        , 2000)
    }
    fetchDataWithCallback(callback)
    
})