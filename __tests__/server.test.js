"use strict";

const supergoose = require("@code-fellows/supergoose");
const { app } = require("../src/server");
const request = supergoose(app);

describe("Food Tests", () => {
  let id;

  it("Handle bad route", async () => {
    const response = await request.get("/test");
    expect(response.status).toEqual(404);
  });

  it("Handle bad method", async () => {
    const response = await request.patch("/food");
    expect(response.status).toEqual(404);
  });

  it("Handle creating new food", async () => {
    let testObj = { name: "anything", description: "anything" };

    const response = await request.post("/api/v1/food").send(testObj);

    id = response.body._id;

    expect(response.body.name).toBe(testObj.name);
    expect(response.body.description).toBe(testObj.description);
    expect(response.status).toEqual(200);
  });

  it("Handle reading food", async () => {
    const response = await request.get("/api/v1/food");
    expect(response.body[0].name).toBe("anything");
    expect(response.status).toEqual(200);
  });

  it("Handle updating a record", async () => {
    const testObj = {
      name: "anything",
      description: "test",
    };

    const response = await request.put("/api/v1/food/" + id).send(testObj);
    expect(response.status).toEqual(200);
    expect(response.body.name).toBe("anything");
  });

  it("Handle deleting a record", async () => {
    const response = await request.delete("/api/v1/food/" + id);
    expect(response.status).toEqual(200);
    expect(response.body.name).toBe("anything");
  });
});
describe("CLOTHES TESTS", () => {
  let id;

  it("Handle bad route", async () => {
    const response = await request.get("/test");
    expect(response.status).toEqual(404);
  });

  it("Handle bad method", async () => {
    const response = await request.patch("/clothes");
    expect(response.status).toEqual(404);
  });

  it("Handle creating new clothes", async () => {
    let testObj = { name: "anything", description: "anything" };

    const response = await request.post("/api/v1/clothes").send(testObj);

    id = response.body._id;

    expect(response.body.name).toBe(testObj.name);
    expect(response.body.description).toBe(testObj.description);
    expect(response.status).toEqual(200);
  });

  it("Handle reading clothes", async () => {
    const response = await request.get("/api/v1/clothes");
    expect(response.body[0].name).toBe("anything");
    expect(response.status).toEqual(200);
  });

  it("Handle updating a record", async () => {
    const testObj = {
      name: "anything",
      description: "test",
    };

    const response = await request.put("/api/v1/clothes/" + id).send(testObj);
    expect(response.status).toEqual(200);
    expect(response.body.name).toBe("anything");
  });

  it("Handle deleting a record", async () => {
    const response = await request.delete("/api/v1/clothes/" + id);
    expect(response.status).toEqual(200);
    expect(response.body.name).toBe("anything");
  });
});
