const request = require("supertest")
const {app, server} = require("../libs/app")

descibe("app", ()=>{
    afterAll(()=> server.close())
    test("hello", (done)=>{
        request(app).get('/hello').expect(200).end((err, res)=>{
            if(err) throw err
            expect(res.body).toMatchObject({
                result:true,
                message: "hi"
            })
        })
        done();

    })
})