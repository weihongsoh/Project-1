"use strict";

//////////
// Project 1
//////////

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
    // .
    // .
    // .
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



// Starting title
const h1 = document.createElement('h1');
h1.classList.add('title');
h1.innerText = 'Welcome to Snakes & Ladders!'; // maybe can upgrade to Slides and Esca-Ladders
document.querySelector('body').prepend(h1);


// Set the size of the board, based on equal numbers of rows & columns
// maybe can add a check: allow even numbers only
// or change width/height formula to take input as consideration

let nRows = 4;

makeMenu();
makeSBoard(nRows);
makeToken(1);
makeDie(); // remember to change back childNodes[?] after testing
// makePBoard(10);

let player = 0;
document.querySelector('.die-body').onclick = function rollDie() {
    // document.querySelector('.die-body').innerText = Math.ceil(Math.random() * 6);
    const dieResult = Math.ceil(Math.random() * 6);
    document.querySelector('.die-body').innerText = dieResult;
    console.log('dieResult is ' + dieResult);
    player += dieResult;


    // add snake and ladder mechanics here


    // to here

    if (player > (nRows * nRows)) {
        player = (nRows * nRows);
    };
    if (player === (nRows * nRows)) {
        const end = document.createElement('div');
        end.classList.add('end');
        end.innerText = 'Game ends. You have reached the finish tile.'
        document.querySelector('body').insertBefore(end, document.querySelector('body').childNodes[5]);
    };

    console.log('player is ' + player);
    // if (let i = 0; i < dieResult; i++) {
    // document.querySelector('#tile' + i).append(document.querySelector('.token'));
    // }

    // for (let i = dieResult; i < player; i++) {
    //     document.querySelector('#tile' + i).append(document.querySelector('.token'));
    //     console.log(document.querySelector('#tile' + i));
    // }

    document.querySelector('#tile' + player).append(document.querySelector('.token'));
};


// document.getElementById('demo').onclick = function changeContent() {

//     document.getElementById('demo').textContent = "Help me";
//     document.getElementById('demo').style = "Color: red";
 
//  }

// document.querySelector('#submit-btn').onclick = function transfer() {
//     const ibox = document.querySelector('#input-box');
//     const inputValue = document.querySelector('#input-box').value;
//     console.log(inputValue);
// }

// document.querySelector('#submit-btn').on('click', () => {
//     const ibox = document.querySelector('#input-box');
//     const inputValue = document.querySelector('#input-box').value;
//     console.log(inputValue);
// });

// $('#submit-btn').on('click', () => {
//     const inputValue = $('#input-box').val();
//     console.log( inputValue );
// });







// for (let j = num ** 2 - (num * 0); j > num ** 2 - (num * 1); j--) {
//     makeTiles(j);
// };
// // 81 to 90
// for (let k = num ** 2 - (num * 2) + 1; k <= num ** 2 - (num * 1); k++) {
//     makeTiles(k);
// };

// // 80 to 71
// for (let j = num ** 2 - (num * 2); j > num ** 2 - (num * 3); j--) {
//     makeTiles(j);
// };
// // 61 to 70
// for (let k = num ** 2 - (num * 4) + 1; k <= num ** 2 - (num * 3); k++) {
//     makeTiles(k);
// };

// // 60 to 51
// for (let j = num ** 2 - (num * 4); j > num ** 2 - (num * 5); j--) {
//     makeTiles(j);
// };
// // 41 to 50
// for (let k = num ** 2 - (num * 6) + 1; k <= num ** 2 - (num * 5); k++) {
//     makeTiles(k);
// };



// let x = 0;

// // 100 to 91
// // for (let j = num ** 2 - (num * 0); j > num ** 2 - (num * 1); j--) {
// for (let j = num ** 2 - (num * x); j > num ** 2 - (num * (x + 1)); j--) {
//     makeTiles(j);
// };
// // 81 to 90
// // for (let k = num ** 2 - (num * 2) + 1; k <= num ** 2 - (num * 1); k++) {
// for (let k = num ** 2 - (num * (x + 2)) + 1; k <= num ** 2 - (num * (x + 1)); k++) {
//     makeTiles(k);
// };

// x += 2;

// // 80 to 71
// // for (let j = num ** 2 - (num * 2); j > num ** 2 - (num * 3); j--) {
// for (let j = num ** 2 - (num * x); j > num ** 2 - (num * (x + 1)); j--) {
//     makeTiles(j);
// };
// // 61 to 70
// // for (let k = num ** 2 - (num * 4) + 1; k <= num ** 2 - (num * 3); k++) {
// for (let k = num ** 2 - (num * (x * 2)) + 1; k <= num ** 2 - (num * (x + 1)); k++) {
//     makeTiles(k);
// };

// x += 2;

// // 60 to 51
// // for (let j = num ** 2 - (num * 4); j > num ** 2 - (num * 5); j--) {        
// for (let j = num ** 2 - (num * x); j > num ** 2 - (num * (x + 1)); j--) {
//     makeTiles(j);
// };
// // 41 to 50
// // for (let k = num ** 2 - (num * 6) + 1; k <= num ** 2 - (num * 5); k++) {        
// for (let k = num ** 2 - (num * (x + 2)) + 1; k <= num ** 2 - (num * (x + 1)); k++) {
//     makeTiles(k);
// };



// for (let j = num ** 2; j > 0; j--) {
//     makeTiles(j);
// };
// for (let k = 0; k < num ** 2; k++) {
//     makeTiles(k);
// };








