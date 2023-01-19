/* TomTom API key = ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6 */
var locationButton = $("#locationBtn");
tt.setProductInfo('A.D.B.L.O.W.', '69');



function waitForElement(){
  waitForElement()
  if(typeof longitude !== "undefined"){
    fetch ('https://api.tomtom.com/map/1/staticimage?key=ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6&center=' + longitude + ',' + latitude + '&layer=basic&style=night&zoom=12&width=1024&height=1024')
    .then (res=>{$('#mapImg').attr('src', res.url)})
  }
  else{
      setTimeout(waitForElement, 250);
  }
};
    
function getLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
    globalThis.latitude = position.coords.latitude
    globalThis.longitude = position.coords.longitude
  getWeather(position.coords.latitude, position.coords.longitude )
    var map = tt.map({
      key: "ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6",
      container: "map",
      center: [longitude, latitude],
      zoom: 11,
      interactive: false,
      style: {
        map: 'basic_main',
        trafficIncidents: 'incidents_day',
        trafficFlow: 'flow_relative'
      },
      stylesVisibility: {
        trafficFlow: true,
        trafficIncidents: true,
        map: true
      }
    })
    });
     } else {
        console.log("Geolocation is not available.");
    }
};

$(locationButton).on("click", getLocation);



function getWeather(lat, lon) {
  var apiPath = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9245a40f3fa9510a8e08caac843d31d3&units=imperial`;
    fetch(apiPath).then((res) => {
        return res.json()
    }).then((json) => {
        console.log(json);
        document.querySelector("#city-name").innerHTML = json.name;
        document.querySelector("#temp").innerHTML = json.main.temp;
        document.querySelector("#weather").innerHTML = json.weather[0].description;
        document.querySelector("#wind").innerHTML = json.wind.speed;
    }).catch((err) => {
        console.log(err.message);
    })


};

// function getData(value) {
//   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9245a40f3fa9510a8e08caac843d31d3&units=imperial`)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (weather) {
//     document.querySelector("#city").innerHTML = weather.name;
//   })
//   .catch(function (err) {
//       console.log(err);
//   });

// }


