const Employee = require ("./Employee")
class Intern extends Employee {
	constructor(name, id, email, schoolName) {
		// this.name = name;
		// this.id = id;
		// this.email = email;
		super(name, id, email);
		this.schoolName = schoolName;
	}

	// getName() {
	// 	return this.name;
	// }

	// getId() {
	// 	return this.id;
	// }

	// getEmail() {
	// 	return this.email;
	// }

	getSchoolName() {
		return this.schoolName;
	}

	getRole() {
		return 'Intern'
	}
}

module.exports = Intern;