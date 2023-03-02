// ---------თანამდებობის აფდეითი-------
    let tanamdeboba = document.getElementById("tanamdeboba");
    let tanamdeboba_update = document.getElementById("tanamdeboba_update");
    tanamdeboba.addEventListener("input", (e)=>{
        console.log(e.target.value);
        tanamdeboba_update.innerHTML=""+e.target.value;

    });