const frmBuscar = document.querySelector("#search");
const content = document.querySelector("#content");
const containerCard = document.getElementsByClassName("poke-card")
const renderResults = (results) => {
    content.innerHTML = "";

    let block = document.createElement("div");
    block.classList.add("row", "col-12", "m-0");
    block.setAttribute("id", "categories-group");

    content.appendChild(block);
}

frmBuscar.addEventListener("submit", (event) => {
    event.preventDefault();

    const {
        pokeName
    } = event.target;

    let nuevos = pokemons_array.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(pokeName.value.toLowerCase())
    })

    renderPokemon(nuevos);
    // console.log(pokeName)
});