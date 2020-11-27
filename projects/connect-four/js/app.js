const game = new Game();
const startButton = document.getElementById('begin-game');
/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
startButton.addEventListener('click', () => {
    game.startGame();

    //after click disappears
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';


});