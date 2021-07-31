const Intern = require("../lib/Intern");

test("It should give you the school", () => {
    const testValue = "Boulder";
    const instanceOfEmployee = new Intern("Giselle", 1, "gigi@gigi.com", testValue);
    expect(instanceOfEmployee.school).toBe(testValue);
});

test("Calling getRole should give you Intern", () => {
    const testValue = "Intern";
    const instanceOfEmployee = new Intern("Giselle", 1, "gigi@gigi.com", "Boulder");
    expect(instanceOfEmployee.getRole()).toBe(testValue);
});

test("Calling getSchool should give you Boulder", () => {
    const testValue = "Boulder";
    const instanceOfEmployee = new Intern("Giselle", 1, "gigi@gigi.com", testValue);
    expect(instanceOfEmployee.getSchool()).toBe(testValue);
});