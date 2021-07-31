
const Engineer = require("../lib/Engineer");

test("It should give you the GitHub account", () => {
    const testValue = "GitHubUser";
    const instanceOfEmployee = new Engineer("Giselle", 123, "gigi@gigi.com", testValue);
    expect(instanceOfEmployee.github).toBe(testValue);
});

test("Calling getRole should give you Engineer", () => {
    const testValue = "Engineer";
    const instanceOfEmployee = new Engineer("Giselle", 123, "gigi@gigi.com", "GitHubUser");
    expect(instanceOfEmployee.getRole()).toBe(testValue);
});

test("Calling getGithub should give you username", () => {
    const testValue = "GitHubUser";
    const instanceOfEmployee = new Engineer("Giselle", 123, "gigi@gigi.com", testValue);
    expect(instanceOfEmployee.getGithub()).toBe(testValue);
});