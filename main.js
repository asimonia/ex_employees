let Employee = function() {
	this.first = null;
	this.last = null;
	this.department = null;
};

Employee.prototype.SetEmployeeFirstName = function(name) {
	this.first = name;
};

Employee.prototype.SetEmployeeLastName = function(name) {
	this.last = name;
};

let Clinician = function() {
	this.expertise = null;
};

let Operations = function() {
	this.responsibility = null;
};

Clinician.prototype.SetExpertise = function(expertise) {
	this.expertise = expertise;
};

Operations.prototype.SetResponsibility = function(resp) {
	this.responsibility = resp;
};


Clinician.prototype = new Employee();
Operations.prototype = new Employee();

let Department = function() {
	this.deptName = null;
};

Department.prototype.SetDeptName = function(name) {
	this.deptName = name;
};

let FieldOffice = function() {
	this.city = null;
};

FieldOffice.prototype.SetCity = function(city) {
	this.city = city;
};

let Headquarters = function() {
	this.hqName = null;
};

Headquarters.prototype.SetHQName = function(name) {
	this.hqName = name;
};

FieldOffice.prototype = new Department();
Headquarters.prototype = new Department();



// Every employee should be assigned to either the FieldOffice or Headquarters department. This is a has-a relationship.
// Create a minimum of 4 employees - 2 clinicians, and 2 operations - that have been assigned to a specific department.
// Output the following information to the console for each employee.
// Full name
// Department name
// Expertise/responsibility