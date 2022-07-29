const Engineer = require("../lib/Engineer");


test('creates a new engineer',()=>{
    const engineer = new Engineer('Deanna Madon','6384942', 'deanna.madon@gmail.com','dmadon');

    expect(engineer.name).toBe('Deanna Madon');
    expect(engineer.id).toBe('6384942');
    expect(engineer.email).toBe('deanna.madon@gmail.com');
    expect(engineer.githubUser).toBe('dmadon');
})