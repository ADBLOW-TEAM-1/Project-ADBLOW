/* TomTom API key = ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6 */
var locationButton = $("#locationBtn");
tt.setProductInfo('A.D.B.L.O.W.', '69')
var apiKey = "9245a40f3fa9510a8e08caac843d31d3";
var apiPath = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apikey}`;


function waitForElement(){
  waitForElement()
  if(typeof longitude !== "undefined"){
    fetch ('https://api.tomtom.com/map/1/staticimage?key=ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6&center=' + longitude + ',' + latitude + '&layer=basic&style=night&zoom=12&width=1024&height=1024')
    .then (res=>{$('#mapImg').attr('src', res.url)})
  }
  else{
      setTimeout(waitForElement, 250);
  }
}
    
function getLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
    globalThis.latitude = position.coords.latitude
    globalThis.longitude = position.coords.longitude

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
  } 
  else {
    console.log("Geolocation is not available.");
  }
}

$(locationButton).on("click", getLocation);







function getForecast() {
    fetch(apiPath).then((res) => {
        return res.json()
    }).then((json) => {
        console.log(json);
    }).catch((err) => {
        console.log(err.message)
    })

}
getForecast(, apiKey);

