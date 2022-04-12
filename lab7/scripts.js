const apiKey = '5d6b5dc8579b33392457225a3108de55'

window.onload = () => {
    let lat = '';
    let lon = '';
    let geo = navigator.geolocation
    geo.getCurrentPosition(props => {
        lat = props.coords.latitude
        lon = props.coords.longitude
        getCity(lat, lon)
    })
    getCity(lat, lon)
}

function getCity(lat, lon) {
    cityName = document.getElementById("input-form").value;
    if (cityName === '') {
        cityName = 'Москва'
    } else {
        lat = ''
        lon = ''
    }

    let url = ''
    if (lat === '') {
        url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&cnt=40&units=metric&lang=ru`
    } else {
        url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&cnt=40&units=metric&lang=ru`
    }
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(
            result => {
                if (result.cod === "404")
                    alert("Город не найден")
                else {
                    pushWeather(result)
                }
            },
            error => alert(error)
        );
}

function pushWeather(result) {
    document.getElementById('city').innerHTML = `${result.city.name}`;
    document.getElementById("weather-screen").style.backgroundImage = `url(screens/${result.list[0].weather[0].icon}.png)`;
    document.getElementById('temp').innerHTML = `${Math.round(result.list[0].main.temp)}°`;
    document.getElementById('main-icon').src = `icons/${result.list[0].weather[0].icon}.png`;
    document.getElementById('description').innerHTML = `${result.list[0].weather[0].description}`;
    document.getElementById('feels-like').innerHTML = `Ощущается как <strong>${Math.round(result.list[0].main.feels_like)}°</strong>`;
    document.getElementById('maxmin').innerHTML = `Макс.: <strong>${Math.round(result.list[0].main.temp_max)}°</strong>, мин.: <strong>${Math.round(result.list[0].main.temp_min)}°</strong>`;
    document.getElementById('wind-value').innerHTML = `<strong>${Math.round(result.list[0].wind.speed)}</strong> м/с`;
    document.getElementById('humidity-value').innerHTML = `<strong>${Math.round(result.list[0].main.humidity)}</strong>%`;
    document.getElementById('press-value').innerHTML = `<strong>${Math.round(0.75008 * result.list[0].main.pressure)}</strong> мм рт. ст.`;
    document.getElementById('cloud').innerHTML = `Облачность: <strong>${Math.round(result.list[0].clouds.all)}</strong>%`;
    document.getElementById('visibility').innerHTML = `Видимость: <strong>${Math.round(result.list[0].visibility / 1000)}</strong> км`;
    document.getElementById('rain-pred').innerHTML = `Вероятность осадков: <strong>${Math.round(result.list[0].pop * 100)}</strong>%`;


    if (document.getElementById('predict-today-id-0') === null) {
        result.list.map((list, index) => {
            let div = document.createElement('div');
            div.className = "predict-today"
            div.id = `predict-today-id-${index}`
            div.innerHTML = `
                <p id="time-today">${list.dt_txt.slice(11, 16)}</p>
                <img id="sub-icon" src="icons/${list.weather[0].icon}.png" width="50px">
                <p id="temp-then">${Math.round(list.main.temp)}°</p>
                `
            if (list.dt_txt.slice(11, 16) === '00:00') {
                div.innerHTML = `
                    <p id="time-today"><strong>${list.dt_txt.slice(8, 10)}.${list.dt_txt.slice(5, 7)}</strong></p>
                    <p id="time-today">00:00</p>
                    <img id="sub-icon" src="icons/${list.weather[0].icon}.png" width="50px">
                    <p id="temp-then"><strong>${Math.round(list.main.temp)}°</strong></p>
                    `
            }
            if (index === 0) {
                div.innerHTML = `
                    <p id="time-today"><strong>Сейчас</strong></p>
                    <img id="sub-icon" src="icons/${list.weather[0].icon}.png" width="50px">
                    <p id="temp-then"><strong>${Math.round(list.main.temp)}°<strong></p>
                    `
            }
            document.getElementById('temp-today-id').appendChild(div);
        })
    } else {
        result.list.map((list, index) => {
            let predictToday = document.getElementById(`predict-today-id-${index}`);
            predictToday.innerHTML = `
                <p id="time-today">${list.dt_txt.slice(11, 16)}</p>
                <img id="sub-icon" src="icons/${list.weather[0].icon}.png" width="50px">
                <p id="temp-then">${Math.round(list.main.temp)}°</p>
                `
            if (list.dt_txt.slice(11, 16) === '00:00') {
                predictToday.innerHTML = `
                    <p id="time-today"><strong>${list.dt_txt.slice(8, 10)}.${list.dt_txt.slice(5, 7)}</strong></p>
                    <p id="time-today">00:00</p>
                    <img id="sub-icon" src="icons/${list.weather[0].icon}.png" width="50px">
                    <p id="temp-then"><strong>${Math.round(list.main.temp)}°</strong></p>
                    `
            }
            if (index === 0) {
                predictToday.innerHTML = `
                    <p id="time-today"><strong>Сейчас</strong></p>
                    <img id="sub-icon" src="icons/${list.weather[0].icon}.png" width="50px">
                    <p id="temp-then"><strong>${Math.round(list.main.temp)}</strong>°</p>
                    `
            }
        })
    }
}