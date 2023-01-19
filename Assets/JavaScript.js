var positionBtn = $('#locationBtn')
var longitude, latitude
var longitudeCornerOne;
var latitudeCornerOne;
var longitudeCornerTwo;
var latitudeCornerTwo;
var boundingBox
var coords = []
var details = []
tt.setProductInfo('A.D.B.L.O.W.', '69')
var API_KEY = "XlWteFUoMvEhiuGSPAtjft4NclNDtTwa"

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

    getWeather(position.coords.latitude, position.coords.longitude)
    getBoundingBox(position.coords.longitude, position.coords.latitude)

    latitude = position.coords.latitude
    longitude = position.coords.longitude
  });
  } else {
        console.log("Geolocation is not available.");
  }
};

function setMap(coords) {
  var map = tt.map({
    key: "ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6",
    container: "map",
    center: [longitude, latitude],
    zoom: 11,
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
  var marker = new tt.Marker({isDraggable: false, color: '#0000FF'})
  .setLngLat([longitude, latitude])
  .addTo(map)
  console.log(coords)
  console.log(details)
  for (var i = 0; i < coords.length; i++){
    var trafficMarkers = new tt.Popup()
    .setText(details[i].description + ' at ' + details[i].from + ' to ' + details[i].to)
    .setLngLat(coords[i].coords)
    .addTo(map)
  }
}

function getWeather(lat, lon) {
  var apiPath = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9245a40f3fa9510a8e08caac843d31d3&units=imperial`;
    fetch(apiPath).then((res) => {
        return res.json()
    }).then((json) => {
        document.querySelector("#city-name").innerHTML = 'City: ' + json.name;
        document.querySelector("#temp").innerHTML = 'Temperature: ' + json.main.temp + '\xB0';
        document.querySelector("#weather").innerHTML = 'Weather: ' + json.weather[0].description;
        document.querySelector("#wind").innerHTML = 'Wind Speed: ' + json.wind.speed + ' MPH';
    }).catch((err) => {
        console.log(err.message);
    })
};

function getBoundingBox(longitude, latitude) {

  longitudeCornerOne = longitude - .14
  latitudeCornerOne = latitude - .22 
  longitudeCornerTwo = longitude + .14
  latitudeCornerTwo = latitude + .22 
      
  boundingBox = [longitudeCornerOne,latitudeCornerOne,longitudeCornerTwo, latitudeCornerTwo]
        
  fetch(`https://api.tomtom.com/traffic/services/5/incidentDetails?key=${API_KEY}&bbox=${boundingBox}&fields={incidents{type,geometry{type,coordinates},properties{iconCategory,magnitudeOfDelay,events{description,code},from,to,probabilityOfOccurrence}}}&language=en-US`)
  .then(response => response.json())
  .then(response => {
  getTrafficData(response)
  })
}

$(positionBtn).on("click", getLocation);

function getTrafficData (response) {
  for (var i = 0; i < response.incidents.length; i++) {
    var trafficData = response.incidents[i].properties
    var cords = response.incidents[i].geometry

    coords.push({
      coords: cords.coordinates[0]
    })

    details.push({
      description: trafficData.events[0].description,
      from: trafficData.from,
      to: trafficData.to,
      probability: trafficData.probabilityOfOccurrence
    })
  }
  setMap(coords, details)
}
