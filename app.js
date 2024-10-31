let sound1 = document.getElementById('audio1');
let sound2 = document.getElementById('audio2');
let drum = document.getElementById("drum");
let songNav = document.getElementById("songNav");

function startSong(num) {
    console.log(num);
    let sound;
    if (num === 1) {
        sound = sound1
        // Skips long intro
        sound.currentTime = 17;
    }
    else {
        sound = sound2
        sound.currentTime = 0;
    }

    sound.volume = 0.3;
    sound.play();
    songNav.style.backgroundColor = 'green';
}

function stopSong(num) {
    let sound;
    if (num === 1) {
        sound = sound1;
    }
    else {
        sound = sound2;
    }
    sound.pause();
    songNav.style.backgroundColor = 'red';
}

function playVideo() {
    drum.currentTime = 0.6;
    drum.play();
}

