<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <title>Gestion des Cargaisons</title>
</head>
<body class="bg-gray-100">
  <nav class="bg-blue-600 p-4 text-white">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold">GP du Monde - Gestion des Cargaisons</h1>
    </div>
  </nav>
  <div class="container mx-auto mt-10">
    <h2 class="text-2xl font-bold mb-6">Gérer les Cargaisons</h2>
    <form class="bg-white p-6 rounded shadow-md" id="cargoForm">
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="numero">Numéro de Cargaison</label>
        <p id="numeroCargaison" class="p-2 border border-gray-300 rounded"></p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="type">Type de Cargaison</label>
        <select class="w-full p-2 border border-gray-300 rounded" id="type" name="type">
          <option value="maritime">Maritime</option>
          <option value="aerienne">Aérienne</option>
          <option value="routiere">Routière</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="poidsMax">Poids Maximum</label>
        <input class="w-full p-2 border border-gray-300 rounded" type="number" id="poidsMax" name="poidsMax">
      </div>
      <div id="map" style="height: 400px;" class="mb-4"></div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="distance">Distance (km)</label>
        <input class="w-full p-2 border border-gray-300 rounded" type="number" id="distance" name="distance" readonly>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="depart">Date de Départ</label>
        <input class="w-full p-2 border border-gray-300 rounded" type="date" id="depart" name="depart">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="arrivee">Date d'Arrivée</label>
        <input class="w-full p-2 border border-gray-300 rounded" type="date" id="arrivee" name="arrivee">
      </div>
      <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Créer Cargaison</button>
    </form>
    <table class="table-auto w-full mt-10 bg-white rounded shadow-md">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2 border">Numéro</th>
          <th class="px-4 py-2 border">Type</th>
          <th class="px-4 py-2 border">Poids Maximum</th>
          <th class="px-4 py-2 border">Distance</th>
          <th class="px-4 py-2 border">Lieu de Départ</th>
          <th class="px-4 py-2 border">Lieu d'Arrivée</th>
        </tr>
      </thead>
      <tbody id="cargoTableBody">
        <!-- Les lignes de données seront insérées ici -->
      </tbody>
    </table>
  </div>
  <script>
    let map;
    let marker1;
    let marker2;

    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 3,
      });

      map.addListener("click", function (e) {
        if (!marker1) {
          marker1 = new google.maps.Marker({
            position: e.latLng,
            map,
            draggable: true,
          });
          marker1.addListener('dragend', updateDistance);
        } else if (!marker2) {
          marker2 = new google.maps.Marker({
            position: e.latLng,
            map,
            draggable: true,
          });
          marker2.addListener('dragend', updateDistance);

          updateDistance();
        }
      });
    }

    function updateDistance() {
      if (marker1 && marker2) {
        const distance = google.maps.geometry.spherical.computeDistanceBetween(
          marker1.getPosition(),
          marker2.getPosition()
        );

        // Converrtir la distance en km
        document.getElementById("distance").value = (distance / 1000).toFixed(2); 
      }
    }
  </script>
  <!-- Ensure you include the `libraries=geometry` parameter when loading the Google Maps API -->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRrqXXbqLwynEtM5_BexPn_7_wV4v9tUg&libraries=geometry&callback=initMap" async defer></script>
  <script src="../dist/genererMdp.js"></script>
  <script src="../dist/ajoutCargo.js"></script>
</body>
</html>
