document.getElementById("log in").addEventListener("click",function(){
    event.preventDefault();
var bd = [
    {email:"a@gmail.com", password:"123"}
]
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

var isLogin = false
for(var i = 0;i<bd.length;i++){
    if(bd[i].email == email && bd[i].password == password){
        isLogin = true
        break;    
    }
}

if(isLogin){
   window.location.href = "index2.html"
}else{
    alert("Log in error. \n Email or Passaword by error.")
}
    
});