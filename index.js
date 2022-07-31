const inquirer = require("inquirer");
const generateTemplate = require('./src/page-template');
const {writeFile, copyFile} = require('./utils/generate-site');
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
            
            // return team.addManager()
            // .then((managerInfo)=>{console.log(team.manager)});
            // .then(team.addMembers);
            
        })
};


const addManager = ()=>{
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
            manager.role = (manager.getRole());
          
            return manager;
            
        });// end create new manager object
};// end addManager function



const addMembers = (teamData)=>{

    if(!teamData.members){
        teamData.members = [];
    }

    console.log(`
--------------------------
   Enter New Team Member
--------------------------`);
    
    // console.log(teamData)

    return inquirer
        .prompt([
        {
            type: 'list',
            name: 'memberRole',
            message: "What is your team member's role?",
            choices: ['Engineer','Intern','I am finished adding team members'],       
        },
        {
            type: 'input',
            name: 'memberName',
            message: "Please enter team member's name.",
            when: answers => answers.memberRole !== 'I am finished adding team members'
        },
        {
            type: 'input',
            name: 'memberId',
            message: "Please enter team member's ID.",
            when: answers => answers.memberRole !== 'I am finished adding team members'
        },
        {
            type:'input',
            name: 'memberEmail',
            message: "Please enter team member's email address.",
            when: answers => answers.memberRole !== 'I am finished adding team members'
        },
        {
            type:'input',
            name: 'github',
            message: "Please enter team member's github username.",
            when: (answers)=>answers.memberRole === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter team member's school.",
            when: (answers)=>answers.memberRole === 'Intern'
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to add another team member?',
            default: false,
            when: answers => answers.memberRole !== 'I am finished adding team members'
        }
        ])
        .then((memberInfo)=>{
            if(memberInfo.memberRole === 'Engineer'){
                const engineer = new Engineer(memberInfo.memberName,memberInfo.memberId,memberInfo.memberEmail,memberInfo.github);
                engineer.role=engineer.getRole();
                teamData.members.push(engineer);
                if(memberInfo.confirmAddMember){
                    return addMembers(teamData);
                }
                else{
                    // console.log(teamData);
                    return teamData;
                };
            }
            else if(memberInfo.memberRole === 'Intern'){
                const intern = new Intern(memberInfo.memberName,memberInfo.memberId,memberInfo.memberEmail,memberInfo.school);
                intern.role=intern.getRole();
                teamData.members.push(intern);
                if(memberInfo.confirmAddMember){
                    return addMembers(teamData);
                }
                else{
                    // console.log(teamData);
                    return teamData;
                };
            }
            else{
                return teamData;
            }
        });
};




promptUser()
.then(addManager)
.then(addMembers)
.then(teamData => {
    return generateTemplate(teamData);
})
.then(content => {
    return writeFile(content);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
})
.then(copyFileResponse => {
    console.log(copyFileResponse);
})
.catch(err => {
    console.log(err);
});

