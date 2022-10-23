const login = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'sanjay@gmail.com' && password === '12345') {
        resolve({ email: 'sanjay@gmail.com', name: 'Sanjay Saravanan', loggedInTime: (new Date()).toString() })
      } else {
        reject({ message: 'Invalid Credentials, Please Check...' })
      }
    }, 2000)
  })
}

const errorBlock = document.getElementById('error-block');
const loginForm = document.getElementById('login-form');
const application = document.getElementById('application');
const spinner = document.getElementById('spinner');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  spinner.style.display = 'inline-block';
  loginForm.style.display = 'none';

  let data = {};

  Array.from(e.target.elements).forEach((element) => {

    if (element.nodeName === 'INPUT') {
      data[element.name] = element.value; // data['email] = 'sa@gmail.com';
    }

  });

  console.log('Data from Submit', data);

  login(data.email, data.password)
    .then((loginResponse) => {
      spinner.style.display = 'none';
      errorBlock.style.display = 'none';
      console.log(loginResponse)
      application.innerText += `${loginResponse.name}
Login Time: ${loginResponse.loggedInTime}`;
      application.style.display = 'block';
    })
    .catch((error) => {
      spinner.style.display = 'none';
      errorBlock.innerText = error.message;
      errorBlock.style.display = 'block';
      loginForm.style.display = 'block';
      console.log(error);
    })
});