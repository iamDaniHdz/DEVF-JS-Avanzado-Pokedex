let pokemons_array = []; //primer paso para el array
//poster
fetch(`${URL}/pokemon?limit=151`) //para poner limites
    .then((response) => response.json())
    .then(data => {
        pokemons_array = data.results; //results de la linea 14 para guardar en algun punto
        renderPokemon(pokemons_array);
    })
const renderPokemon = (data) => {
    document.querySelector("#logo").innerHTML = "";
    let pokemonimages = data;
    pokemonimages.forEach((pokemonimage, i) => {
        fetch(pokemonimage.url)
            .then((response) => response.json())
            .then((pokemon) => {
                let separa = document.createElement("div");
                separa.classList.add("col-4", "img-responsive", "text-center")
                let img = document.createElement("img");
                img.setAttribute("src", pokemon.sprites.front_default);
                img.setAttribute("alt", pokemon.name);
                separa.append(img);
                //document.querySelector("#logo").append(img);
                //para crear un parrafo ( el nombre del pokemon)
                let nombre = document.createElement("p")
                nombre.innerHTML = pokemon.name;
                //document.querySelector("#logo").append(nombre);
                separa.append(nombre);
                document.querySelector("#logo").append(separa);
                console.log(pokemon.sprites.front_default)
                let types = [];
                for (var n in pokemon.types) {
                    types.push(pokemon.types[n].type.name);
                    pokemons_array[i].types = types;
                }
                console.log(pokemon)
            })
    })
};