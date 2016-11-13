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

Clinician.prototype = new Employee();
Operations.prototype = new Employee();

Clinician.prototype.SetExpertise = function(expertise) {
	this.expertise = expertise;
};

Operations.prototype.SetResponsibility = function(resp) {
	this.responsibility = resp;
};




let Department = function() {
	this.deptName = null;
};

Department.prototype.SetDeptName = function(name) {
	this.deptName = name;
};

let FieldOffice = function() {
	this.city = null;
};

let Headquarters = function() {
	this.hqName = null;
};

FieldOffice.prototype = new Department();
Headquarters.prototype = new Department();

FieldOffice.prototype.SetCity = function(city) {
	this.city = city;
};

Headquarters.prototype.SetHQName = function(name) {
	this.hqName = name;
};

let ee01 = new Clinician();
ee01.SetEmployeeFirstName("Alex");
ee01.SetEmployeeLastName("Simonian");
ee01.SetExpertise("Number 1 Stunna");

let ee01_dept = new FieldOffice();
ee01_dept.SetCity("San Diego");
ee01.department = ee01_dept;

let ee02 = new Operations();
ee02.SetEmployeeFirstName("Jake");
ee02.SetEmployeeLastName("Weary");
ee02.SetResponsibility("Librarian");

let ee02_dept = new Headquarters();
ee02_dept.SetHQName("Dallas");
ee02.department = ee02_dept;

let ee03 = new Clinician();
ee03.SetEmployeeFirstName("Joe");
ee03.SetEmployeeLastName("Schmoe");
ee03.SetExpertise("Surgeon");

let ee03_dept = new FieldOffice();
ee03_dept.SetCity("Topeka");
ee03.department = ee03_dept;

let ee04 = new Operations();
ee04.SetEmployeeFirstName("Harray");
ee04.SetEmployeeLastName("Caray");
ee04.SetResponsibility("Announcer");

let ee04_dept = new Headquarters();
ee04_dept.SetHQName("Chicago");
ee04.department = ee04_dept;


console.log(`${ee01.first} ${ee01.last} works as a clinician, in the ${ee01.department.city} office, and is a ${ee01.expertise}`);
console.log(`${ee02.first} ${ee02.last} works as an operative, in the ${ee02.department.hqName} office, and is a ${ee02.responsibility}`);
console.log(`${ee03.first} ${ee03.last} works as a clinician, in the ${ee03.department.city} office, and is a ${ee03.expertise}`);
console.log(`${ee04.first} ${ee04.last} works as an operative, in the ${ee04.department.hqName} office, and is a ${ee04.responsibility}`);

