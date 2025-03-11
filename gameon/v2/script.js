(function (){
    'use strict';
    console.log('reading js');

    const startBTN = document.querySelector('#start-game');
    const gameStarted = document.querySelector('#dice-container');
    const userInfo = document.querySelector('#user-info');
    const droolText = document.querySelector('#droolNtext p');
    const rollNpassBtns = document.querySelector('#rollNpass-btns');
    const quitNsoundBtns = document.querySelector('#quitNsound-btns');

    startBTN.addEventListener('click', function(){
        startBTN.style.display = 'none';
        gameStarted.style.display = 'flex';
        userInfo.style.display = 'block';
        droolText.style.display = 'block';
        rollNpassBtns.style.display = 'block';
        quitNsoundBtns.style.display = 'flex';
    });

    const quitGameBtn = document.querySelector('#quit-btn');
    quitGameBtn.addEventListener('click', function(){
        startBTN.style.display = 'block';
        gameStarted.style.display = 'none';
        userInfo.style.display = 'none';
        droolText.style.display = 'none';
        rollNpassBtns.style.display = 'none';
        quitNsoundBtns.style.display = 'none';
    });

    const soundBtn = document.querySelector('#sound-btn');
    soundBtn.addEventListener('click', function(){

    });


})();