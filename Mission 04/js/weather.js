const API_KEY = "27e692021e04474429316853c48d07a7";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        }); //js가 url을 부르는
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

//성공함수와 실패함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);