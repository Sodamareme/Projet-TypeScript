"use strict";
const text = 'Hello TypeScript';
console.log(text);
document.addEventListener('DOMContentLoaded', () => {
    const cargoForm = document.getElementById('cargoForm');
    const cargoTableBody = document.getElementById('cargoTableBody');
    // Fonction pour sauvegarder les données dans Local Storage
    const saveToLocalStorage = (cargos) => {
        localStorage.setItem('cargos', JSON.stringify(cargos));
    };
    // Fonction pour charger les données depuis Local Storage
    const loadFromLocalStorage = () => {
        const cargos = localStorage.getItem('cargos');
        return cargos ? JSON.parse(cargos) : [];
    };
    // Fonction pour afficher les données dans le tableau
    const displayCargos = (cargos) => {
        cargoTableBody.innerHTML = '';
        cargos.forEach(cargo => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td class="border px-4 py-2">${cargo.numero}</td>
                <td class="border px-4 py-2">${cargo.type}</td>
                <td class="border px-4 py-2">${cargo.poidsMax}</td>
                <td class="border px-4 py-2">${cargo.distance}</td>
                <td class="border px-4 py-2">${cargo.depart}</td>
                <td class="border px-4 py-2">${cargo.arrivee}</td>
            `;
            cargoTableBody.appendChild(newRow);
        });
    };
    // Charger et afficher les cargaisons au chargement de la page
    const cargos = loadFromLocalStorage();
    displayCargos(cargos);
    cargoForm.addEventListener('submit', event => {
        event.preventDefault();
        // Récupérer les valeurs des champs du formulaire
        const numero = document.getElementById('numero').value;
        const type = document.getElementById('type').value;
        const poidsMax = document.getElementById('poidsMax').value;
        const distance = document.getElementById('distance').value;
        const depart = document.getElementById('depart').value;
        const arrivee = document.getElementById('arrivee').value;
        // Créer une nouvelle cargaison
        const newCargo = { numero, type, poidsMax, distance, depart, arrivee };
        // Ajouter la nouvelle cargaison aux cargaisons existantes
        cargos.push(newCargo);
        // Sauvegarder les cargaisons dans Local Storage
        saveToLocalStorage(cargos);
        // Afficher les cargaisons mises à jour
        displayCargos(cargos);
        // Réinitialiser le formulaire
        cargoForm.reset();
    });
});
