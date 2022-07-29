const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

test('creates a new intern',()=>{
    const intern = new Intern('SMU', 'Deanna Madon','6384942', 'deanna.madon@gmail.com');

    expect(intern.name).toBe('Deanna Madon');
    expect(intern.id).toBe('6384942');
    expect(intern.email).toBe('deanna.madon@gmail.com');
    expect(intern.university).toBe('SMU');
});