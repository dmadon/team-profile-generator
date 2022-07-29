const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

function promptUser(){
    inquirer
        .prompt({
            type: 'input',
            name: 'teamName',
            message: 'Please enter your team name.'
        });
};

function managerInfo(){
    inquirer
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
        ])
        .then((managerInfo)=>{
            console.log(managerInfo);
        })
};




promptUser()
    

