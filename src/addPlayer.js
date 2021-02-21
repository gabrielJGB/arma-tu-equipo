import {createPlayerIcon,getColors} from "./playerIcon.js";

const addButton = document.querySelector('.add-player-button');
const acceptButton = document.querySelector('.accept-button');
const cancelButton = document.querySelector('.cancel-button');
const modalWindow = document.querySelector('.modal-window');
let nameInput = document.querySelector('.name-input');
let numberInput = document.querySelector('.number-input');

addButton.addEventListener('click', displayFormWindow);
cancelButton.addEventListener('click',closeFormWindow);

function displayFormWindow(){
    acceptButton.addEventListener('click',getPlayerInfo);
    nameInput.value = "";
    numberInput.value = "";
    nameInput.autofocus = true;
    modalWindow.style.display = "flex";
    modalWindow.addEventListener('click',(e)=>{

        if (e.target.className === 'modal-window') {
            modalWindow.style.display = "none";
        }
    })
}

function closeFormWindow(e){
    e.preventDefault();
    modalWindow.style.display = "none";
}

function getPlayerInfo(e){
    e.preventDefault();
    let name = nameInput.value;
    let number = numberInput.value;
    let jerseyColor = document.querySelector('.jersey-color').value;
    let numberColor = document.querySelector('.number-color').value;
    if(name === '' || number === ''){
        alert("Ingrese un nombre y un número");
    }
    else{
    createPlayerIcon(number,name,jerseyColor,numberColor,top,"");
    modalWindow.style.display = "none";
    }
}

