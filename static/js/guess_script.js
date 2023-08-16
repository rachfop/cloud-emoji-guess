const guessButton = document.getElementById('guess-btn');
const emojiGuessElement = document.getElementById('emoji-guess');
const guessResultElement = document.getElementById('guess-result');

guessButton.addEventListener('click', function() {
    const guess = emojiGuessElement.value;

    fetch('/api/guess', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ guess })
    })
    .then(response => response.json())
    .then(data => {
        if (data.correct) {
            guessResultElement.textContent = `You guessed it right! It was ${data.emoji}`;
        } else {
            guessResultElement.textContent = `Wrong guess! It was ${data.emoji}`;
        }
    });
});
