const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(githubUser, name, id, email){
        super(name, id, email);

        this.githubUser = githubUser;
    };
};

module.exports = Engineer;