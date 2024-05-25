const text: string = 'Hello TypeScript';
console.log(text);

interface Cargo {
    numero: string;
    type: string;
    poidsMax: string;
    distance: string;
    depart: string;
    arrivee: string;
}

document.addEventListener('DOMContentLoaded', () => {
    const cargoForm = document.getElementById('cargoForm') as HTMLFormElement;
    const cargoTableBody = document.getElementById('cargoTableBody') as HTMLTableSectionElement;

    // Fonction pour sauvegarder les données dans Local Storage
    const saveToLocalStorage = (cargos: Cargo[]) => {
        localStorage.setItem('cargos', JSON.stringify(cargos));
    };

    // Fonction pour charger les données depuis Local Storage
    const loadFromLocalStorage = (): Cargo[] => {
        const cargos = localStorage.getItem('cargos');
        return cargos ? JSON.parse(cargos) : [];
    };

    // Fonction pour afficher les données dans le tableau
    const displayCargos = (cargos: Cargo[]) => {
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
        const numero = (document.getElementById('numero') as HTMLInputElement).value;
        const type = (document.getElementById('type') as HTMLInputElement).value;
        const poidsMax = (document.getElementById('poidsMax') as HTMLInputElement).value;
        const distance = (document.getElementById('distance') as HTMLInputElement).value;
        const depart = (document.getElementById('depart') as HTMLInputElement).value;
        const arrivee = (document.getElementById('arrivee') as HTMLInputElement).value;

        // Créer une nouvelle cargaison
        const newCargo: Cargo = { numero, type, poidsMax, distance, depart, arrivee };

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
