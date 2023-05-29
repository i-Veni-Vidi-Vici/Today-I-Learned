const Component = require('../libs/component')

// appHooks 모듈 mock 코드 추가
const appHooks = require("../libs/appHooks")
jest.mock("../libs/appHooks");
appHooks.hookApple.mockReturnValue('potato')
appHooks.hookBanana.mockReturnValue('banana')

describe('mock module', () => {
    test('giveme banana mock', () => {
        expect(Component.givemeBanana()).toEqual('banana')
    })

    test('giveme apple mock', () => {
        expect(Component.givemeApple()).toEqual('potato')
    })
})


// jest.mock('../libs/component', function() {
//     return{
//      givemeBanana: jest.fn(() => 'banana'),
//      givemeApple: jest.fn(()=> 'potato')  //mock 함수만 추적이 가능
//  }
//  })
//  describe('mock module', () => {
//      test('giveme banana mock', () => {
//         expect(Component.givemeBanana()).toEqual('banana')
//         expect(Component.givemeBanana).toBeCalled()
//      })
 
//      test('giveme apple mock', () => {
//          expect(Component.givemeApple()).toEqual('potato')
//          expect(Component.givemeApple).toBeCalled()
 
//      })
//  })