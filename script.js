const button = document.getElementById('myButton');

function plzz() {
    var positionRan = Math.floor(Math.random() * 1000);
    return String(positionRan) + 'px';
}

var positionRan = Math.floor(Math.random() * 1000);
var inPos = String(positionRan) + 'px';

button.addEventListener('click', () => {
    button.style.position = 'absolute';
    button.style.top = plzz();
    button.style.left = plzz();
});
