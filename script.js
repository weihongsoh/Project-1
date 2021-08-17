"use strict";

//////////
// Project 1
//////////
console.log('Snakes & Ladders\n\n');

// create menu
const makeMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    // menu.innerText = 'Welcome, you are now playing Snakes & Ladders.\n\nThe rules are simple:\n-The player token starts from square 1.\n-Click the die below to produce a number.\n-The token will take the number of steps according to the die number.\n-Reach the last square to finish the game.';
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

// create pyramid board
const makePBoard = (num) => {
    const board = document.createElement('div');
    board.classList.add('sBoard');
    document.querySelector('body').insertBefore(board, document.querySelector('body').childNodes[2]);






};

// create the board tiles
const makeTiles = (num) => {
    const tiles = document.createElement('div');
    tiles.classList.add('tile');
    document.querySelector('.board').append(tiles);
    tiles.style.backgroundColor = 'rgb(255, 221, 84)';
    tiles.innerText = num;
    tiles.setAttribute('id', 'tile' + num);
};

// create the game token(s)
const makeToken = (num) => {
    const start = document.createElement('div');
    start.classList.add('tile', 'start');
    start.innerText = 'Start';
    document.querySelector('body').insertBefore(start, document.querySelector('body').childNodes[3]);
    const token = document.createElement('div');
    token.classList.add('token');

    // document.querySelector('body').insertBefore(token, document.querySelector('body').childNodes[3]);
    document.querySelector('.start').append(token);

    for (let i = 1; i <= num; i++) {
        const tokenTop = document.createElement('div');
        tokenTop.classList.add('token-top', 'player' + num)
        document.querySelector('.token').append(tokenTop);
        const tokenBottom = document.createElement('div');
        tokenBottom.classList.add('token-bottom', 'player' + num)
        document.querySelector('.token').append(tokenBottom);
    };
};

// create the die
const makeDie = () => {
    const die = document.createElement('div');
    die.classList.add('die', 'die-body');
    die.innerText = "";
    document.querySelector('body').insertBefore(die, document.querySelector('body').childNodes[2]);
    
    // for (let i = 0; i < 4; i++) {
    //     const diedot = document.createElement('span');
    //     diedot.classList.add('die', 'die-dot');
    //     document.querySelector('.die-body').append(diedot);
    // };
        
    // for (let i = 1; i <= 1; i++ ) {
    //     const die1 = document.createElement('div');
    //     die1.classList.add('die', 'dot' + i);
    //     document.querySelector('.die').append(die1);
    //     for (let j = 1; j <= 1; j++) {
    //         const die1a = document.createElement('span');
    //         die1a.classList.add('die', 'dot');
    //         document.querySelector('.dot1').append(die1a);
    //     };
    // };


    // const die1 = document.createElement('div');
    // die1.classList.add('die', 'dot' + i);
    // document.querySelector('.die').append(die1);
    // for (let i = 1; i <= 2; i++) {
    //     const die1a = document.createElement('span');
    //     die1a.classList.add('die', 'dot');
    //     document.querySelector('.dot2').append(die1a);
    // };

    // for (let i = 1; i <= 6; i++) {
    //     const die1 = document.createElement('div');
    //     die1.classList.add('die', 'dot' + i);
    //     document.querySelector('.die').append(die1);
    // };
    // for (let i = 1; i <= 1; i++) {
    //     const die1 = document.createElement('span');
    //     die1.classList.add('dot', 'dot1-' + i);
    //     document.querySelector('.dot1').append(die1);
    // };
    // for (let i = 1; i <= 2; i++) {
    //     const die1 = document.createElement('span');
    //     die1.classList.add('dot', 'dot2-' + i);
    //     document.querySelector('.dot2').append(die1);
    // };
    // for (let i = 1; i <= 3; i++) {
    //     const die1 = document.createElement('span');
    //     die1.classList.add('dot', 'dot3-' + i);
    //     document.querySelector('.dot3').append(die1);
    // };
    // for (let i = 1; i <= 4; i++) {
    //     const die1 = document.createElement('span');
    //     die1.classList.add('dot', 'dot4-' + i);
    //     document.querySelector('.dot4').append(die1);
    // };
    // for (let i = 1; i <= 5; i++) {
    //     const die1 = document.createElement('span');
    //     die1.classList.add('dot', 'dot5-' + i);
    //     document.querySelector('.dot5').append(die1);
    // };
    // for (let i = 1; i <= 6; i++) {
    //     const die1 = document.createElement('span');
    //     die1.classList.add('dot', 'dot6-' + i);
    //     document.querySelector('.dot6').append(die1);
    // };

};




