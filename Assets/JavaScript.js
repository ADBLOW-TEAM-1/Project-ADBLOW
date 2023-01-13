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
