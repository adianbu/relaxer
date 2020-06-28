var container = document.getElementById('container');
var text = document.getElementById('text');

var time = 7500;

var breatheTime= (time/5)*2;
var holdTime= time/5;

breatheAnimation();

function breatheAnimation(){
    text.innerText = 'Breathe in';
    container.className = 'container grow';

    setTimeout(() =>{
        setTimeout(()=>{
            text.innerText = 'Breathe out';
            container.className = 'container shrink';
    
        },holdTime);
        text.innerText = 'Hold';


    },breatheTime);

    
}

setInterval(breatheAnimation, time);