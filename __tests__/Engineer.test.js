const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test('creates a new engineer',()=>{
    const engineer = new Engineer('dmadon', 'Deanna Madon','6384942', 'deanna.madon@gmail.com');

    expect(engineer.name).toBe('Deanna Madon');
    expect(engineer.id).toBe('6384942');
    expect(engineer.email).toBe('deanna.madon@gmail.com');
    expect(engineer.githubUser).toBe('dmadon');
})