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

form.addEventListener('click', ()=>{
  console.log('submited')
})

