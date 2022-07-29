const Employee = require('../lib/Employee');


test('builds a new employee',()=>{
    const employee = new Employee('Deanna Madon','6384942','deanna.madon@gmail.com');
    
    expect(employee.name).toBe('Deanna Madon');
    expect(employee.id).toBe('6384942');
    expect(employee.email).toBe('deanna.madon@gmail.com');
})