const form = document.getElementById("form");
const errorIcons = document.getElementsByClassName("error-icon");
const errors = document.getElementsByClassName("error");
const inputFields = document.getElementsByTagName("input");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   Validate First Name
  if (firstName.value.trim() === "") {
    errorIcons[0].style.opacity = "1";
    errors[0].style.opacity = "1";
    inputFields[0].removeAttribute("placeholder");
    inputFields[0].style.border = "1px solid red";
  } else {
    errorIcons[0].style.opacity = "0";
    errors[0].style.opacity = "0";
    inputFields[0].style.border = "1px solid #ccc";
  }

  //   Validate Last Name
  if (lastName.value.trim() === "") {
    errorIcons[1].style.opacity = "1";
    errors[1].style.opacity = "1";
    inputFields[1].removeAttribute("placeholder");
    inputFields[1].style.border = "1px solid red";
  } else {
    errorIcons[1].style.opacity = "0";
    errors[1].style.opacity = "0";
    inputFields[1].style.border = "1px solid #ccc";
  }

  //   Validate Email

  //   Validating Email Format
  function isEmailInvalid(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      return false;
    } else {
      return true;
    }
  }

  if (email.value.trim() === "") {
    errorIcons[2].style.opacity = "1";
    errors[2].style.opacity = "1";
    inputFields[2].removeAttribute("placeholder");
    errors[2].innerText = "Email cannot be empty";
    inputFields[2].style.border = "1px solid red";
  } else if (isEmailInvalid(email.value.trim())) {
    errorIcons[2].style.opacity = "1";
    errors[2].style.opacity = "1";
    errors[2].innerText = "Looks like this is not an email";
    inputFields[2].style.color = "red";
    inputFields[2].style.border = "1px solid red";
  } else {
    errorIcons[2].style.opacity = "0";
    errors[2].style.opacity = "0";
    inputFields[2].style.color = "black";
    inputFields[2].style.border = "1px solid #ccc";
  }

  //   Validate Password and its length
  if (password.value.trim() === "" || password.value.trim().length < 7) {
    if (password.value.trim() === "") {
      errorIcons[3].style.opacity = "1";
      errors[3].style.opacity = "1";
      inputFields[3].removeAttribute("placeholder");
      errors[3].innerText = "Password cannot be empty";
      inputFields[3].style.border = "1px solid red";
    } else {
      errorIcons[3].style.opacity = "1";
      errors[3].style.opacity = "1";
      errors[3].innerText = "Password must be at least 7 characters";
      inputFields[3].style.border = "1px solid red";
    }
  } else {
    errorIcons[3].style.opacity = "0";
    errors[3].style.opacity = "0";
    inputFields[3].style.border = "1px solid #ccc";
  }

  //   const loginData = {
  //     firstName: firstName.value,
  //     lastName: lastName.value,
  //     email: email.value,
  //     password: password.value,
  //   };

  console.log("Form submitted....");
});
