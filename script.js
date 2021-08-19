"use strict";

//////////
// Project 1
//////////
console.log('Snakes & Ladders\n\n');

// create menu
const makeMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerText = 'Click the Start Game button to begin.';
    document.querySelector('body').insertBefore(menu, document.querySelector('body').childNodes[1]);

    // game mode 1
    const button = document.createElement('button');
    button.classList.add('button0');
    button.innerHTML = 'Start Game';
    document.querySelector('body').append(button);
    button.addEventListener('click', (e) => {

        // menu intro update
        menu.innerText = 'Here are the rules:\n-Click the white die below to produce a number.\n-The player tokens will then take the number of steps according to the die number.\n-Land on the base of a ladder to climb forward.\n-Land on the head of a snake to drop backward to its tail.\n-Reach the final square to finish the game.';

        button1.remove();
        button.innerHTML = 'Restart Game';
        button.setAttribute('onClick', 'window.location.reload()');
        makeSBoard(nRows);
        makeToken(2);
        makeDie();
        makeLadder(3);
        makeSnake(3);
        
        // click die, get number, move player
        document.querySelector('.die-body').addEventListener('click', (e) => {
            const dieResult = Math.ceil(Math.random() * dieSided);
            document.querySelector('.die-body').innerText = dieResult;
            
            // alternate player's turn
            pTurn = (pTurn % 2) + 1;
                    
            //move player token
            console.log(`player${pTurn} was on tile ${tilePos[pTurn - 1]} and die result is ${dieResult}`);
            tilePos[pTurn - 1] += dieResult;
        
            // snakes, from higher to lower tile position
            jumpPoint(28, 12);
            jumpPoint(49, 34);
            jumpPoint(62, 52);
            jumpPoint(78, 43);
            jumpPoint(99, 80);
            // ladders, from lower to higher tile position
            jumpPoint(4, 23);
            jumpPoint(37, 88);
            jumpPoint(51, 90);
        
            // check whether player reaches last tile
            if (tilePos[pTurn - 1] >= (nRows * nRows)) {
                tilePos[pTurn - 1] = (nRows * nRows);
                document.querySelector('#tile' + tilePos[pTurn - 1]).append(document.querySelector('.token' + pTurn));
                setTimeout(function() {
                    alert(`Game ends. Player${pTurn} has reached the finishing tile.\nTo play again, click the Restart Game button or refresh the browser. Have you tried looking for the hidden game mode? Hint: use the DOM to look for button1 location.`);
                }, 100);
            };
        
            // set time delay so as to show player landed on jumpPoint start, else player will straightaway go direct to jumpPoint end position
            setTimeout(function() {
                document.querySelector('#tile' + tilePos[pTurn - 1]).append(document.querySelector('.token' + pTurn));
                console.log(`player${pTurn} is now on tile ${tilePos[pTurn - 1]}`);
            }, timer);
        });
    });

    // game mode 2
    const button1 = document.createElement('button');
    button1.classList.add('button1');
    button1.innerHTML = 'Start Game 2';
    document.querySelector('body').append(button1);
    button1.addEventListener('click', (e) => {
        
        // introduction
        document.querySelector('.title').innerText = '';
        menu.innerText = "Chapter 12: Move Gollum into Mount Doom.\ndocument.querySelector('#mount-doom').append(div12);\nChapter 13: remove Gollum and the Ring from the DOM.\ndocument.querySelector('#gollum')\n.remove();\n\nSo what happened in between?";
        
        // introduction 2
        setTimeout(() => {
            alert('Next');
            document.querySelector('.title').innerText = 'LOTR';
            menu.innerText = 'This is the hidden game mode. You are now witnessing the events happening between Chapter 12 and 13 of your homework. Click the white button continuously to press forward!';
        }, 100);

        button.remove();
        button1.innerHTML = 'Restart Game';
        button1.setAttribute('onClick', 'window.location.reload()');

        makePBoard();
        makeToken(2);
        makeDie();

        setTimeout(() => {
            alert('Get ready!')
        }, 300);

        document.querySelector('.die-body').innerText = 'Tap Me!';

        // starting position
        tilePos = [40, 40];
        document.querySelector('#tile' + tilePos[0]).append(document.querySelector('.token1'));
        document.querySelector('#tile' + tilePos[1]).append(document.querySelector('.token2'));

        // move towards last tile at every click
        document.querySelector('.die-body').addEventListener('click', (e) => {
            tilePos[0]++;
            document.querySelector('#tile' + tilePos[0]).append(document.querySelector('.token1'));
            tilePos[1] = tilePos[0];
            document.querySelector('#tile' + tilePos[1]).append(document.querySelector('.token2'));
        });

        // move towards first tile at every interval
        let recurrence = setInterval(function() {
            if (tilePos[0] === 81) {
                document.querySelector('.token2').remove();
                alert('After a fierce struggle, Gollum, holding the Ring, fell over the edge and into the lava of Mount Doom. This was why they were removed from the DOM.')
                clearInterval(recurrence);
            } else if (tilePos[0] === 1) {
                alert('Gollum escaped Mount Doom with the Ring. You have created a new timeline and Chapter 13 of U1D8 homework never happened. Try again to set back the correct timeline.')
                clearInterval(recurrence);
            } else {
                tilePos[0]--;
                document.querySelector('#tile' + tilePos[0]).append(document.querySelector('.token1'));
                tilePos[1] = tilePos[0];
                document.querySelector('#tile' + tilePos[1]).append(document.querySelector('.token2'));
            };
        }, timer);
    });
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

// create pyramid board
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

// create tiles for squareBoard
const makeTiles = (num) => {
    const tiles = document.createElement('div');
    tiles.classList.add('tile');
    document.querySelector('.board').append(tiles);
    tiles.innerText = num;
    tiles.setAttribute('id', 'tile' + num);
};

// create tiles for pyramidBoard
const makePTiles = (num) => {
    const tiles = document.createElement('div');
    tiles.classList.add('tile1');
    document.querySelector('.board1').append(tiles);
    tiles.innerText = num;
    tiles.setAttribute('id', 'tile' + num);
};

// create the game token(s)
const makeToken = (num) => {
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
const makeLadder = (num) => {
    const ladder = document.createElement('div');
    ladder.classList.add('ladder');
    document.querySelector('body').insertBefore(ladder, document.querySelector('body').childNodes[5]);
    for (let i = 0; i < num; i++) {
        const ladder1 = document.createElement('img');
        ladder1.classList.add('ladder' + i);
        ladder1.src = '/image/ladder' + i + '.png';
        ladder.append(ladder1);
    };
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
        if (startPos < endPos) {
            console.log(`player${pTurn} reached tile ${startPos} and climbs the ladder`);
        } else {
            console.log(`player${pTurn} reached tile ${startPos} and was swallowed by a snake`);
        };
    };
};



////////////////////
// Start of Game
////////////////////

const h1 = document.createElement('h1');
h1.classList.add('title');
h1.innerText = 'Welcome to Snakes & Ladders!';
document.querySelector('body').prepend(h1);

// game settings
let nRows = 10; // even number, rows for game 1 board
let tilePos = [1, 1]; // player [1, 2]'s starting position
let dieSided = 6; // maximum number on the die
let pTurn = 0; // which player's turn to go
let timer = 400; // time delay (in milliseconds) to move the token

makeMenu();
