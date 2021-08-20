# Snakes & Ladders

A traditional turn-based game played:
- on a physical board
- moving player tokens across the board
- rolling die to determine the number of moves

## Game flow
On the board, equally drawn square rows and columns, labelled from one to a hundred, represent the movement tiles.
The snake and ladder images are selectively printed on the board.

The players start from the first tile and move towards the last, finishing tile.
- If a player token lands on a snake's head, the token is required to retreat to the tail of the snake, usually a smaller tile number.
- If a player token lands on a ladder's base, the token is required to advance to the top of the ladder, usually a higher tile number.

The purpose of this project aims to apply the knowledge gained during the course and digitize the game to be playable on the web browser.
HTML, CSS and Javascript are used to create the game.

## Project challenges
- understanding the pattern in creating the forward-reverse tiles layout dynamically
- tokens to pause temporarily when landing on a snake/ladder before retreating/advancing
- manual placement (and some drawing) of each and every snake/ladder images

## Further work and next steps
- auto screen-resizing to fit a variety of small-to-large sceen devices

## Unsolved problems
- randomizing numbers or die dots for enhancing visual effects
- spinning die/dice for enhancing visual effects
- sliding token movements for enhancing visual effects
