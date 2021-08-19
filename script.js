"use strict";

//////////
// Project 1
//////////
console.log('Snakes & Ladders\n\n');

// create menu
const makeMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerText = 'Welcome, you are now playing Snakes & Ladders.\n\nHere are the rules:\n-Click the white die below to produce a number.\n-The player tokens will then take the number of steps according to the die number.\n-Reach the last square to finish the game.';
    document.querySelector('body').insertBefore(menu, document.querySelector('body').childNodes[1]);
};

// create square board
const makeSBoard = (num) => {
    const board = document.createElement('div');
    board.classList.add('board', 'sBoard');
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = 'image/jungle.jpg';
    document.querySelector('body').append(image);
    document.querySelector('body').insertBefore(board, document.querySelector('body').childNodes[2]);

    // adjust board frame accordingly
    document.querySelector('.sBoard').style.width = (100 * num + num * 2) + 'px';
    document.querySelector('.sBoard').style.height = (100 * num + num * 2) + 'px';

    let x = 0;
    for (let i = 0; i < num / 2; i++) {
        // upper row, decreasing tile number
        for (let j = num ** 2 - (num * x); j > num ** 2 - (num * (x + 1)); j--) {
            makeTiles(j);
        };
        // lower row, increasing tile number
        for (let k = num ** 2 - (num * (x + 2)) + 1; k <= num ** 2 - (num * (x + 1)); k++) {
            makeTiles(k);
        };
        x += 2;
    };
};

// create pyramid board (EXPERIMENTAL)
const makePBoard = () => {
    const board = document.createElement('div');
    board.classList.add('board1', 'pBoard');
    const image = document.createElement('img');
    image.classList.add('image1');
    image.src = 'image/volcano.jpg';
    document.querySelector('body').append(image);
    document.querySelector('body').insertBefore(board, document.querySelector('body').childNodes[2]);

    // array of board layout
    const pBoardArray = [
        [9, 10, 53, 54, 55, 56, 57, 34, 33],
        [8, 11, 52, 71, 72, 73, 58, 35, 32],
        [7, 12, 51, 70, 81, 74, 59, 36, 31],
        [6, 13, 50, 69, 80, 75, 60, 37, 30],
        [5, 14, 49, 68, 79, 76, 61, 38, 29],
        [4, 15, 48, 67, 78, 77, 62, 39, 28],
        [3, 16, 47, 66, 65, 64, 63, 40, 27],
        [2, 17, 46, 45, 44, 43, 42, 41, 26],
        [1, 18, 19, 20, 21, 22, 23, 24, 25]
    ];
    for (let i = 0; i < pBoardArray.length; i++) {
        for (let j = 0; j < pBoardArray.length; j++) {
            makePTiles(pBoardArray[i][j]);
        };
    };
};

// create tiles for sBoard
const makeTiles = (num) => {
    const tiles = document.createElement('div');
    tiles.classList.add('tile');
    document.querySelector('.board').append(tiles);
    tiles.innerText = num;
    tiles.setAttribute('id', 'tile' + num);
};
// create tiles for pBoard
const makePTiles = (num) => {
    const tiles = document.createElement('div');
    tiles.classList.add('tile1');
    document.querySelector('.board1').append(tiles);
    tiles.innerText = num;
    tiles.setAttribute('id', 'tile' + num);
};


// create the game token(s)
const makeToken = (num) => {
    // const start = document.createElement('div');
    // start.classList.add('tile', 'start');
    // start.innerText = 'Start';
    // document.querySelector('body').insertBefore(start, document.querySelector('body').childNodes[3]);
    
    // document.querySelector('body').insertBefore(token, document.querySelector('body').childNodes[3]);
    
    for (let i = 1; i <= num; i++) {
        const token = document.createElement('div');
        token.classList.add('token' + i);
        document.querySelector('#tile1').append(token);
        const tokenTop = document.createElement('div');
        tokenTop.classList.add('tokenTop' + i, 'player' + i);
        tokenTop.innerText = i;
        token.append(tokenTop);
        const tokenBottom = document.createElement('div');
        tokenBottom.classList.add('tokenBottom' + i, 'player' + i);
        token.append(tokenBottom);
    };
};

// create the die
const makeDie = () => {
    const die = document.createElement('div');
    die.classList.add('die', 'die-body');
    die.innerText = "";
    document.querySelector('body').insertBefore(die, document.querySelector('body').childNodes[2]);
};

