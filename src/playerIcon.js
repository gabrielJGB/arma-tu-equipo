import { hideList,displayMessage, displaySelectedTeam } from './ui.js'
import makeDraggable from './makeDraggable.js'
import getTeamName from './index.js'


export default function createPlayerIcon(number, name) {
    const field = document.querySelector('.field');
    let playerDiv = getPlayerElement(number, name);
    field.appendChild(playerDiv);
    makePlayerDraggable();
    addDeletePlayerEvent(playerDiv);
    playerDiv.addEventListener('contextmenu', deletePlayerDesktop);
    setColors(playerDiv);
    hideList();
    displayMessage();
}




function deletePlayerDesktop(e) {
    e.preventDefault();
    deletePlayer(this)

}

function getPlayerElement(number, name) {
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

function setColors(playerDiv) {

    let teamName = getTeamName()

    if (teamName == "aldosivi") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#ffec00';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#266517';
    }


    else if (teamName == "argentinos") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = 'red';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ffffff';
    }


    else if (teamName == "arsenal") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#7a0210';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#5fc7ff';
    }


    else if (teamName == "atltucuman") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#5fc7ff';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ffffff';
    }


    else if (teamName == "banfield") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#09722c';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ffffff';
    }


    else if (teamName == "boca") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#103984';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ffe142';
    }


    else if (teamName == "cantralcdba") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#000000';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ffffff';
    }


    else if (teamName == "colon") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#000000';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ff0000';
    }


    else if (teamName == "defyjusticia") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#025d46';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#f3f327';
    }


    else if (teamName == "estudiantes") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#ffffff';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ba0822';
    }


    else if (teamName == "gimnasia") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#ffffff';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#2d377d';
    }


    else if (teamName == "godoycruz") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#285379';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ffffff';
    }


    else if (teamName == "huracan") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#ffffff';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#e81723';
    }


    else if (teamName == "independiente") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#ff000f';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ffffff';
    }


    else if (teamName == "lanus") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#8d1a46';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ffffff';
    }


    else if (teamName == "newells") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#000000';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ff0000';
    }


    else if (teamName == "patronato") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#000000';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ff0000';
    }


    else if (teamName == "racing") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#10b4f5';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ffffff';
    }


    else if (teamName == "river") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#ffffff';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ff0000';
    }


    else if (teamName == "central") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#09428b';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#f7c83a';
    }


    else if (teamName == "sanlorenzo") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#102f61';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ff3a3a';
    }


    else if (teamName == "talleres") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#ffffff';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#041d47';
    }


    else if (teamName == "union") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#ffffff';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#ff0000';
    }


    else if (teamName == "velez") {
        for (let i = 1; i < 4; i++) {
            playerDiv.children[0].children[1].children[i].attributes[0].value = '#ffffff';
        }
        playerDiv.children[0].children[1].children[4].attributes[3].value = '#100ea9';
    }
}