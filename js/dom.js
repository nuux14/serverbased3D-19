 import {User,a} from "./dom2.js";
var btn=document.getElementById('btnAdd');
btn.addEventListener('click', function(){
    var name=document.getElementById('txtName');
    var email=document.querySelector('input#txtEmail');

    var tbl=document.getElementById('tbl');
   var tr=document.createElement('tr');
   var td1=document.createElement('td');
   var td2=document.createElement('td');
   td1.innerText=name.value;
   td2.innerText=email.value;
   tr.appendChild(td1);
   tr.appendChild(td2);
   tbl.appendChild(tr);   
   var nuser= new User(name.value,email.value);
   usersCollection.push(nuser);
 // alert(a);
   name.value='';email.value='';
});

 export var usersCollection=[];

//