const Manager = require("../lib/Manager");


test('creates a new manager',()=>{
    const manager = new Manager('Deanna Madon','6384942', 'deanna.madon@gmail.com','B308');

    expect(manager.getName()).toBe('Deanna Madon');
    expect(manager.getId()).toBe('6384942');
    expect(manager.getEmail()).toBe('deanna.madon@gmail.com');
    expect(manager.getOfficeNumber()).toBe('B308');
    expect(manager.getRole()).toBe('Manager');
});