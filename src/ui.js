let isShowed = false;
const sidebar = document.querySelector('.sidebar');
const toggleSidebarButton = document.querySelector('.toggle-sidebar-button');
toggleSidebarButton.addEventListener('click', toggleList)


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

function toggleList() {
    if (isShowed) {
        hideList();
    }
    else {
        sidebar.style.left = "0%";
        isShowed = true;

    }
}
export function hideList() {
    sidebar.style.left = "-100%";
    isShowed = false;
}


