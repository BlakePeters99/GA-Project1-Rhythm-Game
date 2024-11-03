let sound1 = document.getElementById('audio1');
let sound2 = document.getElementById('audio2');
let sound3 = document.getElementById('audio3');
let sound4 = document.getElementById('audio4');
let sound5 = document.getElementById('audio5');
let sound6 = document.getElementById('audio6');
let sound7 = document.getElementById('audio7');
let drum = document.getElementById("drum");
let songNav = document.getElementById("songNav");
let currentSong = 1;

function startSong(num) {
    console.log(num);
    stopSong();
    let sound;
    switch (num){
        case 1:
            sound = sound1
            currentSong = 1;
            sound.currentTime = 0;
            break;
            case 2: 
            sound = sound2
            // Skips long intro
            sound.currentTime = 17;
            currentSong = 2;
            break;
            case 3: 
            sound = sound3
            sound.currentTime = 0;
            currentSong = 3;
            break;
            case 4: 
            sound = sound4
            sound.currentTime = 0;
            currentSong = 4;
            break;
            case 5: 
            sound = sound5
            sound.currentTime = 0;
            currentSong = 5;
            break;
            case 6: 
            sound = sound6
            sound.currentTime = 0;
            currentSong = 6;
            break;
            case 7: 
            sound = sound7
            sound.currentTime = 0;
            currentSong = 7;
            break;

    }

    sound.volume = 0.3;
    sound.play();
    songNav.style.backgroundColor = 'green';
}

function stopSong() {
    let sound;
    switch(currentSong){
        case 1:
            sound = sound1;
            break;
        case 2:
            sound = sound2;
            break;
        case 3:
            sound = sound3;
            break;
        case 4:
            sound = sound4;
            break;
        case 5:
            sound = sound5;
            break;
        case 6:
            sound = sound6;
            break;
        case 7:
            sound = sound7;
            break;
    }
    sound.pause();
    songNav.style.backgroundColor = 'red';
}

function playVideo() {
    drum.currentTime = 0.6;
    drum.play();
}

