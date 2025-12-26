# Dice Game

A fun and interactive two-player dice game built with HTML, CSS, and JavaScript. Players roll virtual dice and the game automatically determines the winner based on the higher number rolled.

## 🎯 About The Project

This project is a simple browser-based dice game that simulates rolling two dice for two different players. The game uses DOM manipulation and Math.random() to generate random dice values and dynamically updates the page to show the results and declare a winner.

## 🛠️ Technologies Used

- **HTML5** - Structure and layout
- **CSS3** - Styling and design
- **JavaScript** - Game logic and DOM manipulation

## ✨ Features

- **Random Dice Roll**: Generates random numbers (1-6) for both players
- **Dynamic Image Update**: Changes dice images based on rolled numbers
- **Automatic Winner Detection**: Compares dice values and declares winner
- **Tie Handling**: Detects and displays tie situations
- **Instant Results**: No button clicks needed - refresh to play again
- **Visual Feedback**: Clear display of both players' dice

## 📂 Project Structure

```
DICE-/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── index.js            # Game logic
└── images/
    ├── dice1.png       # Dice face showing 1
    ├── dice2.png       # Dice face showing 2
    ├── dice3.png       # Dice face showing 3
    ├── dice4.png       # Dice face showing 4
    ├── dice5.png       # Dice face showing 5
    └── dice6.png       # Dice face showing 6
```

## 🚀 How to Run

### Option 1: Direct Method

1. Clone the repository:
   ```bash
   git clone https://github.com/kavya045586-hash/DICE-.git
   ```

2. Navigate to the project directory:
   ```bash
   cd DICE-
   ```

3. Open `index.html` in your web browser:
   - Double-click the file, or
   - Right-click and select "Open with" → your browser

### Option 2: Using Live Server (Recommended)

1. Install the Live Server extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🎮 How to Play

1. Open the game in your browser
2. The game automatically rolls dice for both players
3. View the results:
   - **Player 1 Wins** - If Player 1's dice shows a higher number
   - **Player 2 Wins** - If Player 2's dice shows a higher number
   - **Tie** - If both dice show the same number
4. Refresh the page to play again

## 🎓 Learning Outcomes

Through this project, I learned:
- DOM manipulation using `querySelector` and `querySelectorAll`
- Using `Math.random()` and `Math.floor()` for random number generation
- Dynamically updating HTML attributes with `setAttribute()`
- Conditional logic with if-else statements
- Working with arrays and image paths
- Basic game logic implementation

## 💡 Key JavaScript Concepts Used

- **Random Number Generation**: `Math.floor(Math.random() * 6 + 1)`
- **DOM Selection**: `document.querySelectorAll("img")`
- **Attribute Manipulation**: `setAttribute("src", path)`
- **Conditional Statements**: Winner determination logic
- **String Concatenation**: Dynamic image path creation

## 🔮 Future Improvements

- [ ] Add a "Roll Dice" button instead of auto-refresh
- [ ] Implement score tracking across multiple rounds
- [ ] Add sound effects for dice rolling
- [ ] Create animations for dice rolling
- [ ] Add player name input functionality
- [ ] Implement best-of-three or best-of-five game modes
- [ ] Add dice rolling animation before showing final result
- [ ] Create a leaderboard for multiple games
- [ ] Make it responsive for mobile devices
- [ ] Add multiplayer support with different game modes

## 🎨 Game Logic

```javascript
// Generate random number between 1-6
var num = Math.floor(Math.random() * 6 + 1);

// Update dice image dynamically
var add = "images/dice" + num + ".png";
document.querySelectorAll("img")[0].setAttribute("src", add);

// Compare and determine winner
if (num > num1) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WIN";
}
```

## 📧 Contact

- **Email**: kavya045586@gmail.com
- **GitHub**: [@kavya045586-hash](https://github.com/kavya045586-hash)


---

🎲 Refresh to roll again! ⭐ Star this repository if you enjoyed the game!
