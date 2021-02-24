import { hideList, displayMessage, displaySelectedTeam, togglePlayerButton,getPlayerElement} from './ui.js'
import makeDraggable from './makeDraggable.js'
import getTeamName from './index.js'



export function createPlayerIcon(number, name, jerseyColor, numberColor, top, left, icon,id) {
    const field = document.querySelector('.field');
    let playerDiv = getPlayerElement(number, name, jerseyColor, numberColor, icon);
    if(top != null && left != null){
        playerDiv.style.top = top;
        playerDiv.style.left = left;
    }
    if(id != null){
        playerDiv.setAttribute("data-id",id.value);
    }
    playerDiv.className = "player-model player-icon ";
    field.appendChild(playerDiv);
    deletePlayerEventMobile(playerDiv);
    playerDiv.addEventListener('dblclick', deletePlayerEventDesktop);
    makePlayerDraggable();
    hideList("-100%");
    togglePlayerButton(id);
    displayMessage();
}


function makePlayerDraggable() {
    const players = document.querySelectorAll('.player-icon')
    players.forEach(player => {
        makeDraggable(player);
    })
}


function deletePlayerEventDesktop() {
    deletePlayer(this);
}

let taps = 0;

function deletePlayerEventMobile(player) {
    let tapDelay = 300;
    player.addEventListener('touchstart', detectDoubleTap);

    function detectDoubleTap() {
        taps++;
        if (taps == 2) {
            deletePlayer(player);
            taps = 0;
        }
        setTimeout(() => {
            taps = 0;
        }, tapDelay)

    }
}

function deletePlayer(player) {
    
    let id = player.attributes[0];
    togglePlayerButton(id);
    player.style.transition = "all 0.4s";
    player.style.transform = "scale(0)";

    setTimeout(() => {
        player.remove()
    }, 400);
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

        jerseyColor = '#ff000f';
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
    else if (teamName == "sarmiento") {

        jerseyColor = '#027126';
        numberColor = '#ffffff';
        return [jerseyColor, numberColor];
    }
    else if (teamName == "platense") {

        jerseyColor = '#865a42';
        numberColor = '#ffffff';
        return [jerseyColor, numberColor];
    }
}