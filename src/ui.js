let isVisible = false;
let flag = true;
let initialX = null;
const sidebar = document.querySelector('.sidebar');
const toggleSidebarButton = document.querySelector('.toggle-sidebar-button');
const downloadButton = document.querySelector('.download-button');
const container = document.querySelector("body");
toggleSidebarButton.addEventListener('click', toggleList);
downloadButton.addEventListener('click', downloadImage);
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

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    const arrow = document.querySelector('.arrow');
    arrow.style.left = "-40px";
    document.addEventListener('touchstart', () => {
        arrow.style.left = "-70vh";
    })

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
    console.log(e.target.className)
    if (e.target.className === "field" || e.target.className === "sidebar" || e.target.className === "player" || e.target.className === "arrow" ) {
        initialX = e.touches[0].clientX;
        container.addEventListener("touchmove", swipeMenu);
    }
}
function swipeMenu(e) {
    let currentX = e.touches[0].clientX;

    if (currentX > initialX + window.innerWidth/3) {        
        showList("0%");
    }
    else if (currentX < initialX  - window.innerWidth/3) {
        hideList("-100%");
    }
}

export function togglePlayerButton(name,number) {
    const names = document.querySelectorAll('.name');
    
    names.forEach((i) => {
        if (i.textContent === name && i.previousElementSibling.textContent === number) {
            i.parentElement.disabled? i.parentElement.disabled = false: i.parentElement.disabled = true;
        }
    });
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

