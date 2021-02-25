import { createPlayerIcon, getColors } from "./playerIcon.js";

const saveButton = document.querySelector('.save-button');
const loadButton = document.querySelector('.load-button');
const modal = document.querySelector('.modal-load');
const field = document.querySelector('.field');

saveButton.addEventListener('click', saveFormation);
loadButton.addEventListener('click', showFormationWindow);

function showFormationWindow() {
    let count = Number(window.localStorage.getItem("count"));
    const formationsBox = document.querySelector('.box');

    formationsBox.innerHTML = '';
    modal.style.display = "flex";

    if (!count) {
        window.localStorage.setItem("count", "0");
    }

    for (let i = 0; i < count + 1; i++) {
        let title = window.localStorage.key(i);
        if (title != 'count') {
            formationsBox.innerHTML += `<div class="item"><button class="formation-button">${title}<button class="delete-button">Borrar</button></div>`;
        }
    }

    const modalBox = document.querySelector('.modal-load');
    modalBox.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.className === 'modal-load') {
            modal.style.display = "none";
        }
    })

    const deleteButton = document.querySelectorAll('.delete-button');
    deleteButton.forEach((el) => {
        el.addEventListener('click', (e) => {
            let key = e.target.previousElementSibling.textContent;
            deleteFormation(key)
            e.target.previousElementSibling.parentNode.remove();
        });
    })

    const formations = document.querySelectorAll('.formation-button');
    formations.forEach((formation) => {
        formation.addEventListener('click', () => {
            let key = formation.textContent;
            field.innerHTML = '';
            displayFormation(key);
        })
    })
}

function deleteFormation(key) {
    let count = Number(window.localStorage.getItem("count"));
    localStorage.removeItem(key);
    count--;
    window.localStorage.setItem("count", count);
}

function displayFormation(key) {
    let count = Number(window.localStorage.getItem("count"));
    for (let i = 0; i < count + 1; i++) {
        let title = window.localStorage.key(i);
        if (title != "count") {
            if (title === key) {
                let formation = JSON.parse(window.localStorage.getItem(title));
                processFormation(formation);
            }
        }
    }
    modal.style.display = "none";
}

function processFormation(formation) {
    formation.forEach((i) => {
        let number = i.number;
        let name = i.name;
        let jerseyColor = i.jerseyColor;
        let numberColor = i.numberColor;
        let topPosition = i.topPosition;
        let leftPosition = i.leftPosition;
        let scale = i.scale;

        createPlayerIcon(number, name, jerseyColor, numberColor, topPosition, leftPosition, "jersey", null, scale);
    });
}

function saveFormation() {
    const players = document.querySelectorAll('.player-icon');
    let count = Number(window.localStorage.getItem("count"));
    let playersToSave = [];
    let title = '';


    if (field.innerHTML === "") {
        alert("Agrega jugadores al campo de juego");
    }
    else {
        let titles = [];
        let save = true;

        for (let i = 0; i < count + 1; i++) {
            titles[i] = window.localStorage.key(i);
        }
        do {
            title = prompt("Ingresa un título:");
            if (title != null) {
                if (titles.includes(title)) {
                    alert("El título ya existe. Ingresa otro");
                    save = false;
                }
                else {
                    save = true;
                }
            }
            else {
                return;
            }
        }
        while (save === false);


        if (title === "") {
            title = "Formación " + (count+1);
        }

        players.forEach((player) => {
            let name = player.children[1].textContent;
            let number = player.children[0].children[0].children[4].textContent;
            let jerseyColor = player.children[0].children[0].children[1].attributes[0].value;
            let numberColor = player.children[0].children[0].children[4].attributes[0].value;
            let topPosition = player.style.top;
            let leftPosition = player.style.left;
            let scale = player.style.transform;
            scale = parseFloat(scale.replace("scale(","").replace(")",""));

            let dataId = "";
            if (player.hasAttribute("data-id")) {
                dataId = player.attributes[2].value;
            }
            else {
                dataId = null;
            }

            let playerData = { topPosition, leftPosition, name, number, numberColor, jerseyColor, dataId, scale}
            playersToSave.push(playerData);
        })

        window.localStorage.setItem(title, JSON.stringify(playersToSave));
        count++;
        window.localStorage.setItem("count", count);
        alert("Formación guardada");

    }
}


