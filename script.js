const container = document.getElementById('die-container'),
    generateButton = document.getElementById('generate-die'),
    rollButton = document.getElementById('roll-die');
let numOfDice = 0,
    diceArr = [];

generateButton.addEventListener('click', () => {
    new Die();
});

rollButton.addEventListener('click', () => {
    diceArr.forEach(die => {
        console.log(die);
        die.roll();
    });
});

class Die {
    constructor(value) {
        this.value = value;
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.id = numOfDice++;
        this.roll();
        this.div.textContent = this.value;
        container.appendChild(this.div);
        diceArr.push(this); // do not push this.div. try changing to this to this.div and see what happens!
        this.div.addEventListener('click', () => {
            this.roll();
        });
    }

    roll() {
        let randomVal = Math.floor((Math.random() * 6) + 1);
        this.value = randomVal;
        this.div.textContent = this.value;
    }
}
