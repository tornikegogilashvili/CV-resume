        const json3 = localStorage.getItem("my-image");
        console.log(json3);
        let image_preview = document.querySelector(".image_preview_2");
             
        
        const json = localStorage.getItem("piradi_form");
        const obj = JSON.parse(json);
        console.log(json);
        console.log(obj);
        for( key in obj){
            const markup =`
            
            <p class="CV_lastname_update" id="CV_lastname_update">${obj.firstname+" "+obj.lastname}</p>
            <div class="piradi_div_img" id="piradi_div_img"></div>
            <img class="image_preview_2" id="image_preview_2" src="${json3}" alt="image_preview_2"></img>   
            <p class="CV_email_update" id="CV_email_update">email: ${obj.email}</p>
            <p class="CV_tel_update" id="CV_tel_update">tel: ${obj.mobile}</p>
            <p class="CV_about_update" id="CV_about_update">ჩემ შესახებ</p>
            <p class="CV_text_update" id="CV_text_update">${obj.textarea}</p>
            `;
            document.getElementById("piradi_div_5").innerHTML=markup;
            
        }