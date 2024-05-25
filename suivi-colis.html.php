<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../../dist/styles.css" rel="stylesheet">
  <title>Suivi des Colis</title>
</head>
<body class="bg-gray-100">
  <nav class="bg-blue-600 p-4 text-white">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold">GP du Monde - Suivi des Colis</h1>
    </div>
  </nav>
  <div class="container mx-auto mt-10">
    <h2 class="text-2xl font-bold mb-6">Suivi des Colis</h2>
    <form class="bg-white p-6 rounded shadow-md">
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="trackingNumber">Numéro de Suivi</label>
        <input class="w-full p-2 border border-gray-300 rounded" type="text" id="trackingNumber" name="trackingNumber">
      </div>
      <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Suivre</button>
    </form>
    <div id="trackingResult" class="mt-6 bg-white p-6 rounded shadow-md hidden">
      <h3 class="text-xl font-bold mb-4">Résultats du Suivi</h3>
      <p class="text-gray-700"><strong>État :</strong> <span id="status">En transit</span></p>
      <p class="text-gray-700"><strong>Localisation Actuelle :</strong> <span id="currentLocation">Paris, France</span></p>
      <p class="text-gray-700"><strong>Date d'Estimation de Livraison :</strong> <span id="estimatedDelivery">2024-06-01</span></p>
    </div>
  </div>
  <script>
    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();
      document.getElementById('trackingResult').classList.remove('hidden');
    });
  </script>
  <script src="../dist/app-bundle.js"></script>
</body>
</html>
