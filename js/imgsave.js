            const fileEl = document.querySelector(".img");
            const btn = document.querySelector(".piradi_next");
            btn.addEventListener("click", ()=>{
                window.location.href = "gamocdileba.html";

            })
            fileEl.addEventListener("change", ()=>{
                const fr = new FileReader();
                fr.readAsDataURL(fileEl.files[0]);
                fr.addEventListener("load", ()=>{
                    const url = fr.result;
                    const img = new Image();
                    img.src = url;
                    let child = document.querySelector(".image_CV");
                    child.src=url;
                });
            });