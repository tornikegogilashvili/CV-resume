// ---------თანამდებობა მინ 2 ასო----
let tanamdeboba = document.getElementById("tanamdeboba");
let qartuli = /^[ა-ჰ]+$/;
let tan_c_p = document.querySelector(".tan_c_p");
let tan_x_p = document.querySelector(".tan_x_p")
tanamdeboba.addEventListener("input", (tana)=>{
    console.log(tana.target.value);
    if(tana.target.value.length>=2){
        tanamdeboba.classList.add("valid")
        tanamdeboba.classList.remove("invalid")
        tan_c_p.style.display="block";
        tan_x_p.style.display="none"
    }else{
        tanamdeboba.classList.remove("valid")
        tanamdeboba.classList.add("invalid")
        tan_x_p.style.display="block"
        tan_c_p.style.display="none";
    }
});
// ---------თანამდებობის აფდეითი-------

let tanamdeboba_update = document.getElementById("tanamdeboba_update");
tanamdeboba.addEventListener("input", (qw)=>{
    console.log(qw.target.value);
    tanamdeboba_update.innerHTML=""+qw.target.value;

});

// ---------დამსაქმებელი მინ 2 ასო----
let damsaqmebeli = document.getElementById("damsaqmebeli");
let dam_c_p = document.querySelector(".dam_c_p");
let dam_x_p = document.querySelector(".dam_x_p");
damsaqmebeli.addEventListener("input", (dam)=>{
    
    if(dam.target.value.length>=2){
        damsaqmebeli.classList.add("valid")
        damsaqmebeli.classList.remove("invalid")
        dam_c_p.style.display="block"
        dam_x_p.style.display="none"
    }else{
        damsaqmebeli.classList.remove("valid")
        damsaqmebeli.classList.add("invalid")
        dam_x_p.style.display="block"
        dam_c_p.style.display="none"
    }
});
// -----დამსაქმებლის აფდეით----

let damsaqmebeli_update = document.getElementById("damsaqmebeli_update");
damsaqmebeli.addEventListener("input", (qm)=>{
    console.log(qm.target.value);
    damsaqmebeli_update.innerHTML=""+qm.target.value;

});
// ---------სამს დაწყება ----
let date_1 = document.getElementById("date_1");

date_1.addEventListener("input", (d1)=>{
    
    if(d1.target.value.length!==""){
        date_1.classList.add("valid")
        date_1.classList.remove("invalid")
    }else{
        date_1.classList.remove("valid")
        date_1.classList.add("invalid")
    }
});
// -----სამსახურის დაწყების აფდეით----

let date_1_update = document.getElementById("date_1_update");
date_1.addEventListener("input", (da)=>{
    console.log(da.target.value);
    date_1_update.innerHTML=da.target.value;

});
// ---------სამს დამთავრება ----
let date_2 = document.getElementById("date_2");

date_2.addEventListener("input", (d2)=>{
    
    if(d2.target.value!==""){
        date_2.classList.add("valid")
        date_2.classList.remove("invalid")
    }else{
        date_2.classList.remove("valid")
        date_2.classList.add("invalid")
    }
});
// -----სამსახურის დამთავრები აფდეით----

let date_2_update = document.getElementById("date_2_update");
date_2.addEventListener("input", (te)=>{
    console.log(te.target.value);
    date_2_update.innerHTML=te.target.value;

});
// -------აღწერა-----
let agwera = document.getElementById("agwera");

agwera.addEventListener("input", (agw)=>{
    
    if(agw.target.value!==""){
        agwera.classList.add("valid")
        agwera.classList.remove("invalid")
    }else{
        agwera.classList.remove("valid")
        agwera.classList.add("invalid")
    }
});
// -----აღწერა აფდეით----

let agwera_update = document.getElementById("agwera_update");
agwera.addEventListener("input", (upd)=>{
    console.log(upd.target.value);
    agwera_update.innerHTML=upd.target.value;

});