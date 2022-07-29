const Employee = require("./Employee");

class Intern extends Employee{
    constructor(university, name, id, email){
        super(name, id, email);

        this.university = university;
    };
};

module.exports = Intern;