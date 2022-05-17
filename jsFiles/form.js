let username = document.getElementById("Name") 
let email = document.getElementById("Email") 
let phone = document.getElementById("phone") 
let profession = document.getElementById("select") 
let message = document.getElementById("message") 
let send = document.getElementById("send") 
let form = document.querySelector(".contact-form")


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let formData = {
        name:username.value,
        email:email.value,
        phone:phone.value,
        profession:profession.value,
        message:message.value

    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if (!xhr.responseText == 'success') {
            alert('Email Sent Successfully..!');
            username.value = '';
            email.value = '';
            phone.value = '';
            profession.value = '';
            message.value = '';
        } else {
            alert('Something went wrong..!');
        }
    }
    console.log(formData);
    xhr.send(JSON.stringify(formData));


})

