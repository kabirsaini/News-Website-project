var modal = document.getElementById("myModal");
var btn = document.getElementById("button1");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

// <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Handle form submission
document.getElementById("userInfoForm").onsubmit = function(event) {
  // Prevent form from submitting the traditional way
  event.preventDefault();
  // Display a message and close the modal
  alert("Your data has been saved");
  modal.style.display = "none";
};


const apiKey = "b1b834d10a2fb54869d5ad8d481fc7b6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "assets/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "assets/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png";
    } else if (data.weather[0].main == "assets/Drizzle") {
        weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "assets/mist.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
  if (event.keyCode === 13 || event.which === 13) { // '13' is the keycode for Enter key
      checkWeather(searchBox.value);
  }
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

