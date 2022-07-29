const Intern = require("../lib/Intern");


test('creates a new intern',()=>{
    const intern = new Intern('Deanna Madon','6384942', 'deanna.madon@gmail.com', 'SMU');

    expect(intern.name).toBe('Deanna Madon');
    expect(intern.id).toBe('6384942');
    expect(intern.email).toBe('deanna.madon@gmail.com');
    expect(intern.university).toBe('SMU');
});