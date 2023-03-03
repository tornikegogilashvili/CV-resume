     
        const json = localStorage.getItem("piradi_form");
        const obj = JSON.parse(json);
        console.log(json);
        console.log(obj);
        for( key in obj){
            const markup =`
            <p class="CV_name CV" id="CV_name">${obj.firstname}</p>
            <p class="CV_lastname CV" id="CV_lastname">${obj.firstname+" "+obj.lastname}</p>
            <div class="piradi_div_img" id="piradi_div_img"></div>
            <p class="CV_email" id="CV_email">${obj.email}</p>
            <p class="CV_tel" id="CV_tel">${obj.mobile}</p>
            <p class="CV_about" id="CV_about">ჩემ შესახებ</p>
            <p class="CV_text" id="CV_text">${obj.textarea}</p>
            `;
            document.getElementById("piradi_div_3").innerHTML=markup;
            
        }
