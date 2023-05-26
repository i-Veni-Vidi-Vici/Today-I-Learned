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
    test('normal', async () => {
        // fetchTitle 함수 테스트
        expect(await fetchTitle()).toEqual({"title": "Welcome Modified: delectus aut autem", "userId": 101});
    })
})

describe('mock', () => {
    // restore all mocks after each
    afterEach(() => jest.restoreAllMocks())

    test('mock test', async() => {
        // ModifiedTitle.prototype.get 함수 mock
        jest.spyOn(ModifiedTitle.prototype, "get").mockResolvedValue({
            title: 'Mocked: title',
            userId: 201
        })

        expect(await fetchTitle()).toEqual({
            title: 'Welcome Mocked: title',
            userId: 201
        });
        // fetchTitle 함수 테스트
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