(function () {
    var cargoForm = document.getElementById('cargoForm');
    var cargoTableBody = document.getElementById('cargoTableBody');
    var saveToLocalStorage = function (cargos) {
        localStorage.setItem('cargos', JSON.stringify(cargos));
    };
    var loadFromLocalStorage = function () {
        var cargosJSON = localStorage.getItem('cargos');
        return cargosJSON ? JSON.parse(cargosJSON) : [];
    };
    var displayCargos = function (cargos) {
        cargoTableBody.innerHTML = '';
        cargos.forEach(function (cargo, index) {
            var newRow = document.createElement('tr');
            newRow.innerHTML = "\n                <td class=\"border px-4 py-2\">".concat(cargo.numero, "</td>\n                <td class=\"border px-4 py-2\">").concat(cargo.type, "</td>\n                <td class=\"border px-4 py-2\">").concat(cargo.poidsMax, "</td>\n                <td class=\"border px-4 py-2\">").concat(cargo.distance, "</td>\n                <td class=\"border px-4 py-2\">").concat(cargo.depart, "</td>\n                <td class=\"border px-4 py-2\">").concat(cargo.arrivee, "</td>\n                <td class=\"border px-4 py-2\"><button class=\"btn-delete bg-red-500 text-white px-2 py-1 rounded\" data-index=\"").concat(index, "\">Supprimer</button></td>\n                <td class=\"border px-4 py-2\"><button class=\"btn-details bg-blue-500 text-white px-2 py-1 rounded\" data-index=\"").concat(index, "\">D\u00E9tails</button></td>\n            ");
            cargoTableBody.appendChild(newRow);
        });
    };
    var cargos = loadFromLocalStorage();
    displayCargos(cargos);
    cargoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var numero = document.getElementById('numero').value;
        var type = document.getElementById('type').value;
        var poidsMax = document.getElementById('poidsMax').value;
        var distance = document.getElementById('distance').value;
        var depart = document.getElementById('depart').value;
        var arrivee = document.getElementById('arrivee').value;
        var newCargo = { numero: numero, type: type, poidsMax: poidsMax, distance: distance, depart: depart, arrivee: arrivee };
        cargos.push(newCargo);
        saveToLocalStorage(cargos);
        displayCargos(cargos);
        cargoForm.reset();
    });
    cargoTableBody.addEventListener('click', function (event) {
        if (event.target instanceof HTMLButtonElement) {
            var targetButton = event.target;
            var cargoIndex = parseInt(targetButton.getAttribute('data-index') || '0', 10);
            if (targetButton.classList.contains('btn-delete')) {
                cargos.splice(cargoIndex, 1);
                saveToLocalStorage(cargos);
                displayCargos(cargos);
            }
            else if (targetButton.classList.contains('btn-details')) {
                alert("D\u00E9tails de la cargaison : ".concat(JSON.stringify(cargos[cargoIndex])));
            }
        }
    });
})();


// GGhj
// (() => {
//     var __webpack_exports__ = {};
//     /*!**********************!*\
//       !*** ./src/index.ts ***!
//       \**********************/
//     var text = 'Hello TypeScript';
//     console.log(text);
//     document.addEventListener('DOMContentLoaded', function () {
//         var cargoForm = document.getElementById('cargoForm');
//         var cargoTableBody = document.getElementById('cargoTableBody');
//         // Fonction pour sauvegarder les données dans Local Storage
//         var saveToLocalStorage = function (cargos) {
//             localStorage.setItem('cargos', JSON.stringify(cargos));
//         };
//         // Fonction pour charger les données depuis Local Storage
//         var loadFromLocalStorage = function () {
//             var cargos = localStorage.getItem('cargos');
//             return cargos ? JSON.parse(cargos) : [];
//         };
//         // Fonction pour afficher les données dans le tableau
//         var displayCargos = function (cargos) {
//             cargoTableBody.innerHTML = '';
//             cargos.forEach(function (cargo, index) {
//                 var newRow = document.createElement('tr');
//                 newRow.innerHTML = "\n                <td class=\"border px-4 py-2\">".concat(cargo.numero, "</td>\n                <td class=\"border px-4 py-2\">").concat(cargo.type, "</td>\n                <td class=\"border px-4 py-2\">").concat(cargo.poidsMax, "</td>\n                <td class=\"border px-4 py-2\">").concat(cargo.distance, "</td>\n                <td class=\"border px-4 py-2\">").concat(cargo.depart, "</td>\n                <td class=\"border px-4 py-2\">").concat(cargo.arrivee, "</td>\n                <td class=\"border px-4 py-2\"><button class=\"btn-delete bg-red-500 text-white px-2 py-1 rounded\" data-index=\"").concat(index, "\">Supprimer</button></td>\n            ");
//                 cargoTableBody.appendChild(newRow);
//             });
//         };
//         // Charger et afficher les cargaisons au chargement de la page
//         var cargos = loadFromLocalStorage();
//         displayCargos(cargos);
    
          
//         cargoForm.addEventListener('submit', function (event) {
//             event.preventDefault();
//             // Récupérer les valeurs des champs du formulaire
//             var numero = document.getElementById('numero').value;
//             var type = document.getElementById('type').value;
//             var poidsMax = document.getElementById('poidsMax').value;
//             var distance = document.getElementById('distance').value;
//             var depart = document.getElementById('depart').value;
//             var arrivee = document.getElementById('arrivee').value;
//             // Créer une nouvelle cargaison
//             var newCargo = { numero: numero, type: type, poidsMax: poidsMax, distance: distance, depart: depart, arrivee: arrivee };
//             // Ajouter la nouvelle cargaison aux cargaisons existantes
//             cargos.push(newCargo);
//             // Sauvegarder les cargaisons dans Local Storage
//             saveToLocalStorage(cargos);
//             // Afficher les cargaisons mises à jour
//             displayCargos(cargos);
//             // Réinitialiser le formulaire
//             cargoForm.reset();
//         });

//         // Ajouter un gestionnaire d'événements pour les boutons de suppression
//         cargoTableBody.addEventListener('click', function (event) {
//             if (event.target.classList.contains('btn-delete')) {
//                 var cargoIndex = parseInt(event.target.getAttribute('data-index'));
//                 // Supprimer la cargaison avec l'indice cargoIndex
//                 cargos.splice(cargoIndex, 1);
//                 // Sauvegarder les cargaisons dans Local Storage
//                 saveToLocalStorage(cargos);
//                 // Afficher les cargaisons mises à jour
//                 displayCargos(cargos);
//             }
//         });
//     });
    
// })();

