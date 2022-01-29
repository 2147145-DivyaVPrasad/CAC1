
var span=document.getElementsByTagName("span");


function validate()
{ 
    
var a =  document.getElementById("name").value;
var b = document.getElementById("email").value;
var c =document.getElementById("phone").value;
var d = document.getElementById("pass").value;

if((a == null || a == "") && (b == null || b == "") && (c == null || c == "") && (d == null || d == ""))
{             


span[1].innerText="Blank name";
document.getElementById("name").style.border="1.5px red solid";
span[3].innerText="Blank email";
document.getElementById("email").style.border="1.5px red solid";
span[4].innerText="Blank phone number";
document.getElementById("phone").style.border="1.5px red solid";
span[6].innerText="Blank password";
document.getElementById("pass").style.border="1.5px red solid";
scrollToTop()

return false;   


}
else
allLetter();
validateEmail();

password();
validatePhone(); 

}

          
function validateEmail() {

var user = document.getElementById("email").value;
var user2 = document.getElementById("email");
var re = /^\w+([\.-]?\w+)*@christuniversity.in/;


if (user == "") 
{
span[3].innerText="Blank email***";
user2.style.border="3px red solid";
//alert("Email must be filled out");
return false;
}


if (re.test(user)) {
span[3].innerText = 'Valid';

user2.style.border="3px green solid";

return true;
}
else {

span[3].innerText="Incorrect Email id";
user2.style.border="3px red solid";
return false;
}
}
        
        
        
    function validatePhone() {
         
    var user = document.getElementById("phone").value;
    var user2 = document.getElementById("phone");
    var re = /^[7-9][0-9]{9}$/;


    if (user == "") {
                  
                    
                    span[4].innerText="Blank phone number***";
                    user2.style.border="3px red solid";
                    //alert("Email must be filled out");
                    return false;
                   
                    } 
          if (re.test(user) & user.length ==10) 
          {
            span[4].innerText = 'Valid';
                        
             user2.style.border="3px green solid";
            
              
              return true;
            }

            
          else {
        
              user2.style.border = "red solid 3px";
              span[4].innerText="Phone no should be of 10 digits";
              
              return false;
          } }

    function allLetter()
    {
    var user = document.getElementById("name").value;
    var user2 = document.getElementById("name");
    var re = /^[a-zA-Z ]*$/;
    
    if (user == "") {span[1].innerText="Blank name***";
                    user2.style.border="2px red solid";
                   
                    return false;
                    } 
    if (re.test(user) ) {
        span[1].innerText = 'Valid';
                        
                        user2.style.border="3px green solid";
            
          
           
        }
    else {    
              user2.style.border = "red solid 3px";
              span[1].innerText="Name should contain only alphabets";
              return false;
            
        }

       
       }
    
    
function password()
{ 
var user = document.getElementById("pass").value;
var user2 = document.getElementById("pass");

var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,20})/;
if (user == "" || user == null)
{
span[6].innerText="Blank password***";
user2.style.border="3px red solid";
return false;
} 
else if(re.test(user.trim()))
{
if(user.trim().length >= 8 && user.trim().length <= 15)
{
span[6].innerText="Strong password***";
user2.style.border = "3px green solid";
return true;
}
else if(user.trim().length > 15)
{
span[6].innerText = "Too long password***";
user2.style.border = "4px yellow solid";
return false;
}
}
else
{
span[6].innerText="Weak Password***";
user2.style.border = "4px green solid";
return false;
}

}


function display()
{
    if (validate()=="true" &&   validatePhone()=="true" && password()=="true" && validateEmail())
{
alert("YOU HAVE SUCCESSFULLY REGISTERED")
}

else
  return false;
}
      
function scrollToTop() {
window.scrollTo(4, 0);
}
      
  

function test(event)
{
let code=event.which;
if(code>47&&code<58)

return false;
else
return true;

}
function test2(event)
{
let code=event.which;
if(code>64&&code<91)

return false;
else
return true;

}

