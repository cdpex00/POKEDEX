const pokemonContainer$$ = document.getElementById('pokedex')

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        createPokemon(data)
    })
}

function Pokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i)
    }
}


function createPokemon(pokemon) {
    const card = document.createElement('div')
    card.classList.add('pokemon-card')
    const imgContainer$$ = document.createElement('div')
    imgContainer$$.classList.add('container-img')

    const img$$ = document.createElement('img')
    img$$.src = pokemon.sprites.front_default

    imgContainer$$.appendChild(img$$)

    const number = document.createElement('p')
    number.textContent = `${pokemon.id}`

    const name = document.createElement('h3')
    name.classList.add('name')
    name.textContent = `${pokemon.name}`

    card.appendChild(imgContainer$$)
    card.appendChild(number)
    card.appendChild(name)

    pokedex.appendChild(card)
}

const filtrarPokemons = (e) => {

    e.preventDefault();

    pokedex$$.innertHTML = "";

    for(const pokemon of pokemons){
        pokemon.name.toLowerCase().includes(input$$.value.toLowerCase()) && pintar(pokemon);
    }
}


fetchPokemon(150)