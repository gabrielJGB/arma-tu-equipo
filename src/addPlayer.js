import {createPlayerIcon,getColors} from "./playerIcon.js";

const addButton = document.querySelector('.add-player-button');
const acceptButton = document.querySelector('.accept-button');
const cancelButton = document.querySelector('.cancel-button');
const modalWindow = document.querySelector('.modal-window');

addButton.addEventListener('click', displayFormWindow);
cancelButton.addEventListener('click',closeFormWindow);

function displayFormWindow(){
    acceptButton.addEventListener('click',getPlayerInfo)
    modalWindow.style.display = "flex";
}

function closeFormWindow(e){
    e.preventDefault();
    modalWindow.style.display = "none";
}

function getPlayerInfo(e){
    e.preventDefault();
    let name = document.querySelector('.name-input').value;
    let number = document.querySelector('.number-input').value;
    let jerseyColor = document.querySelector('.jersey-color').value;
    let numberColor = document.querySelector('.number-color').value;
    if(name === '' || number === ''){
        alert("Ingrese un nombre y un número");
    }
    else{
    createPlayerIcon(number,name,jerseyColor,numberColor);
    modalWindow.style.display = "none";
    }
}