///////////////////////////////
    // add snake and ladder mechanics here
const makeArrow = () => {
    const arrow = document.createElement('div');
    arrow.classList.add('arrow');
    document.querySelector('body').insertBefore(arrow, document.querySelector('body').childNodes[5]);
    const arrow1 = document.createElement('div');
    arrow1.classList.add('arrow1');
    arrow.append(arrow1);
    const arrowTip = document.createElement('div');
    arrowTip.classList.add('arrow', 'arrowTip');
    arrow1.append(arrowTip);         
    const arrowBody = document.createElement('div');
    arrowBody.classList.add('arrow', 'arrowBody');
    arrow1.append(arrowBody);
            
    // document.querySelector('.arrow').append(arrow1);
};

const makeSnake = () => {
    const snake = document.createElement('div');
    snake.classList.add('snake');
    document.querySelector('body').insertBefore(snake, document.querySelector('body').childNodes[6]);
    const snake1 = document.createElement('div');
    snake1.classList.add('snake1');
    snake.append(snake1);
    const snakeHead = document.createElement('div');
    snakeHead.classList.add('snakeHead');
    snake1.append(snakeHead);
    const snakeTail = document.createElement('div');
    snakeTail.classList.add('snakeTail');
    snake1.append(snakeTail);    
};




        // to here
/////////////////////////////////    



// Starting title
const h1 = document.createElement('h1');
h1.classList.add('title');
h1.innerText = 'Welcome to Snakes & Ladders!'; // maybe can upgrade to Slides and Esca-Ladders
document.querySelector('body').prepend(h1);

// Set the size of the board, based on equal numbers of rows & columns
// maybe can add a check: allow even numbers only
// or change width/height formula to take input as consideration



// Start of game, setting number of rows
let nRows = 10;

makeMenu();
makeSBoard(nRows);
makeToken(1);
makeDie(); // remember to change back childNodes[?] after testing
// makePBoard(10);
makeArrow();
makeSnake();

// game stats
let player = 0; // player starting position
let timer = 600; // time delay to move the token
let dieSided = 6; // maximum number on the die
// snake/ladder positions

const jump = (startPos, endPos) => {
    if (player === startPos) {
        setTimeout(function() {
            document.querySelector('#tile' + player).append(document.querySelector('.token'));
        }, timer/2);
        setTimeout(function() {
            player = endPos;
        }, timer);
        console.log(`player jumps from ${startPos} to ${endPos}\n\n`);
    };
}



document.querySelector('.die-body').addEventListener('click', (e) => {
// document.querySelector('.die-body').onclick = function rollDie() {
    const dieResult = Math.ceil(Math.random() * dieSided);
    document.querySelector('.die-body').innerText = dieResult;

    console.log(`player was ${player} and dieResult is ${dieResult}`);
    player += dieResult;

    jump(4, 13);
    jump(99, 80);
    // if (player === 4) {
    //     setTimeout(function() {
    //         document.querySelector('#tile' + player).append(document.querySelector('.token'));
    //     }, timer/2);
    //     setTimeout(function() {
    //         player = 13;
    //     }, timer);
    // };

    if (player >= (nRows * nRows)) {
        player = (nRows * nRows);
        document.querySelector('#tile' + player).append(document.querySelector('.token'));
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
        document.querySelector('#tile' + player).append(document.querySelector('.token'));
    }, timer);

    console.log(`player is now ${player}`);

// };
});

