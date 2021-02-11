import { displaySelectedTeam, hideList } from './ui.js'
import createPlayerIcon from './playerIcon.js'
import teams from './teamsInfo.js'


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
    createPlayerIcon(number, name);

}

document.querySelector('.download-button').addEventListener('click', function () {
    const title = document.querySelector('.title')
    const field = document.querySelector('.field')

    if (field.innerHTML === '') {
        alert("No hay jugadores en el campo de juego");
    }
    else {
        if (title.value === '') {
            title.value = ' '
        }
        html2canvas(document.querySelector('.main-area')).then(
            function (canvas) {
                return Canvas2Image.saveAsPNG(canvas);
            })
        title.value = ''
    }
});




