let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let lockedImg1 = document.getElementById('lockedImg1');
let lockedImg2 = document.getElementById('lockedImg2');
let lockedImg3 = document.getElementById('lockedImg3');
let lockedImg4 = document.getElementById('lockedImg4');
let lockedText1 = document.getElementById('lockedText1');
let lockedText2 = document.getElementById('lockedText2');
let lockedText3 = document.getElementById('lockedText3');
let lockedText4 = document.getElementById('lockedText4');
let sound1 = document.getElementById('audio1');
let sound2 = document.getElementById('audio2');
let sound3 = document.getElementById('audio3');
let sound4 = document.getElementById('audio4');
let sound5 = document.getElementById('audio5');
let sound6 = document.getElementById('audio6');
let sound7 = document.getElementById('audio7');
let drum = document.getElementById("drum");
let counter = document.getElementById("counter");
let currentSong = 1;
let buttonCounter = 0;
let buttonCycle = 0;
let playing = false;

// Hard coded variable to access in buttonCount()
b1.style.backgroundColor = "grey";
b2.style.backgroundColor = "grey";
b3.style.backgroundColor = "grey";
b4.style.backgroundColor = "grey";

function startSong(num) {
    resetSong();

    // Delays starting of new song so recursion processes stop
    setTimeout(() => {
        let sound, time;

        switch (num) {
            case 1:
                sound = sound1
                currentSong = 1;
                sound.currentTime = 0;
                sound.volume = 0.3;
                time = 480;
                
                color = "red";
                break;
            case 2:
                sound = sound2
                // Skips long intro
                sound.currentTime = 19.5;
                currentSong = 2;
                sound.volume = 0.3;
                time = 2000;
                color = "purple";
                break;
            case 3:
                sound = sound3
                sound.currentTime = 25;
                currentSong = 3;
                sound.volume = 0.3;
                time = 480;
                color = "gold";
                break;
            case 4:
                sound = sound4
                sound.currentTime = 45;
                currentSong = 4;
                sound.volume = 0.1;
                time = 480;
                color = "skyblue";
                break;
            case 5:
                sound = sound5
                sound.currentTime = 32;
                currentSong = 5;
                sound.volume = .3;
                time = 500;
                color = "skyblue";
                break;
            case 6:
                sound = sound6
                sound.currentTime = 0;
                currentSong = 6;
                sound.volume = 0.3;
                time = 4000;
                color = "red";
                break;
            case 7:
                sound = sound7
                sound.currentTime = 0;
                currentSong = 7;
                sound.volume = 0.3;
                time = 750;
                color = "yellow";
                break;
        }
        sound.play();
        playing = true;

        playButtons(buttonCycle, time, color);
    }, 1000);
}

function resetSong() {
    // Stops previous song that user played and swaps to new one
    stopSong();
    // Resets button counter 
    buttonCounter = 0;
    counter.innerText = `Beats Hit: ${buttonCounter}   `

    img1.style.display = "none";
    lockedImg1.style.display = "flex";
    lockedText1.style.display = "block";
    img2.style.display = "none";
    lockedImg2.style.display = "flex";
    lockedText2.style.display = "block";
    img3.style.display = "none";
    lockedImg3.style.display = "flex";
    lockedText3.style.display = "block";
    img4.style.display = "none";
    lockedImg4.style.display = "flex";
    lockedText4.style.display = "block";

    b1.style.backgroundColor = "grey";
    b2.style.backgroundColor = "grey";
    b3.style.backgroundColor = "grey";
    b4.style.backgroundColor = "grey";
}

function stopSong() {
    let sound;
    switch (currentSong) {
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
    playing = false;
}

function playDrumVideo() {
    drum.currentTime = 0.6;
    drum.play();
}

function buttonCount(num) {
    let button = getButton(num);
    let r,g,b;
    if (button.style.backgroundColor !== "grey") {
        playDrumVideo();
        button.style.backgroundColor = "grey";
        buttonCounter++;
        counter.innerText = `Beats Hit: ${buttonCounter}   `

        if (buttonCounter >= 50) {
            img4.style.display = "flex";
            lockedImg4.style.display = "none";
            lockedText4.style.display = "none";
        }
        else if (buttonCounter >= 25) {
            img3.style.display = "flex";
            lockedImg3.style.display = "none";
            lockedText3.style.display = "none";
        }
        else if (buttonCounter >= 10) {
            img2.style.display = "flex";
            lockedImg2.style.display = "none";
            lockedText2.style.display = "none";
        }
        if (buttonCounter >= 5) {
            img1.style.display = "flex";
            lockedImg1.style.display = "none";
            lockedText1.style.display = "none";
        }

        r = Math.round(Math.random()*255);
        g = Math.round(Math.random()*255);
        b = Math.round(Math.random()*255);


        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

function playButtons(buttonCycle, timeInterval, color) {
    if (playing) {
        let b;
        buttonCycle++;

        if (buttonCycle > 4) {
            buttonCycle = 1;
        }

        b = getButton(buttonCycle);
        b.style.backgroundColor = color;

        setTimeout(playButtons, timeInterval, buttonCycle, timeInterval, color);
    }
}

function getButton(buttonNum) {
    let b;

    switch (buttonNum) {
        case 1:
            b = b1;
            break;
        case 2:
            b = b2;
            break;
        case 3:
            b = b3;
            break;
        case 4:
            b = b4;
            break;
    }
    return b
}