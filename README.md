## Weather Forecast App
A clean, responsive web application that displays real-time weather details and dates for cities around the world using the OpenWeather API.
## 🚀 Features

* Real-Time Search: Get instant weather data by typing any city name.
* Atmospheric Details: Displays wind speed (converted to km/h), humidity percentage, and atmospheric pressure.
* Dynamic Weather Icons: Pulls and displays the correct crisp weather graphic directly from the API response.
* Time Zone Accuracy: Converts raw Unix timestamps (dt) into human-readable local days, dates, and years without timezone shifting bugs.

## 🛠️ Tech Stack

* HTML5 - Structure and layout
* CSS3 - Custom styling and design
* Vanilla JavaScript (ES6+) - Async/Await Fetch API, DOM manipulation, and native Date objects
* OpenWeather API - Weather data source

## 📦 API Reference
This project utilizes the OpenWeather Forecast endpoint:

https://openweathermap.org{city}&appid={apiKey}&units=metric

## Key Data Traversal Learned:

* Weather Icons: data.list[0].weather[0].icon
* Target Time: data.list[0].dt
* City Meta: data.city.name and data.city.country

## 📝 What I Learned

* Navigating complex nested JSON payloads and arrays.
* Handling native browser Date constructors and formatting options like toLocaleString() with explicit UTC locking.
* Keeping code modular by separating data fetching from visual UI rendering functions.

------------------------------
Feel free to fork this project, open issues, or submit pull requests!

