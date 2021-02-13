export default function makeDraggable(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragDown;
    elmnt.ontouchstart = dragDown;

    function dragDown(e) {
        
        e = e || window.event;
        e.preventDefault();
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
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDrag;

    }

    function elementDrag(e) {

        e = e || window.event;

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
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchstart = null;
        document.ontouchmove = null;
    }
}

