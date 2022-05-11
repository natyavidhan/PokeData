from flask import Flask, render_template, request, redirect, url_for
import requests, json

app = Flask(__name__)
app.jinja_env.globals.update(type=type)

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

@app.route('/pokemon/<name>')
def pokemon(name):
    pokemon = requests.get(f"https://studiousapi.up.railway.app/pokedata/data/{name}").json()
    if pokemon != {"error": "Pokemon not found"}:
        return render_template('pokemon.html', pokemon=pokemon)

if __name__ == '__main__':
    app.debug = True
    app.run(host="0.0.0.0", port=5000)