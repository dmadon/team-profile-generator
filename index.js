const inquirer = require("inquirer");
const generateTemplate = require('./src/page-template');
const {writeFile, copyFile} = require('./utils/generate-site');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const promptUser = ()=>{
    return inquirer
        .prompt({
            type: 'input',
            name: 'teamName',
            message: 'Please enter your team name.'
        });
};


const addManager = (teamName)=>{
    console.log(`
--------------------------
Enter Manager Information
--------------------------`);

    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Please enter the team manager's name. (Required)",
            validate: managerNameInput => {
                if (managerNameInput) {
                  return true;
                } else {
                  console.log('Manger name is required');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Please enter the team manager's ID number. (Required)",
            validate: managerIdInput => {
                if (managerIdInput) {
                  return true;
                } else {
                  console.log('Manger ID is required');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter the team manager's email address. (Required)",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                  return true;
                } else {
                  console.log('Manger Email is required');
                  return false;
                }
              }
        },
        {
            type:'input',
            name: 'officeNum',
            message: "Please enter the team manager's office number. (Required)",
            validate: managerOfficeNumberInput => {
                if (managerOfficeNumberInput) {
                  return true;
                } else {
                  console.log('Manger Office Number is required');
                  return false;
                }
              }
        }
        ])// end of manager info questions
        
        .then((managerInfo)=>{
            const {managerName,managerId,managerEmail,officeNum}=managerInfo;
            const manager = new Manager(managerName,managerId,managerEmail,officeNum);
            manager.role = (manager.getRole());
            manager.teamName = teamName.teamName;
          
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
            validate: memberNameInput => {
                if (memberNameInput) {
                  return true;
                } else {
                  console.log('Member name is required');
                  return false;
                }
              },
            when: answers => answers.memberRole !== 'I am finished adding team members'
        },
        {
            type: 'input',
            name: 'memberId',
            message: "Please enter team member's ID.",
            validate: memberIdInput => {
                if (memberIdInput) {
                  return true;
                } else {
                  console.log('Member ID is required');
                  return false;
                }
              },
            when: answers => answers.memberRole !== 'I am finished adding team members'
        },
        {
            type:'input',
            name: 'memberEmail',
            message: "Please enter team member's email address.",
            validate: memberEmailInput => {
                if (memberEmailInput) {
                  return true;
                } else {
                  console.log('Member Email is required');
                  return false;
                }
              },
            when: answers => answers.memberRole !== 'I am finished adding team members'
        },
        {
            type:'input',
            name: 'github',
            message: "Please enter team member's github username.",
            validate: memberGithubInput => {
                if (memberGithubInput) {
                  return true;
                } else {
                  console.log("Engineer's github username is required");
                  return false;
                }
              },
            when: (answers)=>answers.memberRole === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter team member's school.",
            validate: memberSchoolInput => {
                if (memberSchoolInput) {
                  return true;
                } else {
                  console.log("Intern's school is required");
                  return false;
                }
              },
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

