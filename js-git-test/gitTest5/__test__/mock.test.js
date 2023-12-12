const { runCallback } = require('../libs/callbacks')

// function runCallback(aNumber, callback) {
//     const xNumber = aNumber * 5

//     if (xNumber < 100) {
//         callback(xNumber)
//     }
// }
describe('run callback', () => {
    // callback 함수 mock 생성
    const callbackMock = jest.fn();

    test('should run callback (< 100)', () => {
        runCallback(19, callbackMock)

        expect(callbackMock).toBeCalled()
        expect(callbackMock).toBeCalledTimes(1)
        expect(callbackMock).toBeCalledWith(95)
    })

    test('should not run callback (>= 100)', () => {
        runCallback(20, callbackMock)

        expect(callbackMock).not.toBeCalled()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })
})