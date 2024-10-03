
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "d2f9b3beb4aa181edd0ecf94473c782f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    const icon = weather_data.weather[0].icon;
    console.log(icon[icon.length-1])

     const name = document.getElementById('placename');
 
     
     name.innerHTML = `${weather_data.name}`




    
    if(icon[icon.length-1]=="d"){
            switch(weather_data.weather[0].main){
            case 'Clouds':
                weather_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day.svg";
                break;
            case 'Clear':
                weather_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg";
                break;
            case 'Rain':
                weather_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/rain.svg";
                break;
            case 'Mist':
                weather_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/mist.svg";
                break;
            case 'Snow':
                weather_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-day-sleet.svg";
                break;

        }
        }
        else{
            switch(weather_data.weather[0].main){
                case 'Clouds':
                    weather_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/cloudy.svg";
                    break;
                case 'Clear':
                    weather_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/clear-night.svg";
                    break;
                case 'Rain':
                    weather_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/partly-cloudy-night-rain.svg";
                    break;
                case 'Mist':
                    weather_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/mist.svg";
                    break;
                case 'Snow':
                    weather_img.src = "https://basmilius.github.io/weather-icons/production/fill/all/snow.svg";
                    break;
    
            }

        }
      


    console.log(weather_data);
}

checkWeather("Deoria");
searchBtn.addEventListener('click', ()=>{
    // if(!inputBox.value){

    // }else{
        checkWeather(inputBox.value);

    // }
});

