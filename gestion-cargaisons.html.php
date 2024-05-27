<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <title>Gestion des Cargaisons</title>
</head>
<body class="bg-gray-100">
  <nav class="bg-blue-800 text-white ">
    <div class="container">
      <img src="../img/logo1.png" alt="" class="w-20">
      <h1 class="text-2xl font-bold mx-auto">GP du Monde - Gestion des Cargaisons</h1>
    </div>
  </nav>
  <div class="container mx-auto mt-10">
    <h2 class="text-2xl font-bold mb-6">Gérer les Cargaisons</h2>
    <form class="bg-white p-6 rounded shadow-md" id="cargoForm">
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="numero">Numéro de Cargaison</label>
        <input class="w-full p-2 border border-gray-300 rounded" type="text" id="numero" name="numero" readonly>
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
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="Ldepart">Lieu de Départ</label>
        <input class="w-full p-2 border border-gray-300 rounded" type="text" id="Ldepart" name="Ldepart">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="Larrivee">Lieu d'Arrivée</label>
        <input class="w-full p-2 border border-gray-300 rounded" type="text" id="Larrivee" name="Larrivee">
      </div>
      <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Créer Cargaison</button>
    </form>
    
    <!-- Ajout des champs de filtre -->
    <div class="mb-4 flex">
      <input id="searchNumero" class="w-full p-2 border border-gray-300 rounded mr-2" type="text" placeholder="Rechercher par numéro de cargaison">
      <input id="searchPoidsMax" class="w-full p-2 border border-gray-300 rounded mr-2" type="number" placeholder="Rechercher par poids maximum">
      <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onclick="filterTable()">Rechercher</button>
    </div>
    
    <table class="table-auto w-full mt-10 bg-white rounded shadow-md">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2 border">Numéro</th>
          <th class="px-4 py-2 border">Type</th>
          <th class="px-4 py-2 border">Poids Maximum</th>
          <th class="px-4 py-2 border">Distance</th>
          <th class="px-4 py-2 border">Date de Départ</th>
          <th class="px-4 py-2 border">Date d'Arrivée</th>
          <th class="px-4 py-2 border">Lieu de Départ</th>
          <th class="px-4 py-2 border">Lieu d'Arrivée</th>
        </tr>
      </thead>
      <tbody id="cargoTableBody">
      </tbody>
    </table>
  </div>
  <div class="flex justify-center mt-4">
    <button id="prevBtn" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mx-2" onclick="prevPage()">Précédent</button>
    <button id="nextBtn" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mx-2" onclick="nextPage()">Suivant</button>
  </div>
  
  <script>
    //valide form
    function validateForm() {
  let isValid = true;

  // Reset error messages
  document.querySelectorAll('.error-message').forEach((msg) => msg.remove());

  // Validate each input
  const numero = document.getElementById('numero');
  const type = document.getElementById('type');
  const poidsMax = document.getElementById('poidsMax');
  const depart = document.getElementById('depart');
  const arrivee = document.getElementById('arrivee');
  const Ldepart = document.getElementById('Ldepart');
  const Larrivee = document.getElementById('Larrivee');

  if (!numero.value.trim()) {
    isValid = false;
    addErrorMessage(numero, 'Numéro de Cargaison est requis');
  }

  if (type.value === '') {
    isValid = false;
    addErrorMessage(type, 'Type de Cargaison est requis');
  }

  if (!poidsMax.value.trim()) {
    isValid = false;
    addErrorMessage(poidsMax, 'Poids Maximum est requis');
  }

  if (!depart.value.trim()) {
    isValid = false;
    addErrorMessage(depart, 'Date de Départ est requise');
  }

  if (!arrivee.value.trim()) {
    isValid = false;
    addErrorMessage(arrivee, 'Date d\'Arrivée est requise');
  }

  if (!Ldepart.value.trim()) {
    isValid = false;
    addErrorMessage(Ldepart, 'Lieu de Départ est requis');
  }

  if (!Larrivee.value.trim()) {
    isValid = false;
    addErrorMessage(Larrivee, 'Lieu d\'Arrivée est requis');
  }

  return isValid;
}

function addErrorMessage(input, message) {
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('text-red-500', 'text-sm', 'mt-1', 'error-message');
  errorMessage.textContent = message;
  input.parentNode.appendChild(errorMessage);
}

document.getElementById('cargoForm').addEventListener('submit', function (e) {
  if (!validateForm()) {
    e.preventDefault();
  }
});
//pagination
     let currentPage = localStorage.getItem('currentPage') ? parseInt(localStorage.getItem('currentPage')) : 1;
    const rowsPerPage = 5;

    function displayPage(page) {
      const table = document.getElementById('cargoTableBody');
      const rows = table.getElementsByTagName('tr');
      const totalRows = rows.length;
      const totalPages = Math.ceil(totalRows / rowsPerPage);

      for (let i = 0; i < totalRows; i++) {
        rows[i].style.display = 'none';
      }

      const start = (page - 1) * rowsPerPage;
      const end = Math.min(start + rowsPerPage, totalRows);

      for (let i = start; i < end; i++) {
        rows[i].style.display = '';
      }

      document.getElementById('prevBtn').disabled = page === 1;
      document.getElementById('nextBtn').disabled = page === totalPages;

      localStorage.setItem('currentPage', page);
    }

    function prevPage() {
      if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
      }
    }

    function nextPage() {
      const table = document.getElementById('cargoTableBody');
      const rows = table.getElementsByTagName('tr');
      const totalPages = Math.ceil(rows.length / rowsPerPage);

      if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
      }
    }

    function filterTable() {
      const numero = document.getElementById('searchNumero').value.toLowerCase();
      const poidsMax = parseFloat(document.getElementById('searchPoidsMax').value);
      const table = document.getElementById('cargoTableBody');
      const rows = table.getElementsByTagName('tr');

      for (let i = 0; i < rows.length; i++) {
        const numeroCell = rows[i].getElementsByTagName('td')[0];
        const poidsMaxCell = rows[i].getElementsByTagName('td')[2];

        if (numeroCell && poidsMaxCell) {
          const numeroText = numeroCell.textContent || numeroCell.innerText;
          const poidsMaxText = parseFloat(poidsMaxCell.textContent || poidsMaxCell.innerText);

          let showRow = true;

          if (numero && !numeroText.toLowerCase().includes(numero)) {
            showRow = false;
          }

          if (!isNaN(poidsMax) && poidsMaxText > poidsMax) {
            showRow = false;
          }

          rows[i].style.display = showRow ? '' : 'none';
        }
      }

      currentPage = 1;
      displayPage(currentPage);
    }

    document.addEventListener('DOMContentLoaded', () => {
      displayPage(currentPage);
    });

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

        document.getElementById("distance").value = (distance / 1000).toFixed(2);
      }
    }
  </script>
  
  <!-- Ensure you include the `libraries=geometry` parameter when loading the Google Maps API -->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRrqXXbqLwynEtM5_BexPn_7_wV4v9tUg&libraries=geometry&callback=initMap" async defer></script>
  <script src="../dist/genererNum.js"></script>
  <script src="../dist/ajoutCargo.js"></script>
</body>
</html>
