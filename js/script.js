fetch('https://cors-anywhere.herokuapp.com/https://cbu.uz/uz/arkhiv-kursov-valyut/json/')
    .then((response) => {
        return response.json();
    })
    .then((currency) => {
        var text = "";
        for(var i in currency) {
            text += `
            <div class="middle">
                <div class="col-4 mid">
                    <img title="${currency[i]['Ccy']}" src="img/flags/${currency[i]['Ccy']}.svg" alt="">
                    <div class="item text">${currency[i]['CcyNm_UZ']}, ${currency[i]['Ccy']}</div>
                </div>
                <div class="col-1">
                    <i class="bi bi-bar-chart-line icon-chart"></i>
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
        
        var opt = "";
        opt += `<option value="1">UZS</option>`;
        for(var i in currency) {
            opt += `<option value="${currency[i]['Rate']}">${currency[i]['Ccy']}</option>`;
        }
        document.getElementById('current_unit').innerHTML = opt;
        document.getElementById('another_unit').innerHTML = opt;
    });
    function Convert() {
        var value = parseFloat(document.querySelector("#current_value").value);
        var current = parseFloat(document.querySelector("#current_unit").value);
        var another = parseFloat(document.querySelector("#another_unit").value);
        document.querySelector("#another_value").value = current / another * value;
    }
    $(document).ready(function () {
        $(".button-open").click(function(){
            $(".converter_section").fadeIn(500)
        });
        $(".close-icon").click(function(){
            $(".converter_section").fadeOut(600)
        });
    });

    function myFunction() {
        document.body.style.backgroundColor = "rgba(60, 60, 60, 0.8)";
    } 

    // $(".button-open").on( "click", function() {
    //     $( this ).css("background-color", "red");
    // });


// function addZero(i) {
//   if (i < 10) {i = "0" + i}
//   return i;
// }
// const d = new Date();
// let h = addZero(d.getHours());
// let m = addZero(d.getMinutes());
// let time = h + ":" + m;
// document.getElementById("time").innerHTML = time;