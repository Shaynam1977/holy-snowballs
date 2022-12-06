let weather = {
    "apiKey": "bc4d5e3c335272b5bc6e3b84eb03109b",
    fetchWeather: function() {
        fetch(
            "https//api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + appKey;
        )
        .then((responce) => responce.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        console.log(name, icon,description,temp,humidity,speed);
        document.querySelector("city").innerText ="Weather in" + name;
        document.querySelector("icon").src = 
        "https://openweathermap.org/img/wn/" + icon + "png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + " °C";
        document.querySelector("humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector("wind").innerText = "wind speed: " + speed + "km/h";
    }
};