let formForLocal2 = document.querySelector(".piradi_form1");
       formForLocal2.addEventListener("submit", (g)=>{
        g.preventDefault();
        let cp = new FormData(formForLocal2);
        let obj1 = Object.fromEntries(cp);
        let json1 = JSON.stringify(obj1);
        localStorage.setItem("piradi_form1", json1);
        console.log(json1);
        window.location.href = "CV.html";
       });