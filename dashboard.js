function display_userInfo(){
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var email = document.getElementById("email").value;
  var phone_number = document.getElementById("number").value;
  var role = document.getElementById("role").value;

  // Just get rid of the "" at the value (change "name" to name).
  localStorage.getItem("firstname", firstname);
  localStorage.getItem("lastname", lastname);
  username.textContent =  + localStorage.getItem('firstname') + 
  "" + localStorage.getItem('lastname');
}
display_userInfo()