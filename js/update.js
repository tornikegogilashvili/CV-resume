    // -----სახელის აფდეით----
    let firstname = document.getElementById("firstname");
    let CV_name = document.getElementById("CV_name");
    firstname.addEventListener("input", (e)=>{
        console.log(e.target.value);
        CV_name.innerHTML=""+e.target.value;

    });
    
    // -----გვარის აფდეით----
    let lastname = document.getElementById("lastname");
    let CV_lastname = document.getElementById("CV_lastname");
    lastname.addEventListener("input", (p)=>{
        CV_lastname.innerHTML =CV_name.innerHTML +" "+ p.target.value;
    })
    // -----მეილის აფდეით----
    let email = document.getElementById("email");
    let CV_email = document.getElementById("CV_email");
    email.addEventListener("input", (r)=>{
        if(r.target.value==""){
            CV_email.innerHTML=r.target.value;
        }else{
            CV_email.innerHTML='<i class="fa-solid fa-at"></i>'+"&nbsp;"+r.target.value;
        }
    })
    // -----ტელეფონის აფდეით----
    let tel = document.getElementById("tel");
    let CV_tel = document.getElementById("CV_tel");
    tel.addEventListener("input", (k)=>{
        if(k.target.value==""){
            CV_tel.innerHTML=k.target.value;
        }else{
            CV_tel.innerHTML='<i class="fa-solid fa-phone"></i>'+"&nbsp;"+k.target.value;
        }
    })
    // -----ტექსტარეას აფდეით----
    let textarea = document.getElementById("textarea");
    let CV_about = document.getElementById("CV_about");
    let CV_text = document.getElementById("CV_text");
    textarea.addEventListener("input", (w)=>{
        if(w.target.value!==""){
            CV_about.innerHTML="ჩემ შესახებ";
            CV_text.innerHTML=w.target.value;
        }else{
            CV_about.innerHTML="";
            CV_text.innerHTML="";
        }
    })
    // -----ფოტოს აფდეით----
    const img = document.querySelector("#img");
    let upload_image = "";
    img.addEventListener("change", function(){
        const reader = new FileReader();
        reader.addEventListener("load", ()=>{
            upload_image=reader.result;
            document.querySelector("#piradi_div_img").style.backgroundImage=`url(${upload_image})`
        });
        reader.readAsDataURL(this.files[0]);
    })