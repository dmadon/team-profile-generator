const Engineer = require("../lib/Engineer");


test('creates a new engineer',()=>{
    const engineer = new Engineer('Deanna Madon','6384942', 'deanna.madon@gmail.com','dmadon');

    expect(engineer.getName()).toBe('Deanna Madon');
    expect(engineer.getId()).toBe('6384942');
    expect(engineer.getEmail()).toBe('deanna.madon@gmail.com');
    expect(engineer.getGithub()).toBe('dmadon');
    expect(engineer.getRole()).toBe('Engineer');
});