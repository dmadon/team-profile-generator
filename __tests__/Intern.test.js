const Intern = require("../lib/Intern");


test('creates a new intern',()=>{
    const intern = new Intern('Deanna Madon','6384942', 'deanna.madon@gmail.com', 'SMU');

    expect(intern.getName()).toBe('Deanna Madon');
    expect(intern.getId()).toBe('6384942');
    expect(intern.getEmail()).toBe('deanna.madon@gmail.com');
    expect(intern.getSchool()).toBe('SMU');
    expect(intern.getRole()).toBe('Intern');
});