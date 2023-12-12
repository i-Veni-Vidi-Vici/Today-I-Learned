// const { describe } = require("yargs");

const {app, server} = require("../libs/app");
const request = require("supertest");

describe("app.js", ()=>{
    afterEach(()=> server.close())
    test("hello", async()=>{
        await request(app).get("/hello").expect(200, {
            retsult: true,
            message:"hi"
        })
    })
    // test("hello aoi", (done)=>{
    //     request(app).get('/hello').expect(200).end((err, res) =>{
    //         if(err) throw err
    //             expect(res.body).toMatchObject({
    //                 result: false,
    //                 message: 'hello, world'
    //             })
    //             done();
    //     })
    // })
})