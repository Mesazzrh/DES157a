(function () {
    'use strict';
    console.log('reading js');

    const startBtn = document.querySelector('#start-game');
    const tipAtStart = document.querySelector('body>p');
    const diceContainer = document.querySelector('#dice-container');
    const userInfo = document.querySelector('#user-info');
    const droolText = document.querySelector('#droolNtext p');
    const rollNpassBtns = document.querySelectorAll('#rollNpass-btns button');
    const divInrollNpassBtns = document.querySelectorAll('#rollNpass-btns > div');
    const quitNsoundBtns = document.querySelector('#quitNsound-btns');
    const gameMsg = document.querySelector('#gameMsg');
    const startOverBtn = document.querySelector('#startOver');
    const quitGameBtn = document.querySelector('#quit-btn');
    const soundBtn = document.querySelector('#sound-btn');
    const rollBtn = document.querySelector('#roll-btn');
    const passBtn = document.querySelector('#pass-btn');
    const p1Score = document.querySelector('#p1-score');
    const p2Score = document.querySelector('#p2-score');

    // Audio Setup
    const basicBtnSound = new Audio('audio/basic-btn-sound.mp3');
    const winSound = new Audio('audio/winning-sound.mp3');
    let isMuted = false;

    // Initialize Scores
    p1Score.innerHTML = 0;
    p2Score.innerHTML = 0;

    // Game Data Object
    const gameData = {
        dice: ['images/die1.svg', 'images/die2.svg', 'images/die3.svg', 'images/die4.svg', 'images/die5.svg', 'images/die6.svg'],
        players: ['Player 1', 'Player 2'],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        score: [0, 0],
        gameEnd: 30
    };

    // Event Listeners
    startBtn.addEventListener('click', initializeGame);
    quitGameBtn.addEventListener('click', quitGame);
    soundBtn.addEventListener('click', toggleSound);
    rollBtn.addEventListener('click', rollDice);
    passBtn.addEventListener('click', passTurn);
    startOverBtn.addEventListener('click', restartGame);

    rollBtn.addEventListener('click', clickEffect);
    passBtn.addEventListener('click', clickEffect);

    // Game Initialization
    function initializeGame() {
        basicBtnSound.play();
        startBtn.style.display = 'none';
        tipAtStart.style.display = 'none';
        diceContainer.style.display = 'flex';
        userInfo.style.display = 'block';
        droolText.style.display = 'block';
        quitNsoundBtns.style.display = 'flex';
        for (const eachBtn of rollNpassBtns) {
            eachBtn.style.display = 'block';
            eachBtn.style.cursor = 'pointer';
        }
        for (const eachDiv of divInrollNpassBtns) {
            eachDiv.style.cursor = 'pointer';
        }

        gameData.index = Math.floor(Math.random() * 2);
        gameMsg.innerHTML = `${gameData.players[gameData.index]} starts!`;

    }

    // Quit Game
    function quitGame() {
        basicBtnSound.play();
        startBtn.style.display = 'block';
        tipAtStart.style.display = 'block';
        diceContainer.style.display = 'none';
        userInfo.style.display = 'none';
        droolText.style.display = 'none';
        quitNsoundBtns.style.display = 'none';
        for (const eachBtn of rollNpassBtns) {
            eachBtn.style.display = 'none';
        }
        for (const eachDiv of divInrollNpassBtns) {
            eachDiv.style.cursor = 'default';
        }
        gameMsg.style.display = 'none';
        startOverBtn.style.display = 'none';
    }

    // Sound On/Off button
    function toggleSound() {
        if (!isMuted) { basicBtnSound.play() };
        isMuted = !isMuted;
        soundBtn.innerHTML = isMuted ? 'Unmute' : 'Mute';
        soundBtn.style.opacity = isMuted ? '0.5' : '1';
    }

    // Roll Dice Logic
    function rollDice() {
        if (!isMuted) { basicBtnSound.play() };
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData.roll1, gameData.roll2, gameData.rollSum);

        if (gameData.rollSum === 2) {
            gameData.score[gameData.index] = 0;
            updateScores();
            switchPlayers();
            gameMsg.innerHTML = `<p>Snake Eyes! You lose all your points! ${gameData.players[gameData.index]}'s turn!</p>`;
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            switchPlayers();
            gameMsg.innerHTML = `<p>Rolled a 1, switching to ${gameData.players[gameData.index]}.</p>`;
        } else {
            gameData.score[gameData.index] += gameData.rollSum;
            gameMsg.innerHTML = `<p>${gameData.players[gameData.index]} rolled ${gameData.rollSum}!</p>`;
            updateScores();
            checkWinner();
        }

        document.querySelector('#nose1').src = gameData.dice[gameData.roll1 - 1];
        document.querySelector('#nose2').src = gameData.dice[gameData.roll2 - 1];
    }

    // Pass Turn
    function passTurn() {
        if (!isMuted) { basicBtnSound.play() };
        switchPlayers();
        gameMsg.innerHTML = `<p>Passed to ${gameData.players[gameData.index]}</p>`;
    }

    // Switch Players
    function switchPlayers() {
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
    }

    // Update Scores Display
    function updateScores() {
        p1Score.innerHTML = gameData.score[0];
        p2Score.innerHTML = gameData.score[1];
    }

    // Check for Winner
    function checkWinner() {
        if (gameData.score[gameData.index] >= gameData.gameEnd) {
            if (!isMuted) { winSound.play() };
            for (const eachDiv of divInrollNpassBtns) {
                eachDiv.style.opacity = '0.5';
                eachDiv.style.cursor = 'default';
                eachDiv.style.pointerEvents = 'none';
            }
            gameMsg.innerHTML = `${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!`;
            startOverBtn.style.display = 'block';
            startOverBtn.style.zIndex = '1';
            diceContainer.style.display = 'none';
        }
    }

    // Restart Game
    function restartGame() {
        if (!isMuted) { basicBtnSound.play() };
        gameData.score = [0, 0];
        gameData.index = 0;
        updateScores();
        for (const eachDiv of divInrollNpassBtns) {
            eachDiv.style.opacity = '1';
            eachDiv.style.cursor = 'pointer';
            eachDiv.style.pointerEvents = 'auto';
        }
        gameMsg.innerHTML = '';
        startOverBtn.style.display = 'none';
        diceContainer.style.display = 'flex';
    }

    // Button Click Effect
    function clickEffect() {
        const self = this;
        self.style.transform = 'scale(0.9)';
        setTimeout(function () {
            self.style.transform = 'scale(1)';
        }, 100);
    };

})();