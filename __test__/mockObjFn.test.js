const { fetchTitle } = require('../libs/fetchData')
const { ModifiedTitle } = require('../libs/modifiedTitle')

describe('normal', () => {
    test('normal', () => {
        // fetchTitle 함수 테스트
    })
})

describe('mock', () => {
    // restore all mocks after each

    test('mock test', () => {
        // ModifiedTitle.prototype.get 함수 mock
        // fetchTitle 함수 테스트
        // 결과물
        // {
        //     title: 'Welcome Mocked: title',
        //     userId: 201
        // }
    })

    test('normal again', () => {
        // 원래 fetchTitle 함수 테스트
    })
})