const elements = [
    {s:'H',name:'Hydrogen'},{s:'He',name:'Helium'},{s:'Li',name:'Lithium'},{s:'Be',name:'Beryllium'},
    {s:'B',name:'Boron'},{s:'C',name:'Carbon'},{s:'N',name:'Nitrogen'},{s:'O',name:'Oxygen'},
    {s:'F',name:'Fluorine'},{s:'Ne',name:'Neon'},{s:'Na',name:'Sodium'},{s:'Mg',name:'Magnesium'},
    {s:'Al',name:'Aluminum'},{s:'Si',name:'Silicon'},{s:'P',name:'Phosphorus'},{s:'S',name:'Sulfur'},
    {s:'Cl',name:'Chlorine'},{s:'Ar',name:'Argon'},{s:'K',name:'Potassium'},{s:'Ca',name:'Calcium'},
    {s:'Fe',name:'Iron'},{s:'Cu',name:'Copper'},{s:'Zn',name:'Zinc'},{s:'Br',name:'Bromine'},
    {s:'Ag',name:'Silver'},{s:'I',name:'Iodine'},{s:'Au',name:'Gold'},{s:'Hg',name:'Mercury'},
    {s:'Pb',name:'Lead'},{s:'U',name:'Uranium'},{s:'Ti',name:'Titanium'},{s:'Cr',name:'Chromium'},
    {s:'Mn',name:'Manganese'},{s:'Co',name:'Cobalt'},{s:'Ni',name:'Nickel'},{s:'Se',name:'Selenium'},
    {s:'Kr',name:'Krypton'},{s:'Sr',name:'Strontium'},{s:'Sn',name:'Tin'},{s:'Xe',name:'Xenon'}
];

const darkToggle = document.getElementById('dark-toggle');
const tabBtns = document.querySelectorAll('.tab-btn');
const gameContainers = document.querySelectorAll('.game-container');

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkToggle.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        gameContainers.forEach(c => c.classList.remove('active'));
        document.getElementById(btn.dataset.game + '-game').classList.add('active');
    });
});

let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;
let memoryMoves = 0;
let memoryTimer = null;
let memorySeconds = 0;

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function initMemoryGame() {
    const selected = shuffleArray(elements).slice(0, 8);
    const cards = [];
    selected.forEach(el => {
        cards.push({ type: 'symbol', value: el.s, match: el.name });
        cards.push({ type: 'name', value: el.name, match: el.s });
    });
    memoryCards = shuffleArray(cards);
    
    flippedCards = [];
    matchedPairs = 0;
    memoryMoves = 0;
    memorySeconds = 0;
    
    if (memoryTimer) clearInterval(memoryTimer);
    memoryTimer = setInterval(() => {
        memorySeconds++;
        document.getElementById('memory-time').textContent = 
            Math.floor(memorySeconds / 60) + ':' + String(memorySeconds % 60).padStart(2, '0');
    }, 1000);
    
    updateMemoryStats();
    renderMemoryBoard();
}

function updateMemoryStats() {
    document.getElementById('memory-moves').textContent = memoryMoves;
    document.getElementById('memory-pairs').textContent = matchedPairs;
}

function renderMemoryBoard() {
    const board = document.getElementById('memory-board');
    board.innerHTML = memoryCards.map((card, i) => `
        <div class="memory-card" data-index="${i}">
            <span class="card-back">?</span>
            <span class="card-content">${card.value}</span>
        </div>
    `).join('');
    
    board.querySelectorAll('.memory-card').forEach(card => {
        card.addEventListener('click', () => flipCard(card));
    });
}

function flipCard(card) {
    const index = parseInt(card.dataset.index);
    
    if (card.classList.contains('flipped') || card.classList.contains('matched') || flippedCards.length >= 2) return;
    
    card.classList.add('flipped');
    flippedCards.push({ card, data: memoryCards[index] });
    
    if (flippedCards.length === 2) {
        memoryMoves++;
        updateMemoryStats();
        
        const [first, second] = flippedCards;
        if (first.data.match === second.data.value) {
            first.card.classList.add('matched');
            second.card.classList.add('matched');
            matchedPairs++;
            updateMemoryStats();
            flippedCards = [];
            
            if (matchedPairs === 8) {
                clearInterval(memoryTimer);
                setTimeout(() => alert(`You won in ${memoryMoves} moves and ${memorySeconds} seconds!`), 300);
            }
        } else {
            setTimeout(() => {
                first.card.classList.remove('flipped');
                second.card.classList.remove('flipped');
                flippedCards = [];
            }, 1000);
        }
    }
}

