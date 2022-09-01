let abecedatioBtn = document.querySelector("#abecedario");

abecedatioBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    pokemons_array.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
    });
    renderPokemon(pokemons_array);
});