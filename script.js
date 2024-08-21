let getLocationButton = document.getElementById("get-location-button");
let latitudeValue = document.getElementById("latitude-value");
let longitudeValue = document.getElementById("longitude-value");

getLocationButton.addEventListener("click", () => {
  //   Finding the location
  window.navigator.geolocation.getCurrentPosition((data) => {
      const latitude = data.coords.latitude;
      const longitude = data.coords.longitude;
      console.log("Latitude: ", latitude)
      console.log("Longitude: ", longitude)
      latitudeValue.textContent = latitude;
      longitudeValue.textContent = longitude
    });
    
});
