(function (){
    'use strict';
    console.log('reading js');

    document.addEventListener('mousemove', pupilFollowMouse);
    function pupilFollowMouse(e){
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        // console.log(mouseX, mouseY);

        const leftPupil = document.querySelector('#left-eye pupil');
        const rightPupil = document.querySelector('#right-eye pupil');

        const leftEyeRect = document.querySelector('#left-eye').getBoundingClientRect();
        const rightEyeRect = document.querySelector('#right-eye').getBoundingClientRect();

        /* get the center coordinates of each eye to get the pupils only move around the center of each eye. */
        const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
        const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;
        const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
        const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;
        // console.log(`Left Center X: ${leftEyeCenterX}, Left Center Y: ${leftEyeCenterY} | Right Center X: ${rightEyeCenterX}, Right Center Y: ${rightEyeCenterY}`);



        // leftPupil.style.transform = `translate(-50%, -50%) translate(${}, ${})`;
        // rightPupil.style.transform = `translate(-50%, -50%) translate(${}, ${})`;
        
    };

    const startBTN = document.querySelector('#start-game');
    const tipAtStart = document.querySelector('body>p');
    const diceContainer = document.querySelector('#dice-container');
    const userInfo = document.querySelector('#user-info');
    const droolText = document.querySelector('#droolNtext p');
    const rollNpassBtns = document.querySelector('#rollNpass-btns');
    const quitNsoundBtns = document.querySelector('#quitNsound-btns');

    startBTN.addEventListener('click', function(){
        startBTN.style.display = 'none';
        tipAtStart.style.display = 'none';
        diceContainer.style.display = 'flex';
        userInfo.style.display = 'block';
        droolText.style.display = 'block';
        rollNpassBtns.style.display = 'block';
        quitNsoundBtns.style.display = 'flex';
    });

    startBTN.addEventListener('click', chooseRandomPlayer);
    function chooseRandomPlayer(){
        const randomNum = Math.round(Math.random());
        console.log(randomNum);

        const players = document.querySelectorAll('.player');
        let currentPlayer;
        if (randomNum === 0){
            currentPlayer = players[0];
        }
        else {
            currentPlayer = players[1];
        };
    };

    const quitGameBtn = document.querySelector('#quit-btn');
    quitGameBtn.addEventListener('click', function(){
        startBTN.style.display = 'block';
        tipAtStart.style.display = 'block'
        diceContainer.style.display = 'none';
        userInfo.style.display = 'none';
        droolText.style.display = 'none';
        rollNpassBtns.style.display = 'none';
        quitNsoundBtns.style.display = 'none';
    });

    const soundBtn = document.querySelector('#sound-btn');
    soundBtn.addEventListener('click', function(){

    });



    const rollBtn = document.querySelector('#roll-btn');
    const passBtn = document.querySelector('#pass-btn');
    const score = document.querySelectorAll('.score');
    let p1Score = document.querySelector('#p1-score');
    let p2Score = document.querySelector('#p2-score');
    p1Score, p2Score = 0;
    
    const gameData = {
        dice: ['images/die1.svg', 'images/die2.svg', 'images/die3.svg', 'images/die4.svg', 'images/die5.svg', 'images/die6.svg'],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        score: [0, 0],
        gameEnd: 29
    }

    

})();