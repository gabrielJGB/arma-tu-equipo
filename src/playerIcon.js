import { hideList, displayMessage, displaySelectedTeam } from './ui.js'
import makeDraggable from './makeDraggable.js'
import getTeamName from './index.js'


export function createPlayerIcon(number, name,jerseyColor,numberColor) {
    const field = document.querySelector('.field');
    let playerDiv = getPlayerElement(number, name, jerseyColor, numberColor);
    field.appendChild(playerDiv);
    addDeletePlayerEvent(playerDiv);
    playerDiv.addEventListener('contextmenu', deletePlayerDesktop);
    makePlayerDraggable();
    hideList();
    displayMessage();
}




function deletePlayerDesktop(e) {
    e.preventDefault();
    deletePlayer(this)

}

function getPlayerElement(number, name, jerseyColor, numberColor) {
    let playerDiv = document.createElement('DIV');
    playerDiv.className = "player-model player-icon ";
    playerDiv.setAttribute("contextmenu", "context-menu");
    playerDiv.innerHTML = `
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
            <title>Click derecho para borrar jugador</title>
            <rect fill="${jerseyColor}" stroke-opacity="null" x="10.79408" y="1.74288" width="28.88527"
                height="39.63909" id="svg_26" />
            <rect fill="${jerseyColor}" stroke-opacity="null" x="22.08157" y="-9.38248" width="89.74359"
                height="55.10556" id="svg_27"
                transform="matrix(0.11267494015126664,-0.13428060550793872,0.13428060550793872,0.11267494015126664,-0.5787242092674678,17.830566470735473) " />

            <rect fill="${jerseyColor}" stroke-opacity="null" x="139.08044" y="130.05117" width="89.74359"
                height="55.10556" id="svg_3"
                transform="rotate(-81 41.31094741821289,10.888059616088865) matrix(0.11267494015126664,-0.13428060550793872,0.13428060550793872,0.11267494015126664,-0.5787242092674678,17.830566470735473) " />

            <text class="player-number" x="-24.40934" y="-24.87449" fill="${numberColor}" stroke-width="0"
                stroke-opacity="null" id="svg_32" font-size="4" font-family="sans-serif"
                text-anchor="middle"
                transform="matrix(5.5037063068223,0,0,4.985333955760002,159.81749203808607,150.19696718464186) "
                stroke="#0d1c4e">${number}</text>
        </g>
    </svg>

    <button type="button" class="player-name">${name}</button>
`
    return playerDiv;
}

function makePlayerDraggable() {
    const players = document.querySelectorAll('.player-icon')
    players.forEach(player => {
        makeDraggable(player);
    })
}

function addDeletePlayerEvent(player) {
    let timer = 0, touchDelay = 500;
    player.addEventListener('touchstart', () => {
        timer = setTimeout(() => {
            timer = null;
            deletePlayer(player);
        }, touchDelay);
    });
    function cancel() {
        clearTimeout(timer);
    }
    player.addEventListener('touchend', cancel);
    player.addEventListener('touchmove', cancel);
}

function deletePlayer(player) {
    player.remove()
}

export function getColors() {

    let teamName = getTeamName()
    let numberColor, jerseyColor;
    if (teamName == "aldosivi") {

        jerseyColor = '#ffec00';
        numberColor = '#266517';
        return [jerseyColor, numberColor];
    }

    else if (teamName == "argentinos") {

        jerseyColor = 'red';
        numberColor = '#ffffff';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "arsenal") {

        jerseyColor = '#7a0210';
        numberColor = '#5fc7ff';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "atltucuman") {

        jerseyColor = '#5fc7ff';
        numberColor = '#ffffff';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "banfield") {

        jerseyColor = '#09722c';
        numberColor = '#ffffff';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "boca") {

        jerseyColor = '#103984';
        numberColor = '#ffe142';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "cantralcdba") {

        jerseyColor = '#000000';
        numberColor = '#ffffff';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "colon") {

        jerseyColor = '#000000';
        numberColor = '#ff0000';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "defyjusticia") {

        jerseyColor = '#025d46';
        numberColor = '#f3f327';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "estudiantes") {

        jerseyColor = '#ffffff';
        numberColor = '#ba0822';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "gimnasia") {

        jerseyColor = '#ffffff';
        numberColor = '#2d377d';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "godoycruz") {

        jerseyColor = '#285379';
        numberColor = '#ffffff';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "huracan") {

        jerseyColor = '#ffffff';
        numberColor = '#e81723';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "independiente") {

        jerseyColor = '#ff000f';
        numberColor = '#ffffff';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "lanus") {

        jerseyColor = '#8d1a46';
        numberColor = '#ffffff';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "newells") {

        jerseyColor = '#000000';
        numberColor = '#ff0000';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "patronato") {

        jerseyColor = '#000000';
        numberColor = '#ff0000';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "racing") {

        jerseyColor = '#10b4f5';
        numberColor = '#ffffff';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "river") {

        jerseyColor = '#ffffff';
        numberColor = '#ff0000';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "central") {

        jerseyColor = '#09428b';
        numberColor = '#f7c83a';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "sanlorenzo") {

        jerseyColor = '#102f61';
        numberColor = '#ff3a3a';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "talleres") {

        jerseyColor = '#ffffff';
        numberColor = '#041d47';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "union") {

        jerseyColor = '#ffffff';
        numberColor = '#ff0000';
        return [jerseyColor, numberColor];
    }


    else if (teamName == "velez") {

        jerseyColor = '#ffffff';
        numberColor = '#100ea9';
        return [jerseyColor, numberColor];
    }
}