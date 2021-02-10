import makeDraggable from './makeDraggable.js'
import {displaySelectedTeam,hideList} from './ui.js'
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
    createPlayerIcon(number,name);
}

function createPlayerIcon(number,name){
    const field = document.querySelector('.field');
    field.innerHTML += getPlayerElement(number,name);
    hideList();
    makePlayerDraggable();
}

function getPlayerElement(number,name){
    return `<div class="player-model player-icon">
    <svg width="52.00000000000001" height="44" xmlns="http://www.w3.org/2000/svg">
        <g>
            <title>background</title>
            <rect x="-1" y="-1" width="54" height="46" id="canvas_background" fill="none" />
            <g id="canvasGrid" display="none">
                <rect id="svg_1" width="100%" height="100%" x="0" y="0" stroke-width="0"
                    fill="url(#gridpattern)" />
            </g>
        </g>
        <g>
            <title>Click en el nombre para borrar jugador</title>
            <rect fill="#0d1c4e" stroke-opacity="null" x="10.79408" y="1.74288" width="28.88527"
                height="39.63909" id="svg_26" />
            <rect fill="#0d1c4e" stroke-opacity="null" x="22.08157" y="-9.38248" width="89.74359"
                height="55.10556" id="svg_27"
                transform="matrix(0.11267494015126664,-0.13428060550793872,0.13428060550793872,0.11267494015126664,-0.5787242092674678,17.830566470735473) " />

            <rect fill="#0d1c4e" stroke-opacity="null" x="139.08044" y="130.05117" width="89.74359"
                height="55.10556" id="svg_3"
                transform="rotate(-81 41.31094741821289,10.888059616088865) matrix(0.11267494015126664,-0.13428060550793872,0.13428060550793872,0.11267494015126664,-0.5787242092674678,17.830566470735473) " />

            <text class="player-number" x="-24.40934" y="-24.87449" fill="#ffffff" stroke-width="0"
                stroke-opacity="null" id="svg_32" font-size="4" font-family="sans-serif"
                text-anchor="middle"
                transform="matrix(5.5037063068223,0,0,4.985333955760002,159.81749203808607,150.19696718464186) "
                stroke="#0d1c4e">${number}</text>
        </g>
    </svg>

    <button type="button" class="player-name">${name}</button>
</div>`
}

function makePlayerDraggable(){
    const players = document.querySelectorAll('.player-icon')
    players.forEach(player=>{
        makeDraggable(player);
    })
}


