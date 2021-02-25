let isVisible = false;
let flag = true;
let initialX = null;
let id = 0;
let scale = 0;
const sidebar = document.querySelector('.sidebar');
const toggleSidebarButton = document.querySelector('.toggle-sidebar-button');
const downloadButton = document.querySelector('.download-button');
const downloadButtonMobile = document.querySelector('.download-button-mobile');
const container = document.querySelector("body");
toggleSidebarButton.addEventListener('click', toggleList);
downloadButton.addEventListener('click', downloadImage);
downloadButtonMobile.addEventListener('click', downloadImage);
container.addEventListener("touchstart", swipeStart);

export function displaySelectedTeam(team) {
    const goalkeepersList = document.querySelector('.goalkeepers');
    const defendersList = document.querySelector('.defenders');
    const midfieldersList = document.querySelector('.midfielders');
    const forwardsList = document.querySelector('.forwards');
    
    goalkeepersList.innerHTML = "";
    defendersList.innerHTML = "";
    midfieldersList.innerHTML = "";
    forwardsList.innerHTML = "";

    team.players.forEach((i) => {
        id++;
        if (i.position === "goalkeeper") {
            goalkeepersList.innerHTML += `<button data-id="${id}" class="player"><span class="number">${i.number}</span> - <span class="name">${i.name}</span></button>`;

        }
        else if (i.position === "defender") {
            defendersList.innerHTML += `<button data-id="${id}" class="player"><span class="number">${i.number}</span> - <span class="name">${i.name}</span></button>`;

        }
        else if (i.position === "midfielder") {
            midfieldersList.innerHTML += `<button data-id="${id}" class="player"><span class="number">${i.number}</span> - <span class="name">${i.name}</span></button>`;

        }
        else if (i.position === "forward") {
            forwardsList.innerHTML += `<button data-id="${id}" class="player"><span class="number">${i.number}</span> - <span class="name">${i.name}</span></button>`;
        }

    });

}

export function displayMessage() {
    const message = document.querySelector('.message');
    if (flag) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            message.textContent = 'Doble tap en el jugador para borrarlo';
        } else {
            message.textContent = 'Doble click en el jugador para borrarlo';
        }
        message.style.left = "2vh";
        setTimeout(() => {
            message.style.left = "-140vh";
        }, 5000)
        flag = false;
        message.addEventListener('click', () => {
            message.style.left = "-140vh";
        })
    }
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    const arrow = document.querySelector('.arrow');
    arrow.style.left = "-40px";
    document.addEventListener('touchstart', (e) => {
        setTimeout(() => {
            arrow.style.left = "60px";
        }, 0);
        setTimeout(() => {
            arrow.style.left = "-50vh";
        }, 300);
        setTimeout(() => {
            arrow.style.display = "none";
        }, 1000);
    });

    scale = 0.71;
}
else{
    scale = 0.9;
}

function toggleList() {
    if (isVisible) {
        hideList("-100%");
    }
    else {
        showList("0%");
    }
}

export function hideList(value) {
    sidebar.style.left = value;
    isVisible = false;
}

function showList(value) {
    sidebar.style.left = value;
    isVisible = true;
}

function swipeStart(e) {
    if (e.target.className === "field" || e.target.className === "sidebar" || e.target.className === "player" || e.target.className === "arrow" || e.target.className === "position") {
        initialX = e.touches[0].clientX;
        container.addEventListener("touchmove", swipeMenu);
    }
    else{
        container.removeEventListener("touchmove", swipeMenu);
    }

}
function swipeMenu(e) {
    let currentX = e.touches[0].clientX;
    if (currentX > initialX + window.innerWidth / 4) {
        showList("0%");
        container.removeEventListener("touchmove", swipeMenu);
    }
    else if (currentX < initialX - window.innerWidth / 4) {
        hideList("-100%");
        container.removeEventListener("touchmove", swipeMenu);
    }
}

export function togglePlayerButton(id) {
    const players = document.querySelectorAll('.player');
    if(id != null){
    players.forEach((player) => {
        if (player.attributes[0].value == id.value) {
            player.disabled ? player.disabled = false : player.disabled = true;
        }
    });
    }
}

function downloadImage() {
    const field = document.querySelector('.field');
    const modalDownload = document.querySelector('.modal-download');
    modalDownload.style.transition = "all 0.5s"
    modalDownload.style.display = "flex";

    if (field.innerHTML === '') {
        modalDownload.style.display = "none";
        alert("Agrega jugadores al campo de juego");
    }
    else {
        html2canvas(document.querySelector('.field')).then(
            function (canvas) {
                modalDownload.style.display = "none";
                return Canvas2Image.saveAsPNG(canvas);
            })
    }
}

document.querySelectorAll('.zoom-buttons button').forEach((i)=>{i.addEventListener('click',zoom)})

 function zoom(e){
    const players = document.querySelectorAll('.player-icon')
    players.forEach((player)=>{
        
        if(e.target.textContent === '+'){
            scale =  player.style.transform;
            scale = parseFloat(scale.replace("scale(","").replace(")",""));
            scale = scale + 0.05;
            player.style.transform = `scale(${scale})`;
        }
        else if(e.target.textContent === '-'){
            scale = player.style.transform;
            scale = parseFloat(scale.replace("scale(","").replace(")",""));
            scale = scale - 0.05;
            player.style.transform = `scale(${scale})`;
        }
    })
}

