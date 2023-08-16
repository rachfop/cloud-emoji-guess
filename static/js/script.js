const emojiContainer = document.getElementById('emoji-container');
const emojiElement = document.getElementById('emoji');
let fallingEmojiIntervalId;
let lightningEmojiIntervalId;

function createFallingEmoji(emoji) {
    const fallingEmoji = document.createElement('div');
    fallingEmoji.innerText = emoji;
    fallingEmoji.className = 'falling-emoji';
    emojiContainer.appendChild(fallingEmoji);

    setTimeout(() => {
        fallingEmoji.remove();
    }, 5000);
}

function startFallingEmojis(emoji) {
    fallingEmojiIntervalId = setInterval(() => {
        createFallingEmoji('💧');
    }, 400);

    lightningEmojiIntervalId = setTimeout(() => {
        lightningEmojiIntervalId = setInterval(() => {
            createFallingEmoji('⚡');
        }, 300);
    }, 2000);
}

function stopFallingEmojis() {
    clearInterval(fallingEmojiIntervalId);
    clearInterval(lightningEmojiIntervalId);
}

function getRandomEmoji() {
    stopFallingEmojis();

    fetch('/emoji')
        .then(response => response.json())
        .then(data => {
            emojiElement.innerText = data.emoji;
            if (data.start_rain) {
                startFallingEmojis(data.emoji);
            }
        });
}

emojiElement.addEventListener('click', getRandomEmoji);
