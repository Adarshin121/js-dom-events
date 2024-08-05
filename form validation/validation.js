var name= document.getElementById('name');
var mail= document.getElementById('mail');
var pass= document.getElementById('pass');
var errpass= document.getElementById('errpass');


function validate()
{   
    console.log(mail.value);
    if(pass.value.trim() == ""){   //trim() uuse to remove white spaces
        alert("enter your email");
        return false; // else goto the sucess page
    }
    else if(pass.value.length < 5)
    {
        // alert("password should be at least 5 characters long");
        pass.style.border="2px solid red";
        errpass.innerHTML = "Password should be at least 5 characters long" ;//show
        return false;
    }
    else{
        alert("validation is proper")
    }
}


