let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 28.70, lng: 77.102 },
    zoom: 12,
  });
  new google.maps.Marker({
    position:{ lat: 28.70, lng: 77.102 },
    map:map,
    label:"A",
    draggable: false,
    animation:google.maps.Animation.Drop,
    

  })
}

