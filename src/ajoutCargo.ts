(() => {
    const cargoForm = document.getElementById('cargoForm') as HTMLFormElement;
    const cargoTableBody = document.getElementById('cargoTableBody') as HTMLTableSectionElement;

    interface Cargo {
        numero: string;
        type: string;
        poidsMax: string;
        distance: string;
        depart: string;
        arrivee: string;
    }

    const saveToLocalStorage = (cargos: Cargo[]) => {
        localStorage.setItem('cargos', JSON.stringify(cargos));
    };

    const loadFromLocalStorage = (): Cargo[] => {
        const cargosJSON = localStorage.getItem('cargos');
        return cargosJSON ? JSON.parse(cargosJSON) : [];
    };

    const displayCargos = (cargos: Cargo[]) => {
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
                <td class="border px-4 py-2"><button class="btn-delete bg-red-500 text-white px-2 py-1 rounded" data-index="${index}">Supprimer</button></td>
                <td class="border px-4 py-2"><button class="btn-details bg-blue-500 text-white px-2 py-1 rounded" data-index="${index}">Détails</button></td>
            `;
            cargoTableBody.appendChild(newRow);
        });
    };

    const cargos: Cargo[] = loadFromLocalStorage();
    displayCargos(cargos);

    cargoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const numero = (document.getElementById('numero') as HTMLInputElement).value;
        const type = (document.getElementById('type') as HTMLInputElement).value;
        const poidsMax = (document.getElementById('poidsMax') as HTMLInputElement).value;
        const distance = (document.getElementById('distance') as HTMLInputElement).value;
        const depart = (document.getElementById('depart') as HTMLInputElement).value;
        const arrivee = (document.getElementById('arrivee') as HTMLInputElement).value;
        
        const newCargo: Cargo = { numero, type, poidsMax, distance, depart, arrivee };
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
            } else if (targetButton.classList.contains('btn-details')) {
                alert(`Détails de la cargaison : ${JSON.stringify(cargos[cargoIndex])}`);
            }
        }
    });
})();