export function getScaleValue(){
    return scale;
}

export function setTeamColors() {
    const players = document.querySelectorAll('.player-icon');
    if (this.className == 'jersey-color-team') {
        players.forEach((player) => {
            player.children[0].children[0].children[1].attributes[0].value = this.value;
            player.children[0].children[0].children[2].attributes[0].value = this.value;
            player.children[0].children[0].children[3].attributes[0].value = this.value;
        })
    }
    else if (this.className == 'number-color-team') {
        players.forEach((player) => {
            player.children[0].children[0].children[4].attributes[0].value = this.value;
            player.children[0].children[0].children[1].attributes[1].value = this.value;
        })
    }
}

export function getPlayerElement(number, name, jerseyColor, numberColor, icon) {
    let playerDiv = document.createElement('DIV');

    if (icon === "jersey") {
        playerDiv.innerHTML = setIconJersey(jerseyColor, numberColor, number, name)
    }
    else if (icon === "circle") {
        playerDiv.innerHTML = setIconCircle(jerseyColor, numberColor, number, name)
    }
    else if (icon === "no-icon") {
        playerDiv.innerHTML = setIconNone(jerseyColor, numberColor, number, name);
       
    }
    return playerDiv;
}

export function changeIcons(option) {
    const players = document.querySelectorAll('.player-icon');

    players.forEach((player) => {
        
        let name = player.children[1].textContent;
        let number = player.children[0].children[0].children[4].textContent;
        let jerseyColor = player.children[0].children[0].children[1].attributes[0].value;
        let numberColor = player.children[0].children[0].children[4].attributes[0].value;

        if (option.id == 'jersey') {
            player.innerHTML = setIconJersey(jerseyColor, numberColor, number, name)
        }
        else if (option.id == 'circle') {
            player.innerHTML = setIconCircle(jerseyColor, numberColor, number, name)
        }
        if (option.id == 'no-icon') {
            player.innerHTML = setIconNone(jerseyColor, numberColor, number, name)
        }
    });
}

function setIconJersey(jerseyColor, numberColor, number, name) {
    return `
    <svg width="52.00000000000001" height="44" xmlns="http://www.w3.org/2000/svg">
        <g>
    <title>Doble click para borrar</title>
    <rect fill="${jerseyColor}" stroke="${numberColor}" stroke-opacity="0" x="10.79408" y="1.74288" width="28.88527"
        height="39.63909" id="svg_26" />
    <rect fill="${jerseyColor}" stroke-opacity="null" x="22.08157" y="-9.38248" width="89.74359"
        height="55.10556" id="svg_27"
        transform="matrix(0.11267494015126664,-0.13428060550793872,0.13428060550793872,0.11267494015126664,-0.5787242092674678,17.830566470735473) " />

    <rect fill="${jerseyColor}" stroke-opacity="null" x="139.08044" y="130.05117" width="89.74359"
        height="55.10556" id="svg_3"
        transform="rotate(-81 41.31094741821289,10.888059616088865) matrix(0.11267494015126664,-0.13428060550793872,0.13428060550793872,0.11267494015126664,-0.5787242092674678,17.830566470735473) " />

    <text fill="${numberColor}" class="player-number" x="-24.40934" y="-24.87449" stroke-width="0"
        stroke-opacity="null" id="svg_32" font-size="4" font-family="sans-serif"
        text-anchor="middle"
        transform="matrix(5.5037063068223,0,0,4.985333955760002,159.81749203808607,150.19696718464186) ">${number}</text>
        </g>
    </svg>
    <div class="player-name">${name}</div>
    `
}

function setIconCircle(jerseyColor, numberColor, number, name) {
    return `
    <svg width="43" height="43" viewBox="0 0 70 70" id="svgcontent" x="320.2494972757462"y="43.249497275746165">
        <g>
    <title style="pointer-events:inherit">Doble click para borrar</title>
    <ellipse fill="${jerseyColor}" stroke="${numberColor}" stroke-width="5" stroke-dasharray="null" stroke-opacity="" opacity=""
        cx="34.93006807917722" cy="34.65034987386305" id="svg_5" rx="31.60832841858673" ry="31.60832841858673">
    </ellipse>
    <ellipse fill="${jerseyColor}"></ellipse>
    <ellipse fill="${jerseyColor}"></ellipse>
    <text fill="${numberColor}" stroke-width="0" stroke-dasharray="null"
        stroke-opacity="null" fill-opacity="null" opacity="undefined" x="26"
        y="33.59834358995043" id="svg_7" font-size="23" font-family="sans-serif" text-anchor="middle"
        xml:space="preserve"
        transform="matrix(1.7065100180330182,0,0,1.7065100180330182,-10.767404723124537,-8.675327009505716) ">${number}</text>
        </g>
        </svg>
        <div class="player-name">${name}</div>
        `
}
function setIconNone(jerseyColor, numberColor, number, name){
    return `
    <svg width="0" height="40" viewBox="0 0 70 70">
    <g>
        <title>Doble click para borrar</title>
        <rect fill="${jerseyColor}" stroke="${numberColor}"></rect>
        <rect fill="${jerseyColor}"></rect>
        <rect fill="${jerseyColor}"></rect>
        <text stroke ="${numberColor}">${number}</text>
    </g>
    </svg>
    <div class="player-name" style="background-color: rgba(0,0,0,0.9);padding:2px 10px">${name}</div>
    `
}