document.getElementById('memory-restart').addEventListener('click', initMemoryGame);


let hangmanWord = '';
let hangmanGuessed = [];
let hangmanWrong = 0;
let hangmanScore = 0;
let hangmanStreak = 0;

const hangmanParts = ['😵', '👤', '🧍', '🧍‍♂️', '🏃', '💀'];

function initHangman() {
    const el = elements[Math.floor(Math.random() * elements.length)];
    hangmanWord = el.name.toUpperCase();
    hangmanGuessed = [];
    hangmanWrong = 0;
    
    document.getElementById('hangman-hint').textContent = `Hint: Symbol is ${el.s}`;
    document.getElementById('hangman-result').textContent = '';
    document.getElementById('hangman-result').className = '';
    document.getElementById('hangman-next').style.display = 'none';
    
    updateHangmanDisplay();
    renderKeyboard();
}

function updateHangmanDisplay() {
    document.getElementById('hangman-figure').textContent = hangmanWrong > 0 ? hangmanParts[Math.min(hangmanWrong - 1, 5)] : '';
    
    const wordDisplay = hangmanWord.split('').map(letter => 
        hangmanGuessed.includes(letter) ? letter : '_'
    ).join(' ');
    document.getElementById('hangman-word').textContent = wordDisplay;
    
    document.getElementById('hangman-score').textContent = hangmanScore;
    document.getElementById('hangman-streak').textContent = hangmanStreak;
}

function renderKeyboard() {
    const keyboard = document.getElementById('hangman-keyboard');
    keyboard.innerHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => `
        <button class="key-btn" data-letter="${letter}">${letter}</button>
    `).join('');
    
    keyboard.querySelectorAll('.key-btn').forEach(btn => {
        btn.addEventListener('click', () => guessLetter(btn));
    });
}

function guessLetter(btn) {
    const letter = btn.dataset.letter;
    if (hangmanGuessed.includes(letter)) return;
    
    hangmanGuessed.push(letter);
    btn.disabled = true;
    
    if (hangmanWord.includes(letter)) {
        btn.classList.add('correct');
    } else {
        btn.classList.add('wrong');
        hangmanWrong++;
    }
    
    updateHangmanDisplay();
    checkHangmanEnd();
}

function checkHangmanEnd() {
    const won = hangmanWord.split('').every(letter => hangmanGuessed.includes(letter));
    const lost = hangmanWrong >= 6;
    
    if (won) {
        hangmanScore += 10 + hangmanStreak;
        hangmanStreak++;
        document.getElementById('hangman-result').textContent = 'Correct! +' + (10 + hangmanStreak - 1) + ' points';
        document.getElementById('hangman-result').className = 'win';
        document.getElementById('hangman-next').style.display = 'block';
        disableKeyboard();
    } else if (lost) {
        hangmanStreak = 0;
        document.getElementById('hangman-result').textContent = `Game Over! The answer was ${hangmanWord}`;
        document.getElementById('hangman-result').className = 'lose';
        document.getElementById('hangman-next').style.display = 'block';
        disableKeyboard();
    }
    
    updateHangmanDisplay();
}

function disableKeyboard() {
    document.querySelectorAll('.key-btn').forEach(btn => btn.disabled = true);
}

document.getElementById('hangman-next').addEventListener('click', initHangman);

let flashcardDeck = [];
let flashcardIndex = 0;
let flashcardKnown = 0;

function initFlashcards() {
    flashcardDeck = shuffleArray(elements).slice(0, 20);
    flashcardIndex = 0;
    flashcardKnown = 0;
    updateFlashcard();
}

