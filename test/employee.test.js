const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
  const employeeInstance = new Employee();
  expect(typeof employeeInstance).toBe("object");
});

test("Testing name.", () => {
  const name = "Yorlan";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});

test("Testing ID.", () => {
  const id = 2;
  const employeeInstance = new Employee("Yorlan", id);
  expect(employeeInstance.id).toBe(id);
});

test("Testing email.", () => {
  const email = "yorlan@test.com";
  const employeeInstance = new Employee("Yorlan", 2, email);
  expect(employeeInstance.email).toBe(email);
});
test("Gets name through getName method.", () => {
  const testName = "Yorlan";
  const employeeInstance = new Employee(testName);
  expect(employeeInstance.getName()).toBe(testName);
});

test("Can test ID through getID method.", () => {
  const testID = 2;
  const employeeInstance = new Employee("Yorlan", testID);
  expect(employeeInstance.getId()).toBe(testID);
});

test("Can test email through getEmail method.", () => {
  const testEmail = "yorlan@test.com";
  const employeeInstance = new Employee("Yorlan", 2, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
});

test("Testing role.", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee("Yorlan", 2, "yorlan@test.com");
  expect(employeeInstance.getRole()).toBe(returnValue);
});