const { app, server } = require("../libs/app")
const request = require("supertest")

describe(`app`, () => {
    afterEach(()=>{
        server.close();
    })
    test("/hello", async() => {
        await request(app).get("/hello").expect(200, {
            result: "hi",
            val: 30
        })
    })

})
