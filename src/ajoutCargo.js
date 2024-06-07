"use strict";
(() => {
    const cargoForm = document.getElementById('cargoForm');
    const cargoTableBody = document.getElementById('cargoTableBody');
    const addButton = document.getElementById('addButton');
    const saveToLocalStorage = (cargos) => {
        localStorage.setItem('cargos', JSON.stringify(cargos));
    };
    const loadFromLocalStorage = () => {
        const cargosJSON = localStorage.getItem('cargos');
        return cargosJSON ? JSON.parse(cargosJSON) : [];
    };
    const displayCargos = (cargos) => {
        cargoTableBody.innerHTML = '';
        cargos.forEach((cargo, index) => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td class="border px-4 py-2">${cargo.numero}</td>
                <td class="border px-4 py-2">${cargo.type}</td>
                <td class="border px-4 py-2">${cargo.poidsMax}</td>
                <td class="border px-4 py-2">${cargo.distance}</td>
                <td class="border px-4 py-2">${cargo.depart}</td>
                <td class="border px-4 py-2">${cargo.arrivee}</td>
                <td class="border px-4 py-2">${cargo.Ldepart}</td>
                <td class="border px-4 py-2">${cargo.Larrivee}</td>
                <td class="border px-4 py-2"><button class="btn-delete bg-red-500 text-white px-2 py-1 rounded" data-index="${index}">Supprimer</button></td>
                <td class="border px-4 py-2"><button class="btn-details bg-blue-500 text-white px-2 py-1 rounded" data-index="${index}">Détails</button></td>
                <td class="border px-4 py-2"><button class="btn-add-product bg-green-500 text-white px-2 py-1 rounded" data-index="${index}">Ajouter Produit</button></td>
            `;
            cargoTableBody.appendChild(newRow);
        });
    };
    const cargos = loadFromLocalStorage();
    displayCargos(cargos);
    cargoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const numero = document.getElementById('numero').value;
        const type = document.getElementById('type').value;
        const poidsMax = document.getElementById('poidsMax').value;
        const distance = document.getElementById('distance').value;
        const depart = document.getElementById('depart').value;
        const arrivee = document.getElementById('arrivee').value;
        const Ldepart = document.getElementById('Ldepart').value;
        const Larrivee = document.getElementById('Larrivee').value;
        const newCargo = { numero, type, poidsMax, distance, depart, arrivee, Ldepart, Larrivee };
        cargos.push(newCargo);
        saveToLocalStorage(cargos);
        displayCargos(cargos);
        cargoForm.reset();
    });
    cargoTableBody.addEventListener('click', (event) => {
        if (event.target instanceof HTMLButtonElement) {
            const targetButton = event.target;
            const cargoIndex = parseInt(targetButton.getAttribute('data-index') || '0', 10);
            if (targetButton.classList.contains('btn-delete')) {
                cargos.splice(cargoIndex, 1);
                saveToLocalStorage(cargos);
                displayCargos(cargos);
            }
            else if (targetButton.classList.contains('btn-details')) {
                alert(`Détails de la cargaison : ${JSON.stringify(cargos[cargoIndex])}`);
            }
            else if (targetButton.classList.contains('btn-add-product')) {
                // Logique pour ajouter un produit à la cargaison
                const cargo = cargos[cargoIndex];
                alert(`Ajouter un produit à la cargaison ${cargo.numero}`);
            }
        }
    });
})();
