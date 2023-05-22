const request = require("supertest")
const {app, server} = require('../app.js')

//jest는 글로벌하게 되어있으므로 따로 임프로트 없이 사용가능

describe("app", () => {
    afterAll(()=> server.close())
    test("hello aoi", (done)=>{
        request(app).get('/hello').expect(200).end((err, res) =>{
            if(err) throw err
                expect(res.body).toMatchObject({
                    result: true,
                    message: 'hello, world'
                })
                done();
        })
    })

})