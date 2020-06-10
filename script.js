const diceContainer = document.getElementById("dice-container"),
    generateDie = document.getElementById("generate-die"),
    sumDice = document.getElementById("sum-dice"),
    rollDice = document.getElementById("roll-dice");
let diceArr = [];

generateDie.addEventListener("click", () => new Die(null));

sumDice.addEventListener("click", () => {
    let sum = 0;
    diceArr.forEach(die => sum += die.value);
    alert(sum);
});

rollDice.addEventListener("click", () => diceArr.forEach(die => die.roll()));

class Die {
    constructor(value) {
        this.value = value;
        this.div = document.createElement("div");
        this.div.className = "dice";
        this.div.addEventListener("click", () => this.roll());
        this.div.addEventListener("dblclick", () => {
            let index = diceArr.indexOf(this);
            diceArr.splice(index, 1);
            diceContainer.removeChild(this.div);
        });
        this.roll();
        diceContainer.appendChild(this.div);
        diceArr.push(this);
    }

    roll() {
        let randomNum = Math.floor((Math.random() * 6) + 1);
        this.value = randomNum;
        this.div.innerHTML = this.value;
    }
}