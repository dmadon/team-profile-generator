const Employee = require('../lib/Employee');


test('builds a new employee',()=>{
    const employee = new Employee('Deanna Madon','6384942','deanna.madon@gmail.com');
    
    expect(employee.getName()).toBe('Deanna Madon');
    expect(employee.getId()).toBe('6384942');
    expect(employee.getEmail()).toBe('deanna.madon@gmail.com');
    expect(employee.getRole()).toBe('Employee');
})