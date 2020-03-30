
function openAccount(){

  document.getElementById("firstname").value = localStorage.getItem("firstname" , firstname);

  document.getElementById("lastname").value = localStorage.getItem("lastname" , lastname);

  
}
openAccount();


var open_account = document.querySelector(".open_account_container");
var form = document.getElementById('form');

open_account.addEventListener('click',function(){
  var form = document.getElementById("form");
  if(form.style.display ==='none'){
    form.style.display = 'block';
  }
  else{
    form.style.display='none';
    
  }
});

  // for(i = 0; i<=inputs; i++){
  //   if(document.forms['my form'][i].value === ''){
  //     console.log('empty input');
  //     return false;
  //   }
  //   else{
  //     return true;
  //   }
  // }

  form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    var isValid = validation();
    if(isValid){
      e.target.submit();  
    }
    else{
    }
  
  
  });

function validation() {
  var input_open_account = document.getElementById('input_open_account');
  var input_account_type = document.getElementById('input_account_type');
  if(input_open_account.value.trim() == ""){
    input_open_account.style.border = "solid 1px red";
    document.getElementById("error-box").innerHTML= 'Opening balance cannot be left blank';
    return false;
  }
  else if(input_account_type.value.trim() == ""){
    input_account_type.style.border = "solid 1px red";
    document.getElementById("error-box").innerHTML= 'Account type cannot be left blank';
    return false;
  }
  else{
    return true;
  }
} 
