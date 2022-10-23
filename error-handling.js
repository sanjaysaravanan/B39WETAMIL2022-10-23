const obj = {
  username: 'sanjay',
  role: 'developer',
  projects: ['RC Toy Car', 'Data Visualize Board'],
  // skills: ['PYTHON', 'JS']
};

const complexOperation = () => {

  // 100 lines of codes
}


console.log('Line 1');

// try --> contains all the lines which prone to throw error

try {
  console.log(obj.projects[0]);
  // obj.toSomething();

  complexOperation();

  // throw an error object
  const customError = new Error("Hey the Code is failing, alert the users");

  // throw customError;

} catch (error) {
  console.log('Error', error);
} finally { // execute this set line issrespective of error 
  console.log('Line finally executed without any concern');
}

console.log('Line 3');

console.log('Line 4');

console.log('Line 5');