// create ladder
const makeArrow = (num) => {
    const arrow = document.createElement('div');
    arrow.classList.add('arrow');
    document.querySelector('body').insertBefore(arrow, document.querySelector('body').childNodes[5]);
    for (let i = 0; i < num; i++) {
        const ladder = document.createElement('img');
        ladder.classList.add('ladder' + i);
        ladder.src = '/image/ladder' + i + '.png';
        arrow.append(ladder);
    };




    // for (let i = 0; i < num; i++) {
    //     const arrow1 = document.createElement('div');
    //     arrow1.classList.add('arrow' + i);
    //     arrow.append(arrow1);
    //     const arrowTip = document.createElement('div');
    //     arrowTip.classList.add('arrowTip' + i);
    //     arrow1.append(arrowTip);         
    //     const arrowBody = document.createElement('div');
    //     arrowBody.classList.add('arrowBody' + i);
    //     arrow1.append(arrowBody);
    // };
};
// create snake
const makeSnake = (num) => {
    const snake = document.createElement('div');
    snake.classList.add('snake');
    document.querySelector('body').insertBefore(snake, document.querySelector('body').childNodes[6]);
    // css snakes
    for (let i = 0; i < num; i++) {
        const snake1 = document.createElement('div');
        snake1.classList.add('snake' + i);
        snake.append(snake1);
        const snakeHead = document.createElement('div');
        snakeHead.classList.add('snakeHead' + i);
        snake1.append(snakeHead);
        const snakeBody = document.createElement('div');
        snakeBody.classList.add('snakeBody' + i);
        snake1.append(snakeBody);    
        const snakeTail = document.createElement('div');
        snakeTail.classList.add('snakeTail' + i);
        snake1.append(snakeTail);    
    };
    // image snakes
    for (let i = 3; i < 5; i++) {
        const snakeImage = document.createElement('img');
        snakeImage.classList.add('snake' + i);
        snakeImage.src = '/image/snake' + i + '.png';
        snake.append(snakeImage);
    }
        





};
// create jump points for sname and ladder
const jumpPoint = (startPos, endPos) => {
    if (tilePos[pTurn - 1] === startPos) {
        setTimeout(function() {
            document.querySelector('#tile' + tilePos[pTurn - 1]).append(document.querySelector('.token' + pTurn));
        }, timer/2);
        setTimeout(function() {
            tilePos[pTurn - 1] = endPos;
        }, timer);
        if (startPos < endPos) {
            console.log(`player${pTurn} reached tile ${startPos} and climbs the ladder`);
        } else {
            console.log(`player${pTurn} reached tile ${startPos} and was swallowed by a snake`);
        };
    };
};



////////////////////
// Start
////////////////////

const h1 = document.createElement('h1');
h1.classList.add('title');
h1.innerText = 'Welcome to Snakes & Ladders!'; // maybe can upgrade to Slides and Esca-Ladders
document.querySelector('body').prepend(h1);

// game stats
let nRows = 10; // number of rows for the board
let tilePos = [1, 1]; // player [1, 2]'s starting position
let timer = 300; // time delay to move the token
let dieSided = 2; // maximum number on the die
let pTurn = 0; // which player's turn to go

makeMenu();
makeSBoard(nRows);
// makePBoard();
makeToken(2);
makeDie();
makeArrow(3);
makeSnake(3);


// roll die, get number
document.querySelector('.die-body').addEventListener('click', (e) => {
// document.querySelector('.die-body').onclick = function rollDie() {
    const dieResult = Math.ceil(Math.random() * dieSided);
    document.querySelector('.die-body').innerText = dieResult;

    // determine which player's turn
    pTurn = (pTurn % 2) + 1;

    //move player token
    console.log(`player${pTurn} was on tile ${tilePos[pTurn - 1]} and die result is ${dieResult}`);
    tilePos[pTurn - 1] += dieResult;

    // // snakes, higher to lower tile position
    jumpPoint(28, 12);
    jumpPoint(49, 34);
    jumpPoint(62, 52);
    jumpPoint(78, 43);
    jumpPoint(99, 80);
    // // ladders, lower to higher tile position
    jumpPoint(4, 23);
    jumpPoint(37, 88);
    jumpPoint(51, 90);

    if (tilePos[pTurn - 1] >= (nRows * nRows)) {
        tilePos[pTurn - 1] = (nRows * nRows);
        document.querySelector('#tile' + tilePos[pTurn - 1]).append(document.querySelector('.token' + pTurn));
        setTimeout(function() {
            alert(`Game ends. Player${pTurn} has reached the finish tile.\nRefresh the browser to play again.`);
        }, 100);
    };

    setTimeout(function() {
        document.querySelector('#tile' + tilePos[pTurn - 1]).append(document.querySelector('.token' + pTurn));
        console.log(`player${pTurn} is now on tile ${tilePos[pTurn - 1]}`);
    }, timer);

});
