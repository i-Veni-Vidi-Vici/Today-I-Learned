const request = require("supertest")
const {app, server} = require("../libs/app")

describe("app", ()=>{
    afterAll(()=> server.close())
    test("hello", async()=>{
          await request(app).get('/hello').expect(200, {
            result:true,
            message: "hi"
           
        })
       

    })
})