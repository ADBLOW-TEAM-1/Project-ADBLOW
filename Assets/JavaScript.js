/* TomTom API key = ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6 */
var positionBtn = $('#location-btn')
var latitude, longitude

// ASK AARON ABOUT THE 18 API CALLS

if ("geolocation" in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude: " + position.coords.latitude);
      console.log("Longitude: " + position.coords.longitude);
      latitude = position.coords.latitude
      longitude = position.coords.longitude
    });
  } else {
    /* geolocation IS NOT available */
    console.log("Geolocation is not available.");
  }

function waitForElement(){
  if(typeof longitude !== "undefined"){
    fetch ('https://api.tomtom.com/map/1/staticimage?key=ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6&center=' + longitude + ',' + latitude + '&layer=basic&style=night&zoom=12&width=1024&height=1024')
    .then (res=>{$('#mapImg').attr('src', res.url)})
  }
  else{
      setTimeout(waitForElement, 250);
  }
}

positionBtn.on('click', waitForElement)

var locationButton = document.querySelector("button");

$(locationButton).on("click", saveLocation);
    console.log("location");
  function saveLocation() {
    /* TomTom API key = ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6 */
    if ("geolocation" in navigator) {
  /* geolocation is available */
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
    });
        } else {
        /* geolocation IS NOT available */
           console.log("Geolocation is not available.");
    }

  }

