import {displaySelectedTeam,hideList} from './ui.js'
import createPlayerIcon from './playerIcon.js'
import teams from './teamsInfo.js'


const teamList = document.querySelector('#team-list');
teamList.addEventListener('change',getTeam);

function getTeam(){
    teams.forEach((team)=>{
        if(team.teamName == this.value){
            displaySelectedTeam(team);
            addPlayerButtonEvent();
        }
    })
}

function addPlayerButtonEvent(){
    const players = document.querySelectorAll('.player');
    players.forEach(player=>{
        player.addEventListener('click',getSelectedPlayerInfo);
    })
}
function getSelectedPlayerInfo(){
    let number = this.children[0].textContent;
    let name = this.children[1].textContent;
    createPlayerIcon(number,name)
    
}

document.oncontextmenu = menu;

function menu(e){
    e.preventDefault()
    console.log('hola')
}





