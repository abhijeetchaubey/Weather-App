// const apiKey="9cd138181e1f3af60f6077118f3c8c2c";
const searchBox=document.querySelector('#city-input')
const searchButton=document.querySelector('#search-button')
const apiUrl="https://api.openweathermap.org/data/2.5/weather?appid=9cd138181e1f3af60f6077118f3c8c2c&units=metric&q="
const changeWeather=document.querySelector('.weather-icon')

async function checkWeather(city){
    try{
        const response =await fetch(apiUrl + city);
        let data = await response.json();
        console.log(data);
    
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity-percent").innerHTML=`${data.main.humidity}%`;
        document.querySelector(".wind-speed").innerHTML=`${data.wind.speed} km/hr`;
    
        if(data.weather[0].main=="Clouds"){
            changeWeather.src="images/clouds.png"
        }
        else if(data.weather[0].main=="Clear"){
            changeWeather.src="images/clear.png"
        }
        else if(data.weather[0].main=="Rain"){
            changeWeather.src="images/Rain.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            changeWeather.src="images/drizzle.png"
        }
        else if(data.weather[0].main=="Mist"){
            changeWeather.src="images/mist.png"
        }

    document.querySelector('.weather').style.opacity=1;
    }catch(error){
        console.log("Failed to fetch weather data")
        alert("failed to fetch Weather data. please try again")
    }
    
    
}   

searchButton.addEventListener('click',(e)=>{
    checkWeather(searchBox.value)


})