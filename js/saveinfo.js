            const formForLocal1 = document.querySelector(".piradi_form");
            formForLocal1.addEventListener("submit", (e)=>{
            e.preventDefault();
            const nf = new FormData(formForLocal1);
            const obj=Object.fromEntries(nf);
            const json = JSON.stringify(obj);
            localStorage.setItem("piradi_form", json);
            console.log(json);
            window.location.href = "gamocdileba.html";
            
        });
    