/* TomTom API key = ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6 */
var positionBtn = $('#location-btn')
tt.setProductInfo('A.D.B.L.O.W.', '69')


<<<<<<< HEAD
<<<<<<< HEAD
// if ("geolocation" in navigator) {
//     /* geolocation is available */
//     navigator.geolocation.getCurrentPosition(function(position) {
//       console.log("Latitude: " + position.coords.latitude);
//       console.log("Longitude: " + position.coords.longitude);
//       latitude = position.coords.latitude
//       longitude = position.coords.longitude
//     });
//   } else {
//     /* geolocation IS NOT available */
//     console.log("Geolocation is not available.");
//   }

// function waitForElement(){
//   if(typeof longitude !== "undefined"){
//     fetch ('https://api.tomtom.com/map/1/staticimage?key=ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6&center=' + longitude + ',' + latitude + '&layer=basic&style=night&zoom=12&width=1024&height=1024')
//     .then (res=>{$('#mapImg').attr('src', res.url)})
//   }
//   else{
//       setTimeout(waitForElement, 250);
//   }
// }
=======
=======
>>>>>>> e55b9406b57e1f2bcf751730bc2038c566329ec3

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
<<<<<<< HEAD
>>>>>>> 35ae2e9a2ae0ce967b314e44d7a85dac88a5932d
=======
>>>>>>> e55b9406b57e1f2bcf751730bc2038c566329ec3

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