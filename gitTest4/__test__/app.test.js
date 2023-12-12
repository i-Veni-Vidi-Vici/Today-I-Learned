const {app, server} = require("../libs/app")

const request = require("supertest")


describe("app", ()=>{
    afterEach(()=>{
        server.close();
    })
    test("hello_test", async()=>{
        await request(app).get("/hello").expect(200, {
            retsult: true,
            message:"hi"
        })
        
    })
})
