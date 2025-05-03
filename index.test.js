const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  it("deve responder com 'Hello, DevOps 2.0!'", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello, DevOps 2.0!");
  });
});
