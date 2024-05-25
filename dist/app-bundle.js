/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
var text = 'Hello TypeScript';
console.log(text);
document.addEventListener('DOMContentLoaded', function () {
    var cargoForm = document.getElementById('cargoForm');
    var cargoTableBody = document.getElementById('cargoTableBody');
    // Fonction pour sauvegarder les données dans Local Storage
    var saveToLocalStorage = function (cargos) {
        localStorage.setItem('cargos', JSON.stringify(cargos));
    };
    // Fonction pour charger les données depuis Local Storage
    var loadFromLocalStorage = function () {
        var cargos = localStorage.getItem('cargos');
        return cargos ? JSON.parse(cargos) : [];
    };
    // Fonction pour afficher les données dans le tableau
    var displayCargos = function (cargos) {
        cargoTableBody.innerHTML = '';
        cargos.forEach(function (cargo) {
            var newRow = document.createElement('tr');
            newRow.innerHTML = "\n                <td class=\"border px-4 py-2\">".concat(cargo.numero, "</td>\n                <td class=\"border px-4 py-2\">").concat(cargo.type, "</td>\n                <td class=\"border px-4 py-2\">").concat(cargo.poidsMax, "</td>\n                <td class=\"border px-4 py-2\">").concat(cargo.distance, "</td>\n                <td class=\"border px-4 py-2\">").concat(cargo.depart, "</td>\n                <td class=\"border px-4 py-2\">").concat(cargo.arrivee, "</td>\n            ");
            cargoTableBody.appendChild(newRow);
        });
    };
    // Charger et afficher les cargaisons au chargement de la page
    var cargos = loadFromLocalStorage();
    displayCargos(cargos);
    cargoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Récupérer les valeurs des champs du formulaire
        var numero = document.getElementById('numero').value;
        var type = document.getElementById('type').value;
        var poidsMax = document.getElementById('poidsMax').value;
        var distance = document.getElementById('distance').value;
        var depart = document.getElementById('depart').value;
        var arrivee = document.getElementById('arrivee').value;
        // Créer une nouvelle cargaison
        var newCargo = { numero: numero, type: type, poidsMax: poidsMax, distance: distance, depart: depart, arrivee: arrivee };
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUNBQXVDO1FBQ3ZDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0Qiw4QkFBOEI7UUFDOUIsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctcHJvamV0dHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGV4dDogc3RyaW5nID0gJ0hlbGxvIFR5cGVTY3JpcHQnO1xuY29uc29sZS5sb2codGV4dCk7XG5cbmludGVyZmFjZSBDYXJnbyB7XG4gICAgbnVtZXJvOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHBvaWRzTWF4OiBzdHJpbmc7XG4gICAgZGlzdGFuY2U6IHN0cmluZztcbiAgICBkZXBhcnQ6IHN0cmluZztcbiAgICBhcnJpdmVlOiBzdHJpbmc7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FyZ29Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmdvRm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICBjb25zdCBjYXJnb1RhYmxlQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJnb1RhYmxlQm9keScpIGFzIEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50O1xuXG4gICAgLy8gRm9uY3Rpb24gcG91ciBzYXV2ZWdhcmRlciBsZXMgZG9ubsOpZXMgZGFucyBMb2NhbCBTdG9yYWdlXG4gICAgY29uc3Qgc2F2ZVRvTG9jYWxTdG9yYWdlID0gKGNhcmdvczogQ2FyZ29bXSkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FyZ29zJywgSlNPTi5zdHJpbmdpZnkoY2FyZ29zKSk7XG4gICAgfTtcblxuICAgIC8vIEZvbmN0aW9uIHBvdXIgY2hhcmdlciBsZXMgZG9ubsOpZXMgZGVwdWlzIExvY2FsIFN0b3JhZ2VcbiAgICBjb25zdCBsb2FkRnJvbUxvY2FsU3RvcmFnZSA9ICgpOiBDYXJnb1tdID0+IHtcbiAgICAgICAgY29uc3QgY2FyZ29zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmdvcycpO1xuICAgICAgICByZXR1cm4gY2FyZ29zID8gSlNPTi5wYXJzZShjYXJnb3MpIDogW107XG4gICAgfTtcblxuICAgIC8vIEZvbmN0aW9uIHBvdXIgYWZmaWNoZXIgbGVzIGRvbm7DqWVzIGRhbnMgbGUgdGFibGVhdVxuICAgIGNvbnN0IGRpc3BsYXlDYXJnb3MgPSAoY2FyZ29zOiBDYXJnb1tdKSA9PiB7XG4gICAgICAgIGNhcmdvVGFibGVCb2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjYXJnb3MuZm9yRWFjaChjYXJnbyA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgbmV3Um93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+JHtjYXJnby5udW1lcm99PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+JHtjYXJnby50eXBlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPiR7Y2FyZ28ucG9pZHNNYXh9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+JHtjYXJnby5kaXN0YW5jZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj4ke2NhcmdvLmRlcGFydH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj4ke2NhcmdvLmFycml2ZWV9PC90ZD5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBjYXJnb1RhYmxlQm9keS5hcHBlbmRDaGlsZChuZXdSb3cpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gQ2hhcmdlciBldCBhZmZpY2hlciBsZXMgY2FyZ2Fpc29ucyBhdSBjaGFyZ2VtZW50IGRlIGxhIHBhZ2VcbiAgICBjb25zdCBjYXJnb3MgPSBsb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIGRpc3BsYXlDYXJnb3MoY2FyZ29zKTtcblxuICAgIGNhcmdvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gUsOpY3Vww6lyZXIgbGVzIHZhbGV1cnMgZGVzIGNoYW1wcyBkdSBmb3JtdWxhaXJlXG4gICAgICAgIGNvbnN0IG51bWVybyA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtZXJvJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICAgICAgY29uc3QgcG9pZHNNYXggPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvaWRzTWF4JykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXN0YW5jZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXBhcnQgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlcGFydCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgICAgICBjb25zdCBhcnJpdmVlID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJpdmVlJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG5cbiAgICAgICAgLy8gQ3LDqWVyIHVuZSBub3V2ZWxsZSBjYXJnYWlzb25cbiAgICAgICAgY29uc3QgbmV3Q2FyZ286IENhcmdvID0geyBudW1lcm8sIHR5cGUsIHBvaWRzTWF4LCBkaXN0YW5jZSwgZGVwYXJ0LCBhcnJpdmVlIH07XG5cbiAgICAgICAgLy8gQWpvdXRlciBsYSBub3V2ZWxsZSBjYXJnYWlzb24gYXV4IGNhcmdhaXNvbnMgZXhpc3RhbnRlc1xuICAgICAgICBjYXJnb3MucHVzaChuZXdDYXJnbyk7XG5cbiAgICAgICAgLy8gU2F1dmVnYXJkZXIgbGVzIGNhcmdhaXNvbnMgZGFucyBMb2NhbCBTdG9yYWdlXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZShjYXJnb3MpO1xuXG4gICAgICAgIC8vIEFmZmljaGVyIGxlcyBjYXJnYWlzb25zIG1pc2VzIMOgIGpvdXJcbiAgICAgICAgZGlzcGxheUNhcmdvcyhjYXJnb3MpO1xuXG4gICAgICAgIC8vIFLDqWluaXRpYWxpc2VyIGxlIGZvcm11bGFpcmVcbiAgICAgICAgY2FyZ29Gb3JtLnJlc2V0KCk7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==