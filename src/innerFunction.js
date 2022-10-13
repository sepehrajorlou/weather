const weatherCode = document.querySelector("#weather-code");
const city = document.querySelector(".city");
const time = document.querySelector("#time");
const weather_wallpaper = document.querySelector("#weather-wallpaper");






const weather_code = (code) => {
    const wCode = code;
    if (wCode == 0) {
        weatherCode.innerHTML = "Clear sky";
        weather_wallpaper.src = "./clearsky.jpg";
    }
    else if (wCode == 1) {
        weatherCode.innerHTML = "Mainly clear";
        weather_wallpaper.src = "./clearsky.jpg";
    }
    else if (wCode == 2) {
        weatherCode.innerHTML = "partly cloudy";
        weather_wallpaper.src = "./partlycloudy.jpg";

    }
    else if (wCode == 3) {
        weatherCode.innerHTML = "overcast";
        weather_wallpaper.src = "./cloudy.jpg";
    }
    else if (wCode == 45) {
        weatherCode.innerHTML = "Fog";
    }
    else if (wCode == 48) {
        weatherCode.innerHTML = "rime fog";
    }
    else if (wCode == 51) {
        weatherCode.innerHTML = "Drizzle-Light";
        weather_wallpaper.src = "./rainy.jpg";
    }
    else if (wCode == 53) {
        weatherCode.innerHTML = "Drizzle-moderate";
        weather_wallpaper.src = "./rainy.jpg";
    }
    else if (wCode == 55) {
        weatherCode.innerHTML = "Drizzle-dense intensity";
        weather_wallpaper.src = "./rainy.jpg";
    }
    else if (wCode == 56) {
        weatherCode.innerHTML = "Freezing Drizzle-Light";
        weather_wallpaper.src = "./hail.jpg";
    }
    else if (wCode == 57) {
        weatherCode.innerHTML = "Freezing Drizzle-dense intensity";
        weather_wallpaper.src = "./hail.jpg";
    }
    else if (wCode == 61) {
        weatherCode.innerHTML = "Rain-Slight";
        weather_wallpaper.src = "./rainy.jpg";
    }
    else if (wCode == 63) {
        weatherCode.innerHTML = "Rain-moderate";
        weather_wallpaper.src = "./rainy.jpg";
    }
    else if (wCode == 65) {
        weatherCode.innerHTML = "Rain-heavy intensity";
        weather_wallpaper.src = "./rainy.jpg";
    }
    else if (wCode == 66) {
        weatherCode.innerHTML = "Freezing Rain-Light";
        weather_wallpaper.src = "./hail.jpg";
    }
    else if (wCode == 71) {
        weatherCode.innerHTML = "Snow fall-Slight";
        weather_wallpaper.src = "./snowfall.jpg";
    }
    else if (wCode == 73) {
        weatherCode.innerHTML = "Snow fall-Slight moderate";
        weather_wallpaper.src = "./snowfall.jpg";
    }
    else if (wCode == 75) {
        weatherCode.innerHTML = "Snow fall-heavy intensity";
        weather_wallpaper.src = "./snowfall.jpg";
    }
    else if (wCode == 77) {
        weatherCode.innerHTML = "Snow grains";
        weather_wallpaper.src = "./snowfall.jpg";
    }
    else if (wCode == 80) {
        weatherCode.innerHTML = "Rain showers-Slight";
        weather_wallpaper.src = "./rainy.jpg";
    }
    else if (wCode == 81) {
        weatherCode.innerHTML = "Rain showers-moderate";
        weather_wallpaper.src = "./rainy.jpg";
    }
    else if (wCode == 82) {
        weatherCode.innerHTML = "Rain showers-violent";
        weather_wallpaper.src = "./rainy.jpg";
    }
    else if (wCode == 85) {
        weatherCode.innerHTML = "Snow showers-slight";
        weather_wallpaper.src = "./snowfall.jpg";
  
    }
    else if (wCode == 86) {
        weatherCode.innerHTML = "Snow showers-heavy";
        weather_wallpaper.src = "./snowfall.jpg";
    }
    else if (wCode == "95 *" || wCode == "95*" || wCode == "95") {
        weatherCode.innerHTML = "Thunderstorm-Slight or moderate";
        weather_wallpaper.src = "./Thunderstorm.jpg";
    }
    else if (wCode == "96 *" || wCode == "96*" || wCode == "96") {
        weatherCode.innerHTML = "Thunderstorm with slight";
        weather_wallpaper.src = "./Thunderstorm.jpg";
    }
    else if (wCode == "99 *" || wCode == "99*" || wCode == "99") {
        weatherCode.innerHTML = "Thunderstorm with slight and heavy hail";
        weather_wallpaper.src = "./Thunderstorm.jpg";
    } else {
        weather_wallpaper.src = "./mainwallpaper.jpg";
    }
}


const cityFunction = (timezone) => {
    let arr = timezone.split("");
    let index = arr.indexOf("/");
    city.innerHTML = `${timezone.slice(index + 1)}`;
}

const timeFunction = (timezone) => {
    let arr = timezone.split("");
    let index = arr.indexOf(",");
    time.innerHTML = `${timezone.slice(0, index)} - ${timezone.slice(index + 1)}`;

}
export { weather_code, cityFunction, timeFunction };