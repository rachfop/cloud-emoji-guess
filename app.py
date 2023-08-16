from flask import Flask, render_template, jsonify, request

import random

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/emoji')
def get_random_emoji():
    emojis = ['😀', '😂', '🥳', '🤩', '😎', '😊', '☁️']
    random_emoji = random.choice(emojis)
    start_rain = random_emoji == '☁️'
    return jsonify({'emoji': random_emoji, 'start_rain': start_rain})

@app.route('/guess')
def guess_game():
    return render_template('guess.html')

@app.route('/api/guess', methods=['POST'])
def guess_emoji():
    guessed_emoji = request.json.get('guess')
    emojis = ['😀', '😂', '🥳', '🤩', '😎', '😊', '☁️']
    random_emoji = random.choice(emojis)
    is_correct = random_emoji == guessed_emoji
    return jsonify({'correct': is_correct, 'emoji': random_emoji})

if __name__ == '__main__':
    app.run()
