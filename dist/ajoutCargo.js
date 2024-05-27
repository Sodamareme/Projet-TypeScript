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

    var saveLastCargoNumber = function (number) {
        localStorage.setItem('lastCargoNumber', number);
    };

    var loadLastCargoNumber = function () {
        var lastCargoNumber = localStorage.getItem('lastCargoNumber');
        return lastCargoNumber ? parseInt(lastCargoNumber, 10) : 0;
    };

    var generateCargoNumber = function () {
        var lastCargoNumber = loadLastCargoNumber();
        var newCargoNumber = lastCargoNumber + 1;
        saveLastCargoNumber(newCargoNumber);
        return newCargoNumber;
    };

    var displayCargos = function (cargos) {
        cargoTableBody.innerHTML = '';
        cargos.forEach(function (cargo, index) {
            var newRow = document.createElement('tr');
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

    var cargos = loadFromLocalStorage();
    displayCargos(cargos);

    // Générer et afficher le numéro de cargaison au chargement de la page
    document.getElementById('numero').value = generateCargoNumber();

    cargoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var numero = document.getElementById('numero').value;
        var type = document.getElementById('type').value;
        var poidsMax = document.getElementById('poidsMax').value;
        var distance = document.getElementById('distance').value;
        var depart = document.getElementById('depart').value;
        var arrivee = document.getElementById('arrivee').value;
        var Ldepart = document.getElementById('Ldepart').value;
        var Larrivee = document.getElementById('Larrivee').value;

        var newCargo = { 
            numero: numero, 
            type: type, 
            poidsMax: poidsMax, 
            distance: distance, 
            depart: depart, 
            arrivee: arrivee, 
            Ldepart: Ldepart, 
            Larrivee: Larrivee 
        };

        cargos.push(newCargo);
        saveToLocalStorage(cargos);
        displayCargos(cargos);
        cargoForm.reset();

        // Générer et afficher le prochain numéro de cargaison après réinitialisation du formulaire
        document.getElementById('numero').value = generateCargoNumber();
    });
    //Boutons
    cargoTableBody.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-delete')) {
            var targetButton = event.target;
            var cargoIndex = parseInt(targetButton.getAttribute('data-index') || '0', 10);
            
            cargos.splice(cargoIndex, 1);
            saveToLocalStorage(cargos);
            displayCargos(cargos);  
            if (targetButton.classList.contains('btn-delete')) {
                cargos.splice(cargoIndex, 1);
                saveToLocalStorage(cargos);
                displayCargos(cargos);
            } else if (targetButton.classList.contains('btn-details')) {
                alert(`Détails de la cargaison : ${JSON.stringify(cargos[cargoIndex])}`);
            } else if (targetButton.classList.contains('btn-add-product')) {
                // Logique pour ajouter un produit à la cargaison
                var cargo = cargos[cargoIndex];
                alert(`Ajouter un produit à la cargaison ${cargo.numero}`);
            }
        }
    });
})();
