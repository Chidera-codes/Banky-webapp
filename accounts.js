
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


// const renderAccounts = (accounts) => {
//   const container = document.querySelector('.container');
//   container.textContent ='';
//   if(!accounts || accounts.length === 0){
//     const noAccountElem = document.createElement('p');
//     noAccountElem.textContent = 'you have no opened any account yet.'
//     return null;
//   }
//   else{
//     const table = document.getElementById("accounts_table");
//       var x = table.rows.length;
//       while (--x){
//         table.deleteRow(x);
//       }
//       for(i = 0 ; i < array2.length; i++){
//         var row= document.createElement("tr");
//         var td1 = document.createElement("td");
//         var td2 = document.createElement("td");
//         var td3 = document.createElement("td");  
//         var td4 = document.createElement("td"); 
//         var td5 = document.createElement("td"); 
//         var td6 = document.createElement("td");
         
     
//         td1.innerHTML = array2[i].date;
//         td2.innerHTML  = array2[i].account_number ;
//         td3.innerHTML  = array2[i].input_account_type;
//         td4.innerHTML = array2[i].account_status;
//         td5.innerHTML  = array2[i].input_open_account;
//         td6.innerHTML  = array2[i].current_balance ;
    
     
//         row.appendChild(td1);
//         row.appendChild(td2);
//         row.appendChild(td3);
//         row.appendChild(td4);
//         row.appendChild(td5);
//         row.appendChild(td6);
//         table.children[0].appendChild(row);
    
//       }
    

//   }
// }

// const SaveAccount = (newAccount) => {
//   const data = getAccounts();
//   if(!data || data.length ===0){const accounts = [newAccounts];
//     accounts.push(newAccounts);

//     localStorage.setItem('user-accounts', JSON.stringify(accounts));
//     renderAccounts(accounts);
//     return null;


//   }
//   data.push(newAccount);
//   localStorage.setItem('user-accounts',JSON.stringify(data));
//   renderAccounts(data);
// }

// const getAccounts = ()=>{
//   const accunts = localStorage.getItem('user-accounts');
//   return JSON.parse(accounts);
// }




let array = new Array();
function addData(){
  array = getData();
  getData();
  var today  = new Date(); 
  array.push({
    date:today.toLocaleDateString("en-US"),
    account_number :Math.floor ('22'  + Math.random() * 100000000),
    input_account_type:document.getElementById("input_account_type").value,
    account_status :'Draft',
    input_open_account :' ₦' + document.getElementById("input_open_account").value + ".00",
    current_balance : ' ₦' + "0.00"
    
  });
  localStorage.setItem('accountData', JSON.stringify(array));
  showData();
  return false;
}


var array2 = new Array();
function showData() {
  let array2 = this.getData();
  // getData();
  const table = document.getElementById("accounts_table");
        var x = table.rows.length;
        while (--x){
          table.deleteRow(x);
        }
        for(i = 0 ; i < array2.length; i++){
          var row= document.createElement("tr");
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");
          var td3 = document.createElement("td");  
          var td4 = document.createElement("td"); 
          var td5 = document.createElement("td"); 
          var td6 = document.createElement("td");
           
       
          td1.innerHTML = array2[i].date;
          td2.innerHTML  = array2[i].account_number ;
          td3.innerHTML  = array2[i].input_account_type;
          td4.innerHTML = array2[i].account_status;
          td5.innerHTML  = array2[i].input_open_account;
          td6.innerHTML  = array2[i].current_balance ;
      
       
          row.appendChild(td1);
          row.appendChild(td2);
          row.appendChild(td3);
          row.appendChild(td4);
          row.appendChild(td5);
          row.appendChild(td6);
          table.children[0].appendChild(row);
      
        }


};





function getData() {
    var str = localStorage.getItem("accountData");
    if (str !== null) {
      document.getElementById('noacct_text').style.display = 'none';
      return JSON.parse(str);
    }
    else{
      localStorage.setItem('accountData', JSON.stringify(array));
      addData();
      
    }
  
  // let localStorageItem =JSON.parse(localStorage.getItem('accountData'));
  // return localStorageItem == null ? [] : localStorageItem.accountData;
    
}




  form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    var isValid = validation();
    if(isValid){
      addData();
      // SaveAccount(newAccount);
      // var noacct_text = document.getElementById('noacct_text');
      // var table = document.getElementById('form');
      // var accounts_table = document.getElementById('accounts_table');
      // noacct_text.style.display = "none";
      // table.style.display = "none";
      // accounts_table.style.display = "block";

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