function updateFlashcard() {
    if (flashcardIndex >= flashcardDeck.length) {
        document.getElementById('flash-front').textContent = 'Done!';
        document.getElementById('flash-back').innerHTML = `You knew ${flashcardKnown}/${flashcardDeck.length}`;
        return;
    }
    
    const el = flashcardDeck[flashcardIndex];
    document.getElementById('flash-front').textContent = el.s;
    document.getElementById('flash-back').innerHTML = `<div>${el.name}</div><small>Symbol: ${el.s}</small>`;
    document.getElementById('flashcard').classList.remove('flipped');
    
    document.getElementById('flash-current').textContent = flashcardIndex + 1;
    document.getElementById('flash-total').textContent = flashcardDeck.length;
    document.getElementById('flash-known').textContent = flashcardKnown;
}

document.getElementById('flashcard').addEventListener('click', () => {
    document.getElementById('flashcard').classList.toggle('flipped');
});

document.getElementById('flash-know').addEventListener('click', () => {
    flashcardKnown++;
    flashcardIndex++;
    updateFlashcard();
});

document.getElementById('flash-dont-know').addEventListener('click', () => {
    flashcardIndex++;
    updateFlashcard();
});

document.getElementById('flash-restart').addEventListener('click', initFlashcards);


let speedScore = 0;
let speedTimer = null;
let speedTimeLeft = 60;
let speedCurrent = null;
let speedBest = parseInt(localStorage.getItem('speedBest') || '0');

document.getElementById('speed-best').textContent = speedBest;

function initSpeedGame() {
    speedScore = 0;
    speedTimeLeft = 60;
    
    document.getElementById('speed-score').textContent = speedScore;
    document.getElementById('speed-time').textContent = speedTimeLeft;
    document.getElementById('speed-start').disabled = true;
    document.getElementById('speed-input').disabled = false;
    document.getElementById('speed-input').value = '';
    document.getElementById('speed-input').focus();
    document.getElementById('speed-feedback').textContent = '';
    
    nextSpeedElement();
    
    speedTimer = setInterval(() => {
        speedTimeLeft--;
        document.getElementById('speed-time').textContent = speedTimeLeft;
        
        if (speedTimeLeft <= 0) {
            endSpeedGame();
        }
    }, 1000);
}

function nextSpeedElement() {
    speedCurrent = elements[Math.floor(Math.random() * elements.length)];
    document.getElementById('speed-symbol').textContent = speedCurrent.s;
}

function checkSpeedAnswer() {
    const input = document.getElementById('speed-input').value.trim().toLowerCase();
    const correct = speedCurrent.name.toLowerCase();
    
    if (input === correct) {
        speedScore++;
        document.getElementById('speed-score').textContent = speedScore;
        document.getElementById('speed-feedback').textContent = 'Correct!';
        document.getElementById('speed-feedback').className = 'correct';
        document.getElementById('speed-input').value = '';
        nextSpeedElement();
    }
}

function endSpeedGame() {
    clearInterval(speedTimer);
    document.getElementById('speed-start').disabled = false;
    document.getElementById('speed-input').disabled = true;
    document.getElementById('speed-symbol').textContent = 'Game Over!';
    document.getElementById('speed-feedback').textContent = `Final Score: ${speedScore}`;
    document.getElementById('speed-feedback').className = '';
    
    if (speedScore > speedBest) {
        speedBest = speedScore;
        localStorage.setItem('speedBest', speedBest);
        document.getElementById('speed-best').textContent = speedBest;
        document.getElementById('speed-feedback').textContent += ' - New Best!';
    }
}

document.getElementById('speed-start').addEventListener('click', initSpeedGame);

document.getElementById('speed-input').addEventListener('input', checkSpeedAnswer);

document.getElementById('speed-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const input = document.getElementById('speed-input').value.trim().toLowerCase();
        const correct = speedCurrent.name.toLowerCase();
        if (input !== correct) {
            document.getElementById('speed-feedback').textContent = `Wrong! It was ${speedCurrent.name}`;
            document.getElementById('speed-feedback').className = 'wrong';
            document.getElementById('speed-input').value = '';
            nextSpeedElement();
        }
    }
});

initMemoryGame();
initHangman();
initFlashcards();
