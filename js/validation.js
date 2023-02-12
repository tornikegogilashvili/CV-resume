let redberryEmail = document.getElementById("email");
let regX = /^[a-zA-Z0-9_]+@redberry.ge$/;

let check_email = document.querySelector(".fa-circle-check-p");
let xmark_email = document.querySelector(".fa-circle-xmark-p");

let telephoneValidation = document.getElementById("tel");
let telRegX = /^(\+?995)?(79\d{7}|5\d{8})$/;

let check_tel = document.querySelector(".fa-circle-check-tel-p");
let xmark_tel = document.querySelector(".fa-circle-xmark-tel-p");
// -------მეილი------
redberryEmail.addEventListener("input", (q)=>{
    console.log(q.target.value);
    if(q.target.value.match(regX)){
        redberryEmail.classList.add("valid")
        redberryEmail.classList.remove("invalid")
        check_email.style.display="block"
        xmark_email.style.display="none"     
                
            }else{
                redberryEmail.classList.add("invalid")
                redberryEmail.classList.remove("valid")
                xmark_email.style.display="block"  
            }

});
// -------ტელეფონი-------
telephoneValidation.addEventListener("input", (teleph)=>{
    console.log(teleph.target.value);
    if(teleph.target.value.match(telRegX)){
        telephoneValidation.classList.add("valid");
        telephoneValidation.classList.remove("invalid");    
        check_tel.style.display="block";
        xmark_tel.style.display="none";
                
            }else{
                telephoneValidation.classList.add("invalid");
                telephoneValidation.classList.remove("valid");
                xmark_tel.style.display="block";
            }

});
