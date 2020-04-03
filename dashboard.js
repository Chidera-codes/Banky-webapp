function display_userInfo(){
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var phone_number = document.getElementById("number");
  var role = document.getElementById("role");
  var firstname = localStorage.getItem("firstname", firstname);
  var lastname = localStorage.getItem("lastname", lastname);
  
  username.textContent = firstname + "  " + lastname ;
  email.textContent = "Email:" + "   "  + localStorage.getItem("email",email) ;
  number.textContent = "Phone Number:" + "   " + localStorage.getItem("phone number",phone_number) ;
  role.textContent = "Role:"+ " "+"Client";
  
  
  
}
display_userInfo();


