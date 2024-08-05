var name= document.getElementById('name');
var mail= document.getElementById('mail');
var pass= document.getElementById('pass');

function change()
{
    mail.style.backgroundColor="yellow";
}

function hide()
{
    mail.style.backgroundColor="white";
}
//eventlistner
pass.addEventListener("keyup",function display(e){
    console.log(e.target.value); //we can see value in console
});
mail.addEventListener("focus",hide);
