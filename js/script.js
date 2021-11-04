fetch('https://cors-anywhere.herokuapp.com/https://cbu.uz/uz/arkhiv-kursov-valyut/json/')
    .then((response) => {
        return response.json(); 
    })
    .then((currency) => {
        var text = "";
        for(var i in currency) {
            text += `
            <div class="middle">
                <div class="col-5 mid">
                    <img src="img/flags/${currency[i]['Ccy']}.svg" alt="">
                    <div class="item text">${currency[i]['CcyNm_UZ']}</div>
                </div>
                <div class="col-2 mid">
                    <div class="item">${currency[i]['Ccy']}</div>
                </div>
                <div class="col-3 mid">
                    <div class="item">${currency[i]['Diff']}</div>
                </div>
                <div class="col-2 mid">
                    <div class="item">${currency[i]['Rate']}</div>
                </div>
            </div>
            `;
        }
        document.getElementById('root').innerHTML = text;
    });