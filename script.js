const getLocation = document.getElementById("get-location")
const cityInput = document.getElementById("cityInput")

const humidityEl = document.getElementById("humidity")
const windEl = document.getElementById("wind")
const pressureEl = document.getElementById("pressure")

const weatherIcon = document.getElementById("weather-icon")
const tempEL = document.getElementById("temp")
const desc = document.getElementById("desc")

const locationEl = document.getElementById("location")
const dayEl =  document.getElementById("day")
const dateEl = document.getElementById("date")

const todayEl = document.getElementById("today")
const tmrEl = document.getElementById("tmr")
const thirddyEl = document.getElementById("thirddy")
const forthdyEl = document.getElementById("forthdy")

async function getWeatherArray(city) {
  const apiKey = "f508ef6eb2edffd32c0961f9392632a8"
  const url =

    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`

  const response = await fetch(url)
  const data = await response.json()
  return data
}

getLocation.addEventListener("click", async function () {
  const city = cityInput.value
  const data = await getWeatherArray(city)
  console.log(data)

  aboutAtmosphere(data.list[0].wind.speed, data.list[0].main.humidity, data.list[0].main.pressure)
  getDemographicInfo(data.city.name, data.city.country, data.list[0].dt)
  getWeather(data.list[0].weather[0].icon, data.list[0].main.temp, data.list[0].weather[0].description)
  forecast(data)
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
      <p class="info-el"> ${pressure} hPa</p>
        `
}

function getDemographicInfo(city, country, timestamp) {
  locationEl.innerHTML = `
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M9.96875 13.75C9.96875 10.1429 12.8929 7.21875 16.5 7.21875C20.1071 7.21875 23.0313 10.1429 23.0313 13.75C23.0313 17.3571 20.1071 20.2812 16.5 20.2812C12.8929 20.2812 9.96875 17.3571 9.96875 13.75ZM16.5 9.28125C14.032 9.28125 12.0313 11.282 12.0313 13.75C12.0313 16.218 14.032 18.2188 16.5 18.2188C18.968 18.2188 20.9688 16.218 20.9688 13.75C20.9688 11.282 18.968 9.28125 16.5 9.28125Z"
        fill="white" />
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M4.846 12.1782C5.3332 6.26758 10.2724 1.71875 16.203 1.71875H16.797C22.7276 1.71875 27.6668 6.26758 28.154 12.1782C28.4157 15.3532 27.435 18.506 25.4183 20.9723L18.8278 29.0322C17.6247 30.5036 15.3753 30.5036 14.1722 29.0322L7.5817 20.9723C5.56505 18.506 4.58429 15.3532 4.846 12.1782ZM16.203 3.78125C11.3458 3.78125 7.30055 7.50678 6.90153 12.3476C6.68371 14.9901 7.49997 17.6141 9.17838 19.6667L15.7688 27.7267C16.1467 28.1888 16.8533 28.1888 17.2312 27.7267L23.8216 19.6667C25.5 17.6141 26.3163 14.9901 26.0985 12.3476C25.6995 7.50678 21.6542 3.78125 16.797 3.78125H16.203Z"
        fill="white" />
    </svg> 
    <span>${city}, ${country}</span>`
    
    const dateObject = new Date(timestamp  * 1000) 
    const date = dateObject.toLocaleString("en-US" , {date: "numeric"})

    dayEl.textContent = dateObject.toLocaleString("en-US",  { weekday: "long"})
    dateEl.textContent = date 

}

function getWeather(code, temp, descrption) {
  weatherIcon.src = `https://openweathermap.org/img/wn/${code}@2x.png`

  tempEL.textContent = Math.round(temp) + "°C"

  desc.textContent = descrption
}

function forecast(data) {
  const dateObject0 = new Date(data.list[0].dt  * 1000) 
  const dateObject1 = new Date(data.list[8].dt  * 1000) 
  const dateObject2 = new Date(data.list[16].dt  * 1000) 
  const dateObject3 = new Date(data.list[24].dt  * 1000)

   src0 = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
   src1 = `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`
   src2 = `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`
   src3 = `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`

  todayEl.innerHTML = 
  `
      <img src="${src0}" alt="weather-icon">
       <p id="weekday">${dateObject0.toLocaleString("en-US",  { weekday: "short"})}</p>
       <h2> ${Math.round(data.list[0].main.temp)}°C</h2>
  `
  tmrEl.innerHTML = 
  `
      <img src="${src1}" alt="weather-icon">
       <p id="weekday">${dateObject1.toLocaleString("en-US",  { weekday: "short"})}</p>
       <h2> ${Math.round(data.list[1].main.temp)}°C</h2>
  `
  thirddyEl.innerHTML = 
  `
      <img src="${src2}" alt="weather-icon">
       <p id="weekday">${dateObject2.toLocaleString("en-US",  { weekday: "short"})}</p>
       <h2> ${Math.round(data.list[2].main.temp)}°C</h2>
  `
  forthdyEl.innerHTML = 
  `
      <img src="${src3}" alt="weather-icon">
       <p id="weekday">${dateObject3.toLocaleString("en-US",  { weekday: "short"})}</p>
       <h2> ${Math.round(data.list[3].main.temp)}°C</h2>
  `

}