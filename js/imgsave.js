            // const fileEl = document.querySelector(".img");
            // const btn = document.querySelector(".piradi_next");
            
            // fileEl.addEventListener("change", ()=>{
            //     const fr = new FileReader();
            //     fr.readAsDataURL(fileEl.files[0]);
            //     fr.addEventListener("load", ()=>{
            //         const url = fr.result;
            //         const img = new Image();
            //         img.src = url;
            //         let child = document.querySelector(".image_CV");
            //         child.src=url;
            //     });
            // });

            // btn.addEventListener("click", ()=>{
            //                 window.location.href = "gamocdileba.html";

            //             })


const fileEl = document.querySelector(".img");
fileEl.addEventListener("change", function () {

    const wamkitxveli = new FileReader();

    wamkitxveli.addEventListener("load", ()=>{
        localStorage.setItem("recent-image", wamkitxveli.result);
    });
    wamkitxveli.readAsDataURL(this.files[0]);
    
});

// document.addEventListener("DOMContentLoaded", () => {
//     const recentImageDataUrl = localStorage.getItem("recent-image");
    
//         document.querySelector(".image_CV").setAttribute("src", recentImageDataUrl)
    
// })
            
