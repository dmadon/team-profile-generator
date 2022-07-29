const inquirer = require("inquirer");
const Manager = require("./Manager");


class Team{
    constructor(teamName){
        this.teamName = teamName;
        this.manager = {};
        this.members = [];
    }

addManager(){
    console.log(`
--------------------------
Enter Manager Information
--------------------------`);

    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Please enter the team manager's name.",
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Please enter the team manager's ID number."
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter the team manager's email address."
        },
        {
            type:'input',
            name: 'officeNum',
            message: "Please enter the team manager's office number."
        }
        ])// end of manager info questions
        
        .then((managerInfo)=>{
            const {managerName,managerId,managerEmail,officeNum}=managerInfo;
            const manager = new Manager(managerName,managerId,managerEmail,officeNum);
            this.manager=manager;

            console.log(`
--------------------------
    Enter Team Members
--------------------------`);
        });// end create new manager object
};// end addManager function


addMembers(){

    return inquirer
            .prompt([
            {
                type: 'list',
                name: 'memberRole',
                message: "What is your team member's role?",
                choices: ['Engineer','Intern','I am finished adding team members']
            },
            {
                type: 'input',
                name: 'memberName',
                message: "Please enter team member's name."
            },
            {
                type: 'input',
                name: 'memberId',
                message: "Please enter team member's ID."
            },
            {
                type:'input',
                name: 'memberEmail',
                message: "Please enter team member's email address."
            }
            ])// end of member info questions for all employees

            .then((memberInfo)=>{
                console.log(memberInfo);
            })


}











};// end Team constructor




















module.exports = Team;