let isShowed = false;
let flag = true;
let initialX = null;
const sidebar = document.querySelector('.sidebar');
const toggleSidebarButton = document.querySelector('.toggle-sidebar-button');
const downloadButton = document.querySelector('.download-button');
const container = document.querySelector("body");
toggleSidebarButton.addEventListener('click', toggleList);
downloadButton.addEventListener('click', downloadImage);
container.addEventListener("touchstart", swipeStart);
container.addEventListener("touchmove", swipeMenu);

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
        if (i.position === "goalkeeper") {
            goalkeepersList.innerHTML += `<button class="player"><span class="number">${i.number}</span> - <span class="name">${i.name}</span></button>`;
        }
        else if (i.position === "defender") {
            defendersList.innerHTML += `<button class="player"><span class="number">${i.number}</span> - <span class="name">${i.name}</span></button>`;
        }
        else if (i.position === "midfielder") {
            midfieldersList.innerHTML += `<button class="player"><span class="number">${i.number}</span> - <span class="name">${i.name}</span></button>`;
        }
        else if (i.position === "forward") {
            forwardsList.innerHTML += `<button class="player"><span class="number">${i.number}</span> - <span class="name">${i.name}</span></button>`;
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
    }
}


function toggleList() {
    if (isShowed) {
        hideList();
    }
    else {
        showList();
    }
}

export function hideList() {
    sidebar.style.left = "-100%";
    isShowed = false;
}

function showList(){
    sidebar.style.left = "0%";
    isShowed = true;
}

function swipeStart(e) {
    initialX = e.touches[0].clientX;
}

function swipeMenu(e) {
    let currentX = e.touches[0].clientX;
    let toggleMenuWidth = (window.innerWidth)/2;

    if (currentX > initialX + toggleMenuWidth ) {
        showList()
    } 
    else if(currentX < initialX - toggleMenuWidth){
        hideList();
    }    
}

function downloadImage() {
    const field = document.querySelector('.field')

    if (field.innerHTML === '') {
        alert("Agrega jugadores al campo de juego");
    }
    else {
        html2canvas(document.querySelector('.field')).then(
            function (canvas) {
                return Canvas2Image.saveAsPNG(canvas);
            })
    }
}