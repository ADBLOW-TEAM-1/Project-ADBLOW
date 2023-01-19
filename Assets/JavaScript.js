/* TomTom API key = ZpKOglbBbjaHIp34XAJCbc3fMUOpTKg6 */
var positionBtn = $('#locationBtn')
var latitude, longitude;
var longitudeCornerOne;
var latitudeCornerOne;
var longitudeCornerTwo;
var latitudeCornerTwo;
var boundingBox
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
}
    
function getLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
    latitude = position.coords.latitude
    longitude = position.coords.longitude


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
    console.log(longitude,latitude)
      longitudeCornerOne = longitude - .14
      latitudeCornerOne = latitude - .22 
      longitudeCornerTwo = longitude + .14
      latitudeCornerTwo = latitude + .22 
      
        boundingBox = [longitudeCornerOne,latitudeCornerOne,longitudeCornerTwo, latitudeCornerTwo]

        console.log(boundingBox)
        
        fetch(`https://api.tomtom.com/traffic/services/5/incidentDetails?key=${API_KEY}&bbox=${boundingBox}&fields={incidents{type,geometry{type,coordinates},properties{id,iconCategory,magnitudeOfDelay,events{description,code,iconCategory},startTime,endTime,from,to,length,delay,roadNumbers,timeValidity,probabilityOfOccurrence,numberOfReports,lastReportTime,tmc{countryCode,tableNumber,tableVersion,direction,points{location,offset}}}}}&language=en-US`)
        .then(response => response.json())
        .then(response => console.log(response))
    });
  } 
  else {
    console.log("Geolocation is not available.");
  }
}

$(positionBtn).on("click", getLocation);
