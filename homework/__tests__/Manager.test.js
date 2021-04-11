// require Manager module - which we will be testing in this steste
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
// describe Manager

  // describe Itestialization
  describe('Initialization', () => {
    // test thattest returns an object that is an instance of the Manager class when called testh the new keyword
      // call the constructor
      // check thattest is an instance of Manager
//    test('returns an object that is an instance of the Manager class when called testh the new keyword', () => {
//       const Manager = new Manager();
//       expect(Manager instanceof Manager).toBe(true);
//     })

    // test thattest sets name property based on constructor argument
      // define a name for the test
      // call constructor testh the test name
      // check that the resulting name property is equal to the test name
      //name, employee ID, email address, and office number
// test('getName', () => {
//       const name = "Giselle";
//       const test = new Manager(name);

//       expect(test.getName()).toBe(name);
//     });

//     // test thattest sets id property based on constructor argument
//       // define an id for the test
//       // call constructor testh an empty string for the name arg and the test id
//       // check that the resulting id property is equal to the test id
// test('getId', () => {
//       const id = 1;
//       const test = new Manager("Giselle", id);

//       expect(test.getId()).toBe(id);
//     });

//     // test thattest sets email property based on constructor argument
//       // define an email for the test
//       // call constructor testh an empty string for the name arg, any number for the id arg, and the test email
//       // check that the resulting email property is equal to the test email
// test('getEmail', () => {
//       const email = 'test@email.com';
//       const test = new Manager("Giselle", 1, email);

//       expect(test.getEmail()).toBe(email);
//     });
  

test('getOfficeNumber', () => {
      const officeNumber = "1234567890";
      const test = new Manager('Giselle', 1, 'test@email.com', officeNumber);

      expect(test.getOfficeNumber()).toBe(officeNumber);
    });
  

    // test thattest returns 'Manager' when the getRole() method is called
      // define an email for the test
      // call constructor testh an empty string for the name arg, any number for the id arg, and the test email
      // call the getName() method and check that the result equals the test email
test("getRole", () => {
      const test = new Manager();

      expect(test.getRole()).toBe('Manager');
    });
})
