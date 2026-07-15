const map = L.map("map").setView([coordinates.lat, coordinates.lng], 19);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const redIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
L.marker([coordinates.lat, coordinates.lng], {
  icon: redIcon,
})
  .addTo(map)
  .bindPopup(
    `
    <h4>${listingTitle}</h4>
    <p>Exact location will be provided after booking.</p>
  `,
  )
  .openPopup();
