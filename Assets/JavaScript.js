/* TomTom API key = ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6 */
var positionBtn = $('#locationBtn')
tt.setProductInfo('A.D.B.L.O.W.', '69')



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

$(positionBtn).on("click", getLocation);

$(positionBtn).on("click", console.log('click'));