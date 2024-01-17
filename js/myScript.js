


// let email_input = document.querySelector(".email_input");
// let name_input = document.querySelector(".name_input");
// let number_input = document.querySelector(".number_input");
// let email_result = document.querySelector(".email_result");
// let name_result = document.querySelector(".name_result");
// let password_result = document.querySelector(".password_result");
// let btn1 = document.querySelector(".btn1");
// let btn2 = document.querySelector(".btn2");
// let email_regax = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// let name_valid = /^[a-zA-Z]+ [a-zA-Z]+$/;


// btn1.addEventListener("click", function () {

//     //  Email section

//     if (email_input.value == "") {

//         email_result.innerHTML = "Please Enter Your Email";
//         email_result.style.opacity = "1";
//         email_result.style.padding = "12px 0 12px 10px";
//         email_result.style.color = "white";
//         email_result.style.background = "red";


//     }

//     else if (!email_input.value.match(email_regax)) {

//         email_result.innerHTML = "Please Enter Your Valid Email";
//         email_result.style.opacity = "1";
//         email_result.style.padding = "12px 0 12px 10px";
//         email_result.style.color = "white";
//         email_result.style.background = "red";
//     }


//     else {

//         email_result.innerHTML = " ";
//         email_result.style.background = "none";
//         email_result.style.padding = "0";

//     }

//     //  Name  section

//     if (name_input.value == "") {

//         name_result.innerHTML = "Please Enter Your Name";
//         name_result.style.opacity = "1";
//         name_result.style.padding = "12px 0 12px 10px";
//         name_result.style.color = "#fff";
//         name_result.style.background = "red";

//     }

//     else if (!name_input.value.match(name_valid)) {

//         name_result.innerHTML = "Please Enter Your Valid Name";
//         name_result.style.opacity = "1";
//         name_result.style.padding = "12px 0 12px 10px";
//         name_result.style.color = "#fff";
//         name_result.style.background = "red";
//     }

//     else {

//         name_result.innerHTML = " ";
//         name_result.style.opacity = "0";
//         name_result.style.padding = "0";
//         name_result.style.background = "none";
//     }

//     //  Password  section

//     if (number_input.value == "") {

//         password_result.innerHTML = "Please Enter Your Password";
//         password_result.style.opacity = "1";
//         password_result.style.background = "red";
//         password_result.style.padding = "12px 0 12px 10px";
//         password_result.style.color = "#fff";
//     }

//     else {

//         password_result.innerHTML = " ";
//         password_result.style.opacity = "0";
//         password_result.style.background = "none";
//         password_result.style.color = "none";

//     }

// })


// btn2.addEventListener("click", function () {

//     email_input.value = location.reload();
//     name_input.value = location.reload();
//     number_input.value = location.reload();
// });
