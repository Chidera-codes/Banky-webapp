
  signin_form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var isValid = loginUser();
    if(isValid){
      document.getElementById('spinner').style.visibility ='visible';
      document.getElementById('signin_text').style.visibility ='hidden';
      e.target.submit();
    }
    
    else{

    }
  })


function loginUser(){
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

 if(email !== localStorage.getItem('email')){

   document.getElementById("blank_input").style ='visible' ;
   return false;  
 }
 else if(password !== localStorage.getItem('password')){
   document.getElementById("blank_input").style ='visible' ;
   return false;  

 }
 else{
   return true;
 }
}
