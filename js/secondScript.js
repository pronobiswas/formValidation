let name_input = document.querySelector(".name_input");
let name_result = document.querySelector(".name_result");
let email_input = document.querySelector(".email_input");
let email_result = document.querySelector(".email_result");
let password_input = document.querySelector(".password_input");
let password_result = document.querySelector(".password_result");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let justinput = document.getElementsByTagName("input");
let name_valid = /^[a-zA-Z]+ [a-zA-Z]+$/;
let email_regax = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// button 1
btn1.addEventListener("click" , function(){
    if(name_input.value == ""){
        name_result.innerHTML = "fill the form";
        
    }else if(name_input.value.length < 4){
        name_result.innerHTML = "enter your valid name";
    }
    else{
        name_result.innerHTML = "thank you";
    }
});
// email match
btn1.addEventListener("click" , function(){
    if(email_input.value == ""){
        email_result.innerHTML = "fill the form";
        email_result.style.color = "red";
    }
    else if(!email_input.value.match(email_regax)){
        email_result.innerHTML = "enter your valid mail";
        email_result.style.color = "yellow";
    }else{
        email_result.innerHTML = "thank you";
        email_result.style.color = "white";
    }
});
// password========
btn1.addEventListener("click" , function(){
    if(password_input.value == ""){
        password_result.innerHTML = "enter your password";
        password_result.style.color = "red";
        
    }else if(password_input.value.length < 6){
        password_result.innerHTML = "password too short";
        password_result.style.color = "yellow";
    }else{
        password_result.innerHTML ="all right";
        password_result.style.color = "#fff";
    }

});
btn2.addEventListener("click" , function(){
    name_result.innerHTML = location.reload()
});
