const Intern = require("../lib/Intern");

test("Can create school.", () => {
  const testSchool = "testName";
  const employeeInstance = new Intern("Yorlan", 2, "yorlan@test.com", testSchool);
  expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
  const testSchool = "testName";
  const employeeInstance = new Intern("Yorlan", 2, "yorlan@test.com", testSchool);
  expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
  const returnValue = "Intern";
  const employeeInstance = new Intern("Yorlan", 2, "yorlan@test.com", "testName");
  expect(employeeInstance.getRole()).toBe(returnValue);
});