from flask import Flask, render_template, request, redirect, url_for
import requests, json

app = Flask(__name__)
app.jinja_env.globals.update(type=type)

@app.route('/')
def index():
    pokemons = requests.get("https://studiousapi.vercel.app/pokedata/data/random?limit=20").json()
    return render_template('index.html', pokemons=pokemons)

@app.route('/search')
def search_():
    return render_template('search.html', pokemons=None, query="")

@app.route('/search/<query>')
def search(query):
    result = requests.get(f"https://studiousapi.vercel.app/pokedata/data/search?query={query}").json()
    return render_template('search.html', pokemons=result, query=query)

@app.route('/pokemon/<name>')
def pokemon(name):
    pokemon = requests.get(f"https://studiousapi.vercel.app/pokedata/data/{name}").json()
    if pokemon != {"error": "Pokemon not found"}:
        return render_template('pokemon.html', pokemon=pokemon)

@app.route('/all')
def all():
    page = request.args.get('page', 1, type=int)
    limit = request.args.get('limit', 20, type=int)
    pokemon = requests.get(f"https://studiousapi.vercel.app/pokedata/data/all?page={page}&limit={limit}").json()
    return render_template('all.html', pokemons=pokemon, page=page, limit=limit)

if __name__ == '__main__':
    app.debug = True
    app.run(host="0.0.0.0", port=5000)