// Au chargement de la page, génère un numéro de cargaison unique et l'affiche
window.addEventListener('DOMContentLoaded', () => {
    const numeroCargaison = document.getElementById('numeroCargaison');
    if (numeroCargaison) {
      numeroCargaison.textContent = generateCargoNumber();
    }
  });
  
  // Fonction pour générer un numéro de cargaison unique (exemple simplifié)
  function generateCargoNumber(): string {
    const randomNumber: number = Math.floor(Math.random() * 10000); // Génère un nombre aléatoire entre 0 et 9999
    const currentDate: string = new Date().toISOString().slice(0, 10).replace(/-/g, ''); // Récupère la date au format AAAAMMJJ
    return `CARG${currentDate}${randomNumber}`; // Concatène "CARG" + date + nombre aléatoire
  }
  