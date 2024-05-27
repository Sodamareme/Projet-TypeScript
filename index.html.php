<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <title>Gestion des Cargaisons</title>
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      color: #333;
    }
    .hero-bg {
      background-image: radial-gradient(circle at center, #7f00ff, #e100ff);
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .nav-bg {
      background-color: #1a1a1a;
    }
    .btn-primary {
      background-color: #ff5722;
      color: white;
    }
    .btn-primary:hover {
      background-color: #f4511e;
    }
    .service-card {
      background-color: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }
    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    .service-img {
      height: 200px;
      background-size: cover;
      background-position: center;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  </style>
</head>
<body class="bg-gray-100">
  <nav class="nav-bg p-4 text-white">
    <div class="container mx-auto flex justify-between items-center">
    <img src="../img/logo1.png" alt="" class="w-20">
      <h1 class="text-2xl font-bold">GP du Monde</h1>
      <div>
        <a href="#" class="text-white hover:text-gray-200 mx-2">Accueil</a>
        <a href="#" class="text-white hover:text-gray-200 mx-2">Services</a>
        <a href="#" class="text-white hover:text-gray-200 mx-2">Contact</a>
      </div>
    </div>
  </nav>
  <header class="hero-bg text-white bg-cover bg-center bg-no-repeat" style="background-image: url('../img/img3.jpg');">
 
    <div>
      <h2 class="text-3xl font-bold mb-4">Bienvenue sur GP du Monde</h2>
      <p class="text-xl mb-6">Votre solution de gestion de cargaisons mondiale</p>
      <a href="#services" class="btn-primary py-2 px-4 rounded">Découvrir nos services</a>
    </div>
  </header>
  <div id="services" class="container mx-auto mt-10">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-gray-800">Nos Services</h2>
      <p class="mt-2 text-gray-600">Découvrez nos services de gestion et de suivi de cargaisons.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <a href="../gestion-cargaisons.html.php" class="service-card p-6 text-center">
        <div class="service-img mb-4 rounded-t" style="background-image: url('../img/img2.jpg');"></div>
        <h3 class="text-xl font-bold text-gray-800">Gérer les Cargaisons</h3>
        <p class="mt-2 text-gray-600">Créez et gérez vos cargaisons facilement.</p>
      </a>
      <a href="../estion-colis.html.php" class="service-card p-6 text-center">
        <div class="service-img mb-4 rounded-t" style="background-image: url('../img/img6.jpg');"></div>
        <h3 class="text-xl font-bold text-gray-800">Gérer les Colis</h3>
        <p class="mt-2 text-gray-600">Enregistrez et suivez les colis de vos clients.</p>
      </a>
      <a href="../suivi-colis.html.php" class="service-card p-6 text-center">
        <div class="service-img mb-4 rounded-t" style="background-image: url('../img/img5.jpg');"></div>
        <h3 class="text-xl font-bold text-gray-800">Suivi des Colis</h3>
        <p class="mt-2 text-gray-600">Suivez l'état d'avancement de vos colis.</p>
      </a>
    </div>
  </div>
  <script src="../dist/app-bundle.js"></script>
</body>
</html>
