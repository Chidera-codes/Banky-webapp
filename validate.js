

// add a click listener to the button to validate the form
  // if validation passes
    // submit the form programatically
  // else
    // show validation errors

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  var isValid = validateSignin();

  if(isValid) {
    // submit form
    e.target.submit();
    function storeinfo() {
      var inputFirstname = document.getElementById('firstName');
      var inputLastname = document.getElementById('lastName');
      var inputPassword = document.getElementById('password');
      var inputPhone_number = document.getElementById ('phone_number');
      var inputEmail = document.getElementById('email');
      localStorage.setItem("firstname", inputFirstname.value);
      localStorage.setItem("lastname", inputLastname.value);
      localStorage.setItem("password", inputPassword.value);
      localStorage.setItem("phone number", inputPhone_number.value);
      localStorage.setItem("email", inputEmail.value);
      
     } 
     storeinfo();

  }
   else {
  }
});

function validateSignin() {
  var firstname = document.getElementById('firstName');
  var lastname = document.getElementById('lastName');
  var password = document.getElementById ('password');
  var confirm_password = document.getElementById('confirm_password');
  var phone_number = document.getElementById("phone_number");
  var email = document.getElementById('email');
  var reg_phone_number = /^(234)\d{10}$/;
  var reg_email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(firstname.value.trim() == ""){
      document.getElementById("blank_firstname").style.visibility='visible';
      firstname.style.border = "solid 1px red";
      return false;
    }
    else if(lastname.value.trim() == ""){
      document.getElementById("blank_lastname").style.visibility = 'visible';
      lastname.style.border = "solid 1px red";
      console.log ('atleast it works')
      return false;

    }
    else if(!phone_number.value.match(reg_phone_number)){
      document.getElementById("blank_phoneNumber").innerText = 'PHONE NUMBER must be a valid Nigerian number with format 234#'
      document.getElementById("blank_phoneNumber").style.visibility='visible';
      phone_number.style.border ="solid 1px red";
      return false;
    }

    else if(!email.value.match(reg_email)){
      document.getElementById("blank_email").innerText = 'Invalid email format'
      document.getElementById("blank_email").style.visibility='visible';
      email.style.border ="solid 1px red";
      return false;
    }
    
    else if(email.value.trim() == ""){
      console.log('it should work')
      document.getElementById("blank_email").style.visibility = 'visible';
      email.style.border = "solid 1px red";
      return false;
    }


    else if(password.value.trim() == ""){
      document.getElementById("blank_password").style.visibility='visible';
      password.style.border ="solid 1px red";
      return false;
    }

    else if(password.value.trim().length < 5){
          document.getElementById("blank_password").innerText = 'Password too short';
          document.getElementById("blank_password").style.visibility='visible';
          password.style.border ="solid 1px red";
          return false;
    }

    else if(confirm_password.value.trim() ==""){
      document.getElementById("noMatch_password").style.visibility='visible';
      password.style.border ="solid 1px red";
      return false;
    }

    else if(password.value !== confirm_password.value ){
      document.getElementById("noMatch_password").innerText = 'Passwords do not match';
      document.getElementById("noMatch_password").style.visibility='visible';
      confirm_password.style.border ="solid 1px red";
      return false;
    }
    else{
      return true;
    }
    
}





