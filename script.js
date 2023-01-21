let name = document.getElementById("name");
let surname = document.querySelector("#surname");
let phoneNumber = document.getElementById("number");
let email = document.getElementById("email");
let color = document.getElementById("color");
let salary = document.getElementById("salary");
let submit = document.querySelector(".submit");
let reset = document.querySelector(".reset");

let userInfo = document.querySelector(".userInfo");
      
submit.addEventListener("click", () => {  //take all values from inputs and put it in Object
   const userData = {
     name: name.value,
     surname: surname.value,
     phoneNumber: phoneNumber.value,
     email: email.value,
     color: color.value,
     salary: salary.value,
     submit: submit.value
   }
   // console.log(userData);
   for (let i in userData) {
     userInfo.innerHTML += `<div id = ${i}>${userData[i]}</div>`;
   }
  
  //to show just name and email
// userInfo.innerHTML += `<div id = ${name}>${userData.name}</div>`;
// userInfo.innerHTML += `<div id = ${email}>${userData.email}</div>`;
})

reset.addEventListener("click", () => {   //clear all fields
  name.value = null;
  surname.value = null;
  phoneNumber.value = null;
  email.value = null;
  color.value = null;
  salary.value = null;
})