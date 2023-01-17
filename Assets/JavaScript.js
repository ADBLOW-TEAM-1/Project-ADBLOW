/* TomTom API key = ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6 */
var locationButton = document.querySelector("button");



$(locationButton).on("click", getLocation);
    console.log("location");
  function getLocation() {
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

  function waitForElement() {
    if(typeof longitude !== "undefined"){
      fetch ('https://api.tomtom.com/map/1/staticimage?key=ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6&center=' + longitude + ',' + latitude + '&layer=basic&style=night&zoom=12&width=1024&height=1024')
          .then (res=>{$('#mapImg').attr('src', res.url)})
    
      } else {
          setTimeout(waitForElement, 250);
    }
  }
  
  waitForElement(console.log("api"));

  var map = tt.map({
    key: "ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6",
    container: "map",
    center: [-96.9882686, 32.9627285],
    zoom: 12,
      map: "basic_main",
      trafficIncidents: "vectorTilesFlow"



  });