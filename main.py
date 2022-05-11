from flask import Flask, render_template, request, redirect, url_for
import requests, json

app = Flask(__name__)

@app.route('/')
def index():
    pokemons = requests.get("https://studiousapi.up.railway.app/pokedata/data/random?limit=20").json()
    return render_template('index.html', pokemons=pokemons)

if __name__ == '__main__':
    app.run(debug=True)