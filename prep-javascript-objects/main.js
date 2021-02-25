var person = {
  firstName: 'Katie',
  lastName: 'Fugate',
  hobby: 'Cats'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName, '.');

person.job = 'Registered Behavior Technician';
console.log("The person's current job is:", person.job, '.');

person.previousJob = 'Kmart associate';
console.log("The person's previous job is:", person.previousJob, '.');
console.log('The complete person object:', person);

var myCar = {
  make: 'Honda',
  model: 'HRV',
  year: '2020'
};
console.log('Car information', myCar);

myCar['owner'] = fullName;

var carString = 'My name is ' + myCar['owner'] +
' and I drive a ' + myCar['year'] + ' ' + myCar['make'] +
' ' + myCar['model'] + '.';
console.log(carString);

myCar['color'] = 'white';
console.log('My full car info:', myCar);
