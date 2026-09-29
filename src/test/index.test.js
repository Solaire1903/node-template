import helloWorld from "../index.js";

test("Function got properly imported", () => {
  expect(helloWorld).toBeDefined();
});
