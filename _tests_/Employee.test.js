const Employee = require('../lib/Employee');
// Test the getName method
test('It should give you the employee name', () => {
    const instanceOfEmployee = new Employee('Giselle', 123, 'gigi@gigi.com');
    expect(instanceOfEmployee.getName()).toBe('Giselle');
})

test('It should give you the employee ID', () => {
    const instanceOfEmployee = new Employee('Giselle', 123, 'gigi@gigi.com');
    expect(instanceOfEmployee.getId()).toBe(123);
})

test('It should give you the employee email', () => {
    const instanceOfEmployee = new Employee('Giselle', 123, 'gigi@gigi.com');
    expect(instanceOfEmployee.getEmail()).toBe('gigi@gigi.com');
})