import { displaySelectedTeam, hideList } from './ui.js'
import {createPlayerIcon,getColors} from './playerIcon.js'
import teams from './teamsInfo.js'
import {} from './addPlayer.js'

if ("serviceWorker" in navigator) {
    // register service worker
    navigator.serviceWorker.register("./service-worker.js");
  }

const teamList = document.querySelector('#team-list');
teamList.addEventListener('change', getSelectedTeam);

let team = '';

function getSelectedTeam() {
    team = this.value;
    teams.forEach((team) => {
        if (team.teamName == this.value) {
            displaySelectedTeam(team);
            addPlayerButtonEvent();
        }
    })
}

export default function getTeamName(){
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
    let jerseyColor = getColors()[0];
    let numberColor = getColors()[1];

    createPlayerIcon(number, name,jerseyColor,numberColor);

}





