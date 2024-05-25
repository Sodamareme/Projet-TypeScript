<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../../dist/styles.css" rel="stylesheet">
  <title>Gestion des Colis</title>
</head>
<body class="bg-gray-100">
  <nav class="bg-blue-600 p-4 text-white">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold">GP du Monde - Gestion des Colis</h1>
    </div>
  </nav>
  <div class="container mx-auto mt-10">
    <h2 class="text-2xl font-bold mb-6">Gérer les Colis</h2>
    <form class="bg-white p-6 rounded shadow-md">
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="code">Code de Colis</label>
        <input class="w-full p-2 border border-gray-300 rounded" type="text" id="code" name="code">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="poids">Poids</label>
        <input class="w-full p-2 border border-gray-300 rounded" type="number" id="poids" name="poids">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="typeProduit">Type de Produit</label>
        <select class="w-full p-2 border border-gray-300 rounded" id="typeProduit" name="typeProduit">
          <option value="alimentaire">Alimentaire</option>
          <option value="chimique">Chimique</option>
          <option value="materiel">Matériel</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2" for="typeCargaison">Type de Cargaison</label>
        <select class="w-full p-2 border border-gray-300 rounded" id="typeCargaison" name="typeCargaison">
          <option value="maritime">Maritime</option>
          <option value="aerienne">Aérienne</option>
          <option value="routiere">Routière</option>
        </select>
      </div>
      <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Enregistrer Colis</button>
    </form>
  </div>
  <script src="../dist/app-bundle.js"></script>
</body>
</html>
