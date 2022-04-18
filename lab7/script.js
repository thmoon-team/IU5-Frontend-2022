let MyKey = "dd0d0bfe957f3a124e05f5e2fd28a8e8";
let city = "Москва";
let butt = document.getElementById('button');
let inp = document.getElementById('city');
let city_name = document.getElementById('city_name');
let temp = document.getElementById('temp');
let pres = document.getElementById('pres');
let wind = document.getElementById('wind');
let descr = document.getElementById('descr');
let hum =  document.getElementById('hum');
let icon;

window.onload = funonload;
butt.addEventListener('click', start);
inp.onkeydown = function (event) {
    if (event.keyCode === 13) start();
}

function start() {
    city = inp.value;
    funonload();
}

function funonload(){
    let Weather = fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&lang=ru&units=metric&appid=" + MyKey).then(data => data.json());
    Weather.then (
        result =>{   createW(result); },
        error => alert("Ошибка")
    );    
}

function createW(weath){
    
    if (weath.name===undefined) cl();
    else {
    city_name.innerHTML= weath.name;
    let t = Math.round(weath.main.temp);
    temp.innerHTML = t > 0 ? "Температура воздуха: +" + t + '°' :  "Температура воздуха: " + t + '°' ;
    descr.innerHTML = weath.weather[0].description[0].toUpperCase() + weath.weather[0].description.slice(1) ;
    wind.innerHTML = "Скорость ветра: " + weath.wind.speed + " м/c";
    pres.innerHTML="Давление: " + Math.round(weath.main.pressure*0.75) + " мм рт ст";
    hum.innerHTML = "Влажность: " + weath.main.humidity +'%';
}

}
function cl(){
    city_name.innerHTML="Город не найден";   
    temp.innerHTML = wind.innerHTML = temp.innerHTML = feel.innerHTML = descr.innerHTML = wind.innerHTML
    = pres.innerHTML = hum.innerHTML=  ' ';
    pic.style.backgroundImage = "none";
}

