import makeDraggable from './makeDraggable.js'

export function displaySelectedTeam(team){
    const goalkeepersList = document.querySelector('.goalkeepers');
    const defendersList = document.querySelector('.defenders');
    const midfieldersList = document.querySelector('.midfielders');
    const forwardsList = document.querySelector('.forwards');
    goalkeepersList.innerHTML = "";
    defendersList.innerHTML = "";
    midfieldersList.innerHTML = "";
    forwardsList.innerHTML = "";

    team.players.forEach((i)=>{
        if(i.position === "goalkeeper"){
            goalkeepersList.innerHTML += `<button class="player"><span class="number">${i.number}</span> - <span class="name">${i.name}</span></button>`;        
        }
        else if(i.position === "defender"){
            defendersList.innerHTML += `<button class="player"><span class="number">${i.number}</span> - <span class="name">${i.name}</span></button>`;  
        }
        else if(i.position === "midfielder"){
            midfieldersList.innerHTML += `<button class="player"><span class="number">${i.number}</span> - <span class="name">${i.name}</span></button>`;
        }
        else if(i.position === "forward"){
            forwardsList.innerHTML += `<button class="player"><span class="number">${i.number}</span> - <span class="name">${i.name}</span></button>`;
        }
    });
}

let isShowed = false;
const sidebar = document.querySelector('.sidebar');
const toggleSidebarButton = document.querySelector('.toggle-sidebar-button');
toggleSidebarButton.addEventListener('click',toggleList)

function toggleList(){
    if(isShowed){
        hideList();
    }
    else{
        sidebar.style.top = "0%";
        toggleSidebarButton.textContent = "Ocultar jugadores";
        isShowed = true;

    }
}

export function hideList(){
    sidebar.style.top = "120%";
    toggleSidebarButton.textContent = "Ver jugadores";
    isShowed = false;
}