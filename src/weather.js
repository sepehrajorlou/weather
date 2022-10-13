import {weather_code , cityFunction , timeFunction} from "./innerFunction.js";


const search_icon = document.querySelector(".search-icon");
const input_search = document.querySelector(".input-search");

const windspeed = document.querySelector("#windspeed");
const temperature = document.querySelector("#temperature");
const max_tempture = document.querySelector("#max-tempture");
const min_tempture = document.querySelector("#min-tempture");
const winddirection = document.querySelector("#winddirection");





const location_details = (city) => {
    const api_key = "ge-2c583c875fc5ec30";
    const url = `https://api.geocode.earth/v1/autocomplete?api_key=${api_key}&text=${city}`
    fetch(url)
        .then(response => {
            response.json()
                .then(data => {
                    current_weather(data.features[0].bbox[1], data.features[0].bbox[0]);
                })
        })
}





const current_weather = (latitude, longitude) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${Number(latitude).toFixed(2)}&longitude=${Number(longitude).toFixed(2)}&daily=temperature_2m_max,temperature_2m_min&timezone=auto&current_weather=true`;
    fetch(url)
        .then(response => {
            response.json()
                .then(data => {
                    windspeed.innerHTML = `${data.current_weather.windspeed} km/h`;
                    temperature.innerHTML = `${data.current_weather.temperature}&#176`;
                    max_tempture.innerHTML = `${data.daily.temperature_2m_max[0]} &#176`;
                    min_tempture.innerHTML = `${data.daily.temperature_2m_min[0]} &#176`;
                    winddirection.innerHTML = `${data.current_weather.winddirection} &#176`;
                    weather_code(data.current_weather.weathercode);
                    cityFunction(data.timezone);
                    // console.log(data)
                    timeFunction(new Date().toLocaleString("en-US", {timeZone: data.timezone}))
                })
        })
        .catch(err => {
            console.log(err)
        })
}








input_search.addEventListener("keypress", (e) => {
    setTimeout(() => {
        let cityName = e.target.value;
        if (e.keyCode == "13") {
            location_details(cityName);
            e.target.value = "";
        }

    })
})






