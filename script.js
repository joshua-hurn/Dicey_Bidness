const container = document.getElementById('die-container'),
    generateButton = document.getElementById('generate-die'),
    rollButton = document.getElementById('roll-die'),
    sumButton = document.getElementById('sum-die');
let numOfDice = 0,
    diceArr = [];

// Create a new dice object.
generateButton.addEventListener('click', () => {
    new Die();
});

// Roll the dice.
rollButton.addEventListener('click', () => {
    diceArr.forEach(die => {
        die.roll();
    });
});

// Sum the dice.
sumButton.addEventListener('click', () => {
    let sum = 0;
    diceArr.forEach(die => {
        sum = sum + die.value
    });
    alert(sum);
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
        this.div.addEventListener('dblclick', () => {
            container.removeChild(this.div);
            diceArr.pop(this.div);
        });
    }

    roll() {
        let randomVal = Math.floor((Math.random() * 6) + 1);
        this.value = randomVal;
        this.div.textContent = this.value;
    }
}
