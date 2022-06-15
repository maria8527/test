import  app from "../index";
import Request from "supertest"

describe('GET registro', () => {
  test('should return all registered', async () => {
  const response = await Request(app).get('/api/registro');
  expect(response.status).toBe(200);
})
});





