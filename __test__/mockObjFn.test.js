const { fetchTitle } = require('../libs/fetchData')
const { ModifiedTitle } = require('../libs/modifiedTitle')

// async function fetchTitle() {
//     try {
//         const modTitle = new ModifiedTitle()
//         const mt = await modTitle.get()
//         return ({
//             title: `Welcome ${mt.title}`,
//             userId: mt.userId
//         })
//     } catch (e) {
//         throw e
//     }
// }
describe('normal', () => {
    test('normal', async() => {
        // fetchTitle 함수 테스트
        expect(await fetchTitle()).toEqual({"title": "Welcome Modified: delectus aut autem", "userId": 101});
    })
})

describe('mock', () => {
    // restore all mocks after each
    afterEach(()=>{
        jest.restoreAllMocks();
    })

    // ModifiedTitle.prototype.get = function() {
    //     return fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())
    //         .then(res => {
    //             this.userId = res.userId
    //             return ({
    //                 title: `Modified: ${res.title}`,
    //                 userId: this.userId+100
    //             })
    //         })
    // }
    
    test('mock test', () => {
        // ModifiedTitle.prototype.get 함수 mock
        // fetchTitle 함수 테스트
        jest.spyOn(ModifiedTitle.prototype, "get").mockResolvedValue({
            title: 'Mocked: title',
            userId: 201
        })

        expect(fetchTitle()).resolves.toEqual({
            title: 'Welcome Mocked: title',
            userId: 201
        })      
        // 결과물
        // {
        //     title: 'Welcome Mocked: title',
        //     userId: 201
        // }
    })

    test('normal again', async() => {
        // 원래 fetchTitle 함수 테스트
        expect(await fetchTitle()).toEqual({"title": "Welcome Modified: delectus aut autem", "userId": 101});
    })
})