const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Team = require("./lib/Team");

const promptUser = ()=>{
    return inquirer
        .prompt({
            type: 'input',
            name: 'teamName',
            message: 'Please enter your team name.'
        })
        .then(({teamName})=>{
            const team = new Team(teamName);
            
            return team.addManager()
            // .then((managerInfo)=>{console.log(team.manager)});
            .then(team.addMembers);
            
        })
};


                




// const teamInfo = (managerInfo)=>{
    
//     return inquirer
//         .prompt([
//         {
//             type: 'list',
//             name: 'memberRole',
//             message: "What is your team member's role?",
//             choices: ['Engineer','Intern','I am finished adding team members']
//         },
//         {
//             type: 'input',
//             name: 'memberName',
//             message: "Please enter team member's name."
//         },
//         {
//             type: 'input',
//             name: 'memberId',
//             message: "Please enter team member's ID."
//         },
//         {
//             type:'input',
//             name: 'memberEmail',
//             message: "Please enter team member's email address."
//         }
//         ])
//         .then((memberInfo)=>{
//             console.log(managerInfo);
//             console.log(memberInfo);
//         })
// };




promptUser()


    
    

