# Rhythm Game
#### Made by Blake Peters

<br />

## Description
#### User can select a song from 7 options and press buttons that light up to the beat of that particular song. As the user presses more buttons, they are able to unlock fun gifs that also dance to the song. Every click on the lit up button will change the background color randomly. Everything can be reset by changing songs and a stop button to stop the current song being playing.

<br />

## Code
#### Gets correct song choice ands custom start time, volume, beat frequency, and color of buttons. 
<details> 

<summary>Show / Hide Code</summary>
    function startSong(num) {
        let sound, time;

        switch (num) {
                case 1:
                    sound = sound1;
                    currentSong = 1;
                    sound.currentTime = 0;
                    sound.volume = 0.3;
                    time = 480;
                    color = "red";
                    break;
                case 2:
                    sound = sound2;
                    // Skips long intro
                    sound.currentTime = 19.5;
                    currentSong = 2;
                    sound.volume = 0.3;
                    time = 2000;
                    color = "purple";
                    break;
                case 3:
                    sound = sound3;
                    sound.currentTime = 25;
                    currentSong = 3;
                    sound.volume = 0.3;
                    time = 480;
                    color = "gold";
                    break;
                case 4:
                    sound = sound4;
                    sound.currentTime = 45;
                    currentSong = 4;
                    sound.volume = 0.1;
                    time = 480;
                    color = "skyblue";
                    break;
                case 5:
                    sound = sound5;
                    sound.currentTime = 32;
                    currentSong = 5;
                    sound.volume = .3;
                    time = 500;
                    color = "skyblue";
                    break;
                case 6:
                    sound = sound6;
                    sound.currentTime = 0;
                    currentSong = 6;
                    sound.volume = 0.3;
                    time = 4000;
                    color = "red";
                    break;
                case 7:
                    sound = sound7;
                    sound.currentTime = 0;
                    currentSong = 7;
                    sound.volume = 0.3;
                    time = 750;
                    color = "yellow";
                    break;
            }
        sound.play();
            playing = true;

            // Visual button effects
            playButtons(buttonCycle, time, color);     
    }    

</details>

<br />

#### Using recursion to repeatedly cycle the buttons on a specific beat and color.
#### buttonCycle is a global variable, for scaling and having the potential for multiple songs to be played at the same time with beat buttons colors correctly lined up.

<details> 

<summary>Show / Hide Code</summary>
    function playButtons(buttonCycle, timeInterval, color) {
        // To stop recursion, playing must be set to false
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

</details>

<br />

#### Checks to see if button was pressed while having a color assigned. Then resets the color back to grey and updates counter, then checks counter to see if anything can be unlocked, and finally adds a random background color.

<details> 

<summary>Show / Hide Code</summary>
    function buttonCount(num) {
        let button = getButton(num);

        // If button was pressed while colored
        if (button.style.backgroundColor !== "grey") {
            playDrumVideo();
            // Reset button color
            button.style.backgroundColor = "grey";
            // Update button counter
            buttonCounter++;
            counter.innerText = `Beats Hit: ${buttonCounter}   `

            // Unlock gifs when enough beats are counted
            // Cascading style for efficiency
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
            else if (buttonCounter >= 5) {
                img1.style.display = "flex";
                lockedImg1.style.display = "none";
                lockedText1.style.display = "none";
            }

            // Background color changes to random
            randomBackgroundColor();
        }
    }

</details>

<br />

#### Stops current song being played. Playing is a global variable to stop the recursion instances. 
#### Adds a pause functionality to startSong() function to allow past recusive calls to end and restart.

<details> 

<summary>Show / Hide Code</summary>
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
        // Pauses song and stops the recursion loop in playbuttons()
        sound.pause();
        playing = false;
    }


    setTimeout(() => {
            let sound, time;

            // Setting correct song, loudness, start time in mp3,
            // beat frequency, and color of buttons
            switch (num) {
                case 1:
                    sound = sound1
                    currentSong = 1;
                    sound.currentTime = 0;
                    sound.volume = 0.3;
                    time = 480;
                    color = "red";
                    break;
            }
            sound.play();
            playing = true;

            // Visual button effects
            playButtons(buttonCycle, time, color);
        }, 1000);
        
</details>

<br />

#### Comments above function cleraly describe their use

<details> 

<summary>Show / Hide Code</summary>
    // Background color changes to random color
    function randomBackgroundColor() {
        let r, g, b;

        // Math behind random rgb values
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    // Used code twice so made a simple function
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

    // Plays drum video when colored button is pressed
    function playDrumVideo() {
        drum.currentTime = 0.6;
        drum.play();
    }

</details>