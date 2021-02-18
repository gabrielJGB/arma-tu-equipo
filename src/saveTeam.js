import { createPlayerIcon, getColors } from "./playerIcon.js";

let count = 0;
const saveButton = document.querySelector('.save-button');
saveButton.addEventListener('click', saveFormation);

checkLocalStorage();

function saveFormation() {
    const players = document.querySelectorAll('.player-icon');
    let playersToSave = [];
    let title = prompt("Ingrese un título:");

    players.forEach((player) => {
        let topPosition = player.style.top;
        let leftPosition = player.style.left;
        let name = player.children[1].textContent;
        let jerseyColor = player.children[0].children[1].children[1].attributes[0].value;
        let number = player.children[0].children[1].children[4].textContent;
        let numberColor = player.children[0].children[1].children[4].attributes[11].value;
        let dataId = player.attributes[2].value
        let playerData = { topPosition, leftPosition, name, number, numberColor, jerseyColor, dataId }
        playersToSave.push(playerData);
    })
    window.localStorage.setItem(title, JSON.stringify(playersToSave));
    count += 1;
    window.localStorage.setItem("count", count);
}

function checkLocalStorage() {
    count = Number(window.localStorage.getItem("count"));
    if (!count) {
        window.localStorage.setItem("count", "0");
    }

    for (let i = 0; i < count + 1; i++) {
        let title = window.localStorage.key(i);
        if (title != "count") {
            let formation = JSON.parse(window.localStorage.getItem(title));
            // precessFormation(formation);
        }
    }
}


function precessFormation(formation) {
console.log(formation.length)
    formation.forEach((i) => {
        let number = formation[i].number;
        let name = formation[i].name;
        let jerseyColor = formation[i].jerseyColor;
        let numberColor = formation[i].numberColor;
        let topPosition = formation[i].topPosition;
        let leftPosition = formation[i].leftPosition;
        createPlayerIcon(number, name, jerseyColor, numberColor)

        let players = document.querySelectorAll('.player-icon');
        players.forEach((i) => {
            // if (i.attributes[2].value == dataId) {
            // console.log(i.attributes[2].value,dataId)
            i.style.top = topPosition;
            i.style.left = leftPosition;
            // }
        })
    })
}


