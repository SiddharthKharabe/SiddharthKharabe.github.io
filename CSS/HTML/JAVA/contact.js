var fnameError= document.getElementById('fname-error');
var lnameError= document.getElementById('lname-error');
var numberError= document.getElementById('number-error');
var emailError= document.getElementById('email-error');
var sumbitError= document.getElementById('submit-error');

function validateName()
{
    var name =document.getElementById('fname').value; 


    if(name.length == 0){
        nameError.innerHTML='Name is required';
        return false;
    }
    
    
    name.Error.innerHTML='valid';
    return true;
}  

function validateNumber()
{
    var number =document.getElementById('no').value; 
    if(number.length == 0){
        numberError.innerHTML='Number is required';
        return false;
    }
    if(number.length !== 10){
        numberError.innerHTML='Number should be 10 digit';
        return false;
    }
    if(!number.match(/^[0-9]{10}$/)){
        numberError.innerHTML='Number is required';
        return false;
    }
    number.Error.innerHTML='valid';
    return true;
}

function validateEmail()
{
    var email =document.getElementById('email').value; 
    if(email.length == 0){
        emailError.innerHTML='Number is required';
        return false;
    }

    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[.\][a-z]{2,4}$/)
    ){
        emailError.innerHTML='Number is required';
        return false;
    }
    no.Error.innerHTML='valid';
    return true;
}