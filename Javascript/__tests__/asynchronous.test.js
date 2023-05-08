const { fetchData, fetchDataWithError, fetchDataWithCallback } = require('../libs/fetchData')

test('the data is peanut butter', () => {
    fetchData().then((data) => {
        expect(data).toMatch('peanut butter');
        expect(data).toBe('peanut butter');
        expect(data).toEqual('peanut butter');
    })

    // fetchData 함수 테스트 (.then 함수 이용)
})

test('the data is peanut butter', async () => {
    // fetchData 함수 테스트 (async await 함수 이용)
    expect(await fetchData()).toMatch('peanut butter');
    expect(await fetchData()).toBe('peanut butter');
    expect(await fetchData()).toEqual('peanut butter');
})

test('the fetch fails with an error', async () => {
    // fetchDataWithError 테스트
    try{
        await fetchDataWithError() ;
   }
    catch(error){
        expect(error).toMatch('error');
   }

})

test('the data is peanut butter with .resolves', async () => {
    // fetchData 함수 테스트 (.resolves 함수 이용)
    expect(fetchData()).resolves.toMatch('peanut butter');
    expect(fetchData()).resolves.toBe('peanut butter');
})

test('the fetch fails with an error', async () => {
    // assertions 함수 이용
    // fetchDataWithError 함수 테스트 (.rejects 함수 이용)
    expect(fetchDataWithError()).rejects.toMatch('error');
    expect(fetchDataWithError()).rejects.toBe('error');

})

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