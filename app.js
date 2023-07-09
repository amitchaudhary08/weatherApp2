const Api_key = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

// const Img_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async (city)=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric` 
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);
    return showWeather(data)
    
}

const showWeather = (data)=>{
    if(data.cod == "404"){
        weather.innerHTML = `<h2>City Not Found</h2>`
        return;
    }
weather.innerHTML = `   
            <div>
               <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="error image">
            </div>
            <div>
               <h2>${data.main.temp} ℃</h2>
               <h4>${data.weather[0].main}</h4>
            </div>
            <div>
               <h2>  Humidity ${data.main.humidity}</h2>
            </div>
            <div>
            <h2>${data.name}</h2>
         </div>
            `
}


form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)