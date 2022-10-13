const weatherCode = document.querySelector("#weather-code");
const city = document.querySelector(".city");
const time = document.querySelector("#time");
const weather_code = (code) => {
    const wCode = code;
    if (wCode == 0) {
        weatherCode.innerHTML = "Clear sky";
    }
    else if (wCode == 1) {
        weatherCode.innerHTML = "Mainly clear";
    }
    else if (wCode == 2) {
        weatherCode.innerHTML = "partly cloudy";
    }
    else if (wCode == 3) {
        weatherCode.innerHTML = "overcast";
    }
    else if (wCode == 45) {
        weatherCode.innerHTML = "Fog";
    }
    else if (wCode == 48) {
        weatherCode.innerHTML = "rime fog";
    }
    else if (wCode == 51) {
        weatherCode.innerHTML = "Drizzle-Light";
    }
    else if (wCode == 53) {
        weatherCode.innerHTML = "Drizzle-moderate";
    }
    else if (wCode == 55) {
        weatherCode.innerHTML = "Drizzle-dense intensity";
    }
    else if (wCode == 56) {
        weatherCode.innerHTML = "Freezing Drizzle-Light";
    }
    else if (wCode == 57) {
        weatherCode.innerHTML = "Freezing Drizzle-dense intensity";
    }
    else if (wCode == 61) {
        weatherCode.innerHTML = "Rain-Slight";
    }
    else if (wCode == 63) {
        weatherCode.innerHTML = "Rain-moderate";
    }
    else if (wCode == 65) {
        weatherCode.innerHTML = "Rain-heavy intensity";
    }
    else if (wCode == 66) {
        weatherCode.innerHTML = "Freezing Rain-Light";
    }
    else if (wCode == 71) {
        weatherCode.innerHTML = "Snow fall-Slight";
    }
    else if (wCode == 73) {
        weatherCode.innerHTML = "Snow fall-Slight moderate";
    }
    else if (wCode == 75) {
        weatherCode.innerHTML = "Snow fall-heavy intensity";
    }
    else if (wCode == 77) {
        weatherCode.innerHTML = "Snow grains";
    }
    else if (wCode == 80) {
        weatherCode.innerHTML = "Rain showers-Slight";
    }
    else if (wCode == 81) {
        weatherCode.innerHTML = "Rain showers-moderate";
    }
    else if (wCode == 82) {
        weatherCode.innerHTML = "Rain showers-violent";
    }
    else if (wCode == 85) {
        weatherCode.innerHTML = "Snow showers-slight";
    }
    else if (wCode == 86) {
        weatherCode.innerHTML = "Snow showers-heavy";
    }
    else if (wCode == "95 *" || wCode == "95*" || wCode == "95") {
        weatherCode.innerHTML = "	Thunderstorm-Slight or moderate";
    }
    else if (wCode == "96 *" || wCode == "96*" || wCode == "96") {
        weatherCode.innerHTML = "Thunderstorm with slight";
    }
    else if (wCode == "99 *" || wCode == "99*" || wCode == "99") {
        weatherCode.innerHTML = "Thunderstorm with slight and heavy hail";
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