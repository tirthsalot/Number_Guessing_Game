# 🎯 Number Guessing Game

A simple and interactive **Number Guessing Game** built using **HTML, CSS, and JavaScript**.

The player has to guess a randomly generated number between **1 and 20**. The game provides hints such as **"Too high"** or **"Too low"** and keeps track of the player's score and high score.

---



---

## 📌 Features

* 🎲 Random number generation between **1 and 20**
* 🔢 User can enter a number and check their guess
* ⬆️ Displays **Too high** when the guess is greater than the secret number
* ⬇️ Displays **Too low** when the guess is smaller than the secret number
* ✅ Shows **Correct Number** when the player wins
* ❤️ Score starts at **20**
* 🏆 Keeps track of the **Highscore**
* 🔄 **Again!** button to restart the game
* 🎨 Dynamic background color when the player wins
* ⚠️ Input validation for numbers outside the range 1–20
* 📱 Responsive and simple UI

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the game
* **CSS3** – Styling, layout, colors and design
* **JavaScript** – Game logic and DOM manipulation

---

## 📂 Project Structure

```text
Number-Guessing-Game/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🎮 How to Play

1. Open the game in your browser.
2. A secret number between **1 and 20** is randomly generated.
3. Enter your guessed number in the input box.
4. Click the **Check!** button.
5. Follow the hint:

   * ⬆️ **Too high** → Your guess is greater than the secret number.
   * ⬇️ **Too low** → Your guess is smaller than the secret number.
   * ✅ **Correct Number** → You guessed the secret number.
6. Each incorrect guess decreases your score.
7. Try to achieve the highest possible score.
8. Click **Again!** to start a new game.

---

## 🧠 Game Logic

The secret number is generated using JavaScript:

```javascript
let secretNumber = Math.trunc(Math.random() * 20) + 1;
```

The player's score starts at:

```javascript
let score = 20;
```

For every incorrect guess, the score decreases by `1`.

When the player guesses correctly, the current score is compared with the high score:

```javascript
if (score > highscore) {
    highscore = score;
    highscoreEl.textContent = highscore;
}
```

---

## 🔄 Restart Game

The **Again!** button resets:

* Score to `20`
* Secret number to a new random number
* Message to `Start guessing`
* Number box to `?`
* Input field to empty

Example:

```javascript
againBtn.addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    messageEl.textContent = 'Start guessing';
    scoreEl.textContent = score;
    numberEl.textContent = '?';
    guessInput.value = '';
});
```

---


## 👨‍💻 Author

**Tirth Salot**

### Skills Used

`HTML` `CSS` `JavaScript`

---


