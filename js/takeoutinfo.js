
let image_preview = document.querySelector(".image_preview");
// image_preview.src=toString(json3);
const url = localStorage.getItem("my-image");
console.log(url);



        const json = localStorage.getItem("piradi_form");
        const obj = JSON.parse(json);
        console.log(json);
        console.log(obj);
        for( key in obj){
            const markup =`
            <p class="CV_name CV" id="CV_name">${obj.firstname}</p>
            <p class="CV_lastname CV" id="CV_lastname">${obj.firstname+" "+obj.lastname}</p>
            <img class="image_preview" id="image_preview" src="${url}" alt="image_preview">
            <p class="CV_email" id="CV_email">${obj.email}</p>
            <p class="CV_tel" id="CV_tel">${obj.mobile}</p>
            <p class="CV_about" id="CV_about">ჩემ შესახებ</p>
            <p class="CV_text" id="CV_text">${obj.textarea}</p>
            <div class="redstar_div"><img src="images/LOGO-12 1.png" alt="red star"></div>
            `;
            document.getElementById("piradi_div_3").innerHTML=markup;
            
        }
//    if (url) {
//     image_preview.src = url;
// }     
