/* TomTom API key = ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6 */
var locationButton = $("#locationBtn");

function waitForElement(){
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
    latitude = position.coords.latitude
    longitude = position.coords.longitude
    console.log(latitude)
    console.log(longitude)
    waitForElement()
    });
  } 
  else {
    console.log("Geolocation is not available.");
  }
}

$(locationButton).on("click", getLocation);

tt.setProductInfo('A.D.B.L.O.W.', '69')

var map = tt.map({
  key: "ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6",
  container: "map",
  center: [-114.2980608, 48.234496],
  zoom: 12,
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

