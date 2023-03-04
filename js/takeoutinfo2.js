        const json1 = localStorage.getItem("piradi_form1");
        const obj1 = JSON.parse(json1);
        console.log(json1);
        console.log(obj1);
        for( key in obj1){
            const mark =`
            <p class="tanamdeboba_update" id="tanamdeboba_update">${obj1.tanamdeboba} -${obj1.damsaqmebeli}</p>
            <p class="date_1_update" id="date_1_update">${obj1.date_1} / ${obj1.date_2}</p>
            <p class="agwera_line" id="agwera_line">აღწერა</p>
            <p class="agwera_update" id="agwera_update">${obj1.agwera}</p>
            `;
            document.getElementById("piradi_div_6").innerHTML=mark;
            
        };