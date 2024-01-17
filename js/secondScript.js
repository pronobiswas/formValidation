let name_input = document.querySelector(".name_input");
let name_result = document.querySelector(".name_result");
let email_input = document.querySelector(".email_input");
let email_result = document.querySelector(".email_result");
let password_input = document.querySelector(".password_input");
let password_result = document.querySelector(".password_result");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let justinput = document.getElementsByTagName("input");

// button 1
btn1.addEventListener("click" , function(){
    if(name_input.value == ""){
        name_result.innerHTML = "fill the form"
        
    }
    else{
        name_result.innerHTML = "thank you"
        name_result.style.color = "#fff"
    }
});
// email match
btn1.addEventListener("click" , function(){
    if(email_input.value == ""){
        email_result.innerHTML = "fill the form"
        
    }
    else{
        email_result.innerHTML =  email_input.value;
        email_result.style.color = "#fff"
    }
});
// password========
btn1.addEventListener("click" , function(){
    if(password_input.value.length < 8){
        password_result.innerHTML = "password too short"
        
    }
});
btn2.addEventListener("click" , function(){
    name_result.innerHTML = location.reload()
});
