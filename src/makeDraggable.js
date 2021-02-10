export default function makeDraggable(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragDown;
    elmnt.ontouchstart = dragDown;

    function dragDown(e) {
        
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        if(e.type == 'mousedown'){
            pos3 = e.clientX;
            pos4 = e.clientY;
        }
        else{
            pos3 = e.touches[0].clientX;
            pos4 = e.touches[0].clientY;
        }
        document.onmouseup = closeDragElement;
        document.ontouchend = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDrag;

    }

    function elementDrag(e) {

        e = e || window.event;
        // e.preventDefault();
        // calculate the new cursor position:
        if (e.type === 'mousemove') {
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
        }
        else{
            pos1 = pos3 - e.touches[0].clientX;
            pos2 = pos4 - e.touches[0].clientY;
            pos3 = e.touches[0].clientX;
            pos4 = e.touches[0].clientY;
        }

        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchstart = null;
        document.ontouchmove = null;
    }
}

