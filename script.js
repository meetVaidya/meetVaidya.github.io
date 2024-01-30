const button = document.getElementById('myButton');

var positionRan;
var inPos = String(positionRan) + 'px';

function plzz(vp) {
    positionRan = Math.floor(Math.random() * 1000);
    if (positionRan > vh) {
        plzz();
    } else if (positionRan > vw) {
        plzz();
    }
    return String(positionRan) + 'px';
}

button.addEventListener('click', () => {
    button.style.position = 'absolute';
    button.style.top = plzz(vw);
    button.style.left = plzz(vh);
});

let vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
);
let vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
);

button.addEventListener('click', () => {
    console.log(vw, vh);
    console.log(positionRan);
});
