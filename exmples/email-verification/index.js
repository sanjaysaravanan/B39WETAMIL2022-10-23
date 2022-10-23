const inpElement = document.getElementById('email-inp');

const verifyURL = "https://emailvalidation.abstractapi.com/v1/?api_key=e1cc21d8e4ff46dc8ef9a5f6a1005651&email="


const spanElement = document.createElement('span');
spanElement.style.color = "#fff";
spanElement.style.padding = "16px";
spanElement.style.margin = "16px";

const spinner = document.getElementById('spinner');

document.body.append(spanElement);


const verifyEmail = async () => {

  document.body.removeChild(spanElement);

  spinner.style.display = 'inline-block';

  const response = await fetch(`${verifyURL}${inpElement.value}`);
  const data = await response.json();

  spanElement.innerText = data.email;
  if (data.deliverability === "DELIVERABLE") {
    spanElement.classList.remove('bg-danger');
    spanElement.classList.add('bg-success');
  } else {
    spanElement.classList.remove('bg-success');
    spanElement.classList.add('bg-danger');
  }
  spinner.style.display = 'none';
  document.body.append(spanElement);
}


