const Manager = require("../lib/Manager");


test('creates a new manager',()=>{
    const manager = new Manager('Deanna Madon','6384942', 'deanna.madon@gmail.com','B308');

    expect(manager.name).toBe('Deanna Madon');
    expect(manager.id).toBe('6384942');
    expect(manager.email).toBe('deanna.madon@gmail.com');
    expect(manager.officeNum).toBe('B308');
});