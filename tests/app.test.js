const request = require("supertest");
const app = require("../app");

describe("Jenkins CI/CD Demo Application", () => {

    test("GET / should return application information", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.application).toBe("Jenkins CI/CD Demo");
    });

    test("GET /health should return healthy status", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("healthy");
    });

});