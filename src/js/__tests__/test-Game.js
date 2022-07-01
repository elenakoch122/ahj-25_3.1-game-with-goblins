import Game from '../Game';

document.body.innerHTML = `
    <div class="game-container">
        <div class="header">
            <div class="status">
                <p>Убито гоблинов: <span class="caught" data-count="caught">0</span></p>
                <p>Промахов: <span class="missed" data-count="missed">0</span></p>
            </div>
            <button class="startBtn">Начать игру</button>
        </div>
        <div id="field"></div>
    </div>
`;
const result = new Game();
result.drawField();
result.start();

test('create an instance of Game', () => {
    expect(new Game()).toBeInstanceOf(Game);
});

test('drawField method', () => {
    expect(result.fieldArr.length).toBe(16);
});

// test('start method', () => {
//     const isGoblin = result.fieldArr.some((item) => item.querySelector('img'));
//     expect(isGoblin).toBe(true);
// });

// test('gameOver method, number of goblins killed should be 0', () => {
//     result.gameOver();
//     expect(result.caught.textContent).toBe(0);
// });

// test('gameOver method, miss count should be 0', () => {
//     result.gameOver();
//     expect(result.missed.textContent).toBe(0);
// });

// test('gameOver method, field must be empty', () => {
//     result.gameOver();
//     const isGoblin = result.fieldArr.some((item) => item.querySelector('img'));
//     expect(isGoblin).toBe(false);
// });

// test('onCellClick method', () => {
    
// });
