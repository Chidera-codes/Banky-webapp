
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

  form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    var isValid = validation();
    if(isValid){
      function display_table(params) {
        var table = document.getElementById("accounts_table");
   
        var row= document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");  
        var td4 = document.createElement("td"); 
        var td5 = document.createElement("td"); 
        var td6 = document.createElement("td");
        var today  = new Date(); 
     
        td1.innerHTML = today.toLocaleDateString("en-US");
        td2.innerHTML  = Math.floor ('22'  + Math.random() * 100000000);
        td3.innerHTML  = document.getElementById("input_account_type").value;
        td4.innerHTML = 'Draft';
        td5.innerHTML  = ' ₦' + document.getElementById("input_open_account").value + ".00";
        td6.innerHTML  = ' ₦' + "0.00";

     
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        row.appendChild(td6);
     
        table.children[0].appendChild(row);

      localStorage.setItem("Date", td1.innerText);
      localStorage.setItem("Account number", td2.innerText);
      localStorage.setItem("Account type", td3.innerText);
      localStorage.setItem("Status", td4.innerText);
      localStorage.setItem("Opening balance", td5.innerText);
      localStorage.setItem("Current balance", td6.innerText);
 
        var noacct_text = document.getElementById('noacct_text');
        var table = document.getElementById('form');
        var accounts_table = document.getElementById('accounts_table');
        noacct_text.style.display = "none";
        table.style.display = "none";
        accounts_table.style.display = "block";
        }
        display_table();

      // setTimeout(() => {
      //   e.target.submit();
        
      // }, (5000 * 1000)); 
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

