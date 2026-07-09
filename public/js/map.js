const map = L.map("map").setView([coordinates.lat, coordinates.lng], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

L.marker([coordinates.lat, coordinates.lng]).addTo(map);
