from flask import Flask, render_template, request, redirect, url_for
import requests, json

app = Flask(__name__)

@app.route('/')
def index():
    pokemons = requests.get("https://studiousapi.up.railway.app/pokedata/data/random?limit=20").json()
    return render_template('index.html', pokemons=pokemons)

@app.route('/search')
def search_():
    return render_template('search.html', pokemons=None, query="")

@app.route('/search/<query>')
def search(query):
    result = requests.get(f"https://studiousapi.up.railway.app/pokedata/data/search?query={query}").json()
    return render_template('search.html', pokemons=result, query=query)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)