const app = require("../index")
const supertest = require("supertest")

beforeEach((done) => {
  done()
})

afterEach((done) => {
  done()
})


test("GET /api/posts", async (done) => {
  await supertest(app).get("/api/posts")
    .expect(200)
    .then((response) => {
      // Check type and length
      expect(Array.isArray(response.body)).toBeTruthy()
      expect(response.body.length).toEqual(1)
      done()
    })
})