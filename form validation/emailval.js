var mail= document.getElementById('mail');

function validate1(){
    let regex = /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})?$/
    if(regex.test(mail.value)){
        alert(" valid email address");
        return true;
    }else{
        alert("Please enter a valid email address!");
        return false;
    }
}