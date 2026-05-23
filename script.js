const getLocation = document.getElementById("get-location")
const cityInput = document.getElementById("cityInput")
const tempEL = document.getElementById("temp")

const humidityEl = document.getElementById("humidity")
const windEl = document.getElementById("wind")
const pressureEl =document.getElementById("pressure")

// tempEL.textContent = Math.round(data.main.temp) + "°C"

async function getWeather(city) {
    const apiKey = "f508ef6eb2edffd32c0961f9392632a8"
    const url = 
    
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    const response = await fetch(url)
    const data = await response.json()
    return data
}

 getLocation.addEventListener("click" , async function() {
    const city = cityInput.value
    const data = await getWeather(city)
     console.log(data)
    aboutAtmosphere(data.wind.speed, data.main.humidity, data.main.pressure)
})

function aboutAtmosphere(wind, humidity, pressure) {
    humidityEl.innerHTML = 
    `<h2 class="info-el">HUMIDITY</h2>
      <p class="info-el">${humidity}%</p>`
    
    windEl.innerHTML = 
    ` <h2 class="info-el">WIND</h2>
     <p class="info-el">${Math.floor(wind * 3.6)} km/h</p>`

    pressureEl.innerHTML = 
    `<h2 class="info-el">PRESSURE</h2>
      <p class="info-el"> ${pressure} hPa</p>`
}


