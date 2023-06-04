const { fetchData, fetchDataWithError, fetchDataWithCallback } = require('../libs/fetchData')

test('the data is peanut butter', () => {
    // fetchData 함수 테스트 (.then 함수 이용)
})

test('the data is peanut butter', () => {
    // fetchData 함수 테스트 (async await 함수 이용)
})

test('the fetch fails with an error', async () => {
    // fetchDataWithError 테스트
})

test('the data is peanut butter with .resolves', async () => {
    // fetchData 함수 테스트 (.resolves 함수 이용)
})

test('the fetch fails with an error', async () => {
    // assertions 함수 이용
    // fetchDataWithError 함수 테스트 (.rejects 함수 이용)
})

test('the data is peanut butter', () => {
    // fetchDataWithCallback 테스트 (done 이용)

    fetchDataWithCallback(callback)
})