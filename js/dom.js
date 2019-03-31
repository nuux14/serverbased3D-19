function addUser(){
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
   
   name.value='';email.value='';
}

var usersCollection=[];

function User(name, email){
 this.userName=name;
 this.userEmail=email;
}