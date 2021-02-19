import { createPlayerIcon, getColors } from "./playerIcon.js";

let count = 0;
const saveButton = document.querySelector('.save-button');
const loadButton = document.querySelector('.load-button');
const modal = document.querySelector('.modal-load');
const field = document.querySelector('.field');

saveButton.addEventListener('click', saveFormation);
loadButton.addEventListener('click', showFormationWindow);

function showFormationWindow() {
    count = Number(window.localStorage.getItem("count"));
    const formationsBox = document.querySelector('.box');

    formationsBox.innerHTML = '';
    modal.style.display = "flex";

    if (!count) {
        window.localStorage.setItem("count", "0");
    }

    for (let i = 0; i < count + 1; i++) {
        let title = window.localStorage.key(i);
        if (title != 'count') {
            formationsBox.innerHTML += `<div class="item"><button class="formation-button">${title}</button><button class="delete-button">x</button></div>`;
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
    
            if(deleteFormation(key)){
                e.target.previousElementSibling.parentNode.remove();
            }
            else{
                console.log('error')
            }
            
        });
    })

    const formations = document.querySelectorAll('.formation-button');
    formations.forEach((formation) => {
        formation.addEventListener('click', () => {
            let key = formation.textContent;
            displayFormation(key);
        })
    })
}
function deleteFormation(key) {
    let found = false;

    for (let i = 0; i < count + 1; i++) {
        let savedKey = window.localStorage.key(i);
        if (savedKey != 'count') {
            if (savedKey == key)
                found = true;
            localStorage.removeItem(key);
            count = count - 1;
            window.localStorage.setItem("count", count);
        }
    }
    
    if (found) {return true}
    else { return false }
}

function displayFormation(key) {
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

        createPlayerIcon(number, name, jerseyColor, numberColor, topPosition, leftPosition);
    })
}

function saveFormation() {
    const players = document.querySelectorAll('.player-icon');
    let playersToSave = [];

    if (field.innerHTML === "") {
        alert("Agrega jugadores al campo de juego");
    }
    else {
        let title = prompt("Ingrese un título:");

        if (title === "") {
            title = "Formación " + count;
        }
        else if (title === null) {

        }
        else {
            players.forEach((player) => {
                let topPosition = player.style.top;
                let leftPosition = player.style.left;
                let name = player.children[1].textContent;
                let jerseyColor = player.children[0].children[1].children[1].attributes[0].value;
                let number = player.children[0].children[1].children[4].textContent;
                let numberColor = player.children[0].children[1].children[4].attributes[3].value;
                let dataId = player.attributes[2].value
                let playerData = { topPosition, leftPosition, name, number, numberColor, jerseyColor, dataId }
                playersToSave.push(playerData);
            })
            console.log("oks")
            window.localStorage.setItem(title, JSON.stringify(playersToSave));
            count += 1;
            window.localStorage.setItem("count", count);
        }
    }
}
