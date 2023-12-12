const request = require('supertest')
const {app, server} = require('../app')

describe("app",()=>{
    afterAll(()=> server.close())
    test("hello api", (done)=>{
        request(app).get('/hello').expect(200).end((err, res)=>{
            if(err) throw err
            expect(res.body).toMatchObject({
                result:true,
                message: "hi"
            })
            done();
        })
    })
})

// describe("app1",()=>{
//     afterAll(()=> server.close())
//     test("hello api1", (done)=>{
//         request(app).get('/hello').expect(200,
//             {
//             result:true,
//             message: "hi"})
//             done();
//     })
// })