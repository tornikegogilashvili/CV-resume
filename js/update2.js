const forma = document.querySelector("piradi_form");

forma.addEventListener("submit", (es)=>{
    es.preventDefault();
    const fd = new FormData(forma);
    console.log(fd);
})