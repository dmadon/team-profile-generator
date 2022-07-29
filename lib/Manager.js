const Employee = require("./Employee");

class Manager extends Employee{
    constructor(officeNum, name, id, email){
        super(name, id, email);

        this.officeNum = officeNum;
    };
};

module.exports = Manager;