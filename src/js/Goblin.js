import goblinImage from '../img/goblin.png';

export default class Goblin {
    constructor() {
        this.img = document.createElement('img');
        this.img.classList.add('img');
        this.img.src = goblinImage;
        this.img.alt = 'Красное лицо гоблина';
        this.idSetInterval = null;
    }

    add(fieldArr) {
        this.idSetInterval = setInterval(() => {
            const currentCell = fieldArr.find((item) => item.querySelector('img'));
            if (currentCell) {
              this.remove(currentCell);
            }
            fieldArr[Math.floor(Math.random() * fieldArr.length)].append(this.img);
        }, 1000);
    }

    remove(cell) {
        cell.querySelector('img').remove();
    }

    stop() {
        clearInterval(this.idSetInterval);
    }
}
