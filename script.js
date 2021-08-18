"use strict";

//////////
// Project 1
//////////
console.log('Snakes & Ladders\n\n');

// create menu
const makeMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerText = 'Welcome, you are now playing Snakes & Ladders.\n\nThe rules are simple:\n-Click the white die below to produce a number.\n-The token will take the number of steps according to the die number.\n-Reach the last square to finish the game.';
    document.querySelector('body').insertBefore(menu, document.querySelector('body').childNodes[1]);
};

// create square board
const makeSBoard = (num) => {
    const board = document.createElement('div');
    board.classList.add('board', 'sBoard');
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
const makePBoard = (num) => {
    const board = document.createElement('div');
    board.classList.add('sBoard');
    document.querySelector('body').insertBefore(board, document.querySelector('body').childNodes[2]);
// 
// 
// 



};

// create the board tiles
const makeTiles = (num) => {
    const tiles = document.createElement('div');
    tiles.classList.add('tile');
    document.querySelector('.board').append(tiles);
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
        const arrow1 = document.createElement('div');
        arrow1.classList.add('arrow' + i);
        arrow.append(arrow1);
        const arrowTip = document.createElement('div');
        arrowTip.classList.add('arrowTip' + i);
        arrow1.append(arrowTip);         
        const arrowBody = document.createElement('div');
        arrowBody.classList.add('arrowBody' + i);
        arrow1.append(arrowBody);
    };
};
// create snake
const makeSnake = (num) => {
    const snake = document.createElement('div');
    snake.classList.add('snake');
    document.querySelector('body').insertBefore(snake, document.querySelector('body').childNodes[6]);
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
        console.log(`player jumps from ${startPos} to ${endPos}\n\n`);
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
let tilePos = [1, 1]; // player 1's position
// let tilePos2 = 0; // player 2's position
let timer = 500; // time delay to move the token
let dieSided = 9; // maximum number on the die
let pTurn = 0; // which player's turn to go

makeMenu();
makeSBoard(nRows);
makeToken(2);
makeDie();
// makePBoard(10); (EXPERIMENTAL)
makeArrow(3);
makeSnake(3);


// roll die, get number
document.querySelector('.die-body').addEventListener('click', (e) => {
// document.querySelector('.die-body').onclick = function rollDie() {
    const dieResult = Math.ceil(Math.random() * dieSided);
    document.querySelector('.die-body').innerText = dieResult;

    pTurn = (pTurn % 2) + 1;

    console.log(`player${pTurn} was on tile ${tilePos[pTurn - 1]} and die result is ${dieResult}`);
    tilePos[pTurn - 1] += dieResult;

    // snakes, higher to lower tile position
    jumpPoint(62, 52);
    jumpPoint(77, 44);
    jumpPoint(99, 80);
    // ladders, lower to higher tile position
    jumpPoint(6, 24);
    jumpPoint(22, 88);
    jumpPoint(51, 90);



    if (tilePos[pTurn - 1] >= (nRows * nRows)) {
        tilePos[pTurn - 1] = (nRows * nRows);
        document.querySelector('#tile' + tilePos[pTurn - 1]).append(document.querySelector('.token' + pTurn));
        setTimeout(function() {
            alert('Game ends. You have reached the finish tile.\nRefresh the browser to play again.');
        }, 100);
    };

    // console.log(`player is now ${player}`);
    // if (let i = 0; i < dieResult; i++) {
    // document.querySelector('#tile' + i).append(document.querySelector('.token'));
    // }

    // for (let i = dieResult; i < player; i++) {
    //     document.querySelector('#tile' + i).append(document.querySelector('.token'));
    //     console.log(document.querySelector('#tile' + i));
    // }

    setTimeout(function() {
        document.querySelector('#tile' + tilePos[pTurn - 1]).append(document.querySelector('.token' + pTurn));
        console.log(`player${pTurn} is now on tile ${tilePos[pTurn - 1]}`);
    }, timer);





});
