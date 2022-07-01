import Goblin from './Goblin';

export default class Game {
    constructor() {
        this.field = document.getElementById('field');
        this.fieldSize = 4;
        this.fieldArr = [];
        this.caught = document.querySelector('[data-count=caught]');
        this.missed = document.querySelector('[data-count=missed]');
        this.startBtn = document.querySelector('.startBtn');
        this.goblin = new Goblin();
    }

    drawField() {
        for (let i = 0; i < this.fieldSize ** 2; i += 1) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', this.onCellClick.bind(this));
            this.field.appendChild(cell);
            this.fieldArr.push(cell);
        }
        this.startBtn.addEventListener('click', this.start.bind(this));
    }

    start() {
        this.goblin.add(this.fieldArr);
    }

    gameOver() {
        this.caught.textContent = 0;
        this.missed.textContent = 0;
        const currentCell = this.fieldArr.find((item) => item.querySelector('img'));
        this.goblin.remove(currentCell);
        this.goblin.stop();
    }

    onCellClick(event) {
        event.preventDefault();
        if (!this.fieldArr.some((item) => item.querySelector('img'))) {
            return;
        }
        if (event.currentTarget.querySelector('img')) {
            this.caught.textContent = Number(this.caught.textContent) + 1;
            event.currentTarget.querySelector('img').remove();
            return;
        }
        this.missed.textContent = Number(this.missed.textContent) + 1;
        if (Number(this.missed.textContent) === 5) {
            alert('Игра окончена!');
            this.gameOver();
        }
    }
}
