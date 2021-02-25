import { displaySelectedTeam, hideList, setTeamColors,changeIcons, getScaleValue} from './ui.js'
import { createPlayerIcon, getColors } from './playerIcon.js'
import teams from './teamsInfo.js'
import { } from './addPlayer.js'
import { } from './saveTeam.js'

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}

const jerseyTeamColor = document.querySelector('.jersey-color-team');
const numberTeamColor = document.querySelector('.number-color-team');
const iconOption =document.querySelectorAll('.icon-option');
const teamList = document.querySelector('#team-list');
let team = '';

teamList.addEventListener('change', getSelectedTeam);
jerseyTeamColor.addEventListener('change', setTeamColors);
numberTeamColor.addEventListener('change', setTeamColors);
iconOption.forEach((i)=>{
    i.addEventListener('change',(e)=>{
        changeIcons(e.target);
    });
}) 


function getSelectedTeam() {
    document.querySelectorAll('.position').forEach((i)=>{i.style.display = "block"});
    document.querySelectorAll('.color-box2').forEach((i)=>{i.style.display = "flex"});
    document.querySelector('.icon-options').style.display = "flex";

    team = this.value;
    teams.forEach((team) => {
        if (team.teamName == this.value) {
            displaySelectedTeam(team);
            addPlayerButtonEvent();
            jerseyTeamColor.value = getColors()[0];
            numberTeamColor.value = getColors()[1];
        }
    })
}

export default function getTeamName() {
    return team;
}

function addPlayerButtonEvent() {
    const players = document.querySelectorAll('.player');
    players.forEach(player => {
        player.addEventListener('click', getSelectedPlayerInfo);
    })
}


function getSelectedPlayerInfo() {
    let number = this.children[0].textContent;
    let name = this.children[1].textContent;
    let jerseyColor =  jerseyTeamColor.value;
    let numberColor =  numberTeamColor.value;
    let top = null;
    let left = null;
    let icon = "";
    let id = this.attributes[0];

    let scale = getScaleValue();
    
    if(document.querySelector('#jersey').checked){
        icon = "jersey";
    }
    else if(document.querySelector('#circle').checked){
        icon = "circle";
    }
    else if(document.querySelector('#no-icon').checked){
        icon = "no-icon";
    }

    createPlayerIcon(number, name, jerseyColor, numberColor, top, left,icon,id,scale);
}


