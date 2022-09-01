const renderSelect = (data) => {

    let select =document.querySelector("#types");
    console.log(data);

    let types = data.results;
    
    types.forEach((type) => {

      let option = document.createElement("option")
      option.setAttribute("value" , type.name)   
      option.innerText=type.name;
      select.appendChild(option);
      
    });
    
    };

 
    

fetch(`${URL}/type/`)
.then((response) => response.json())
.then((data) => renderSelect(data));





//menu de tipos
document.querySelector("#types").addEventListener("change", function(evt){  //cuando seleccionamos un tipo diferente se dispara un evento con change
  let pokemons;
  let type_id =evt.target.value;

  if(type_id==""){
pokemons=pokemons_array;
}else {
   pokemons=pokemons_array.filter(function(pokemon){  //recoger el valor del select
    //if pokemon.type_id
    console.log(pokemon);
    console.log(type_id)
    return pokemon.types.includes(type_id);
    
  });
}
  renderPokemon(pokemons); //recibe un nunevo arreglo ya filtrado  pokemon 2 y lo va a pintar render pokemon
  });


//(19 1.22)
















/* menu dinamico
const renderSelect = (data) => {
  let select =document.querySelector("#types");
  console.log(data);
  let types = data.results;
  
  types.forEach((type) => {
    let option = document.createElement("option")
    option.setAttribute("value" , type.id)   
    option.innerText=type.name;
    select.appendChild(option);
    
  });
  
  };

  

fetch(`${URL}/type/`)
.then((response) => response.json())
.then((data) => renderSelect(data));












version 2
const renderSelect = (data) => {
    let select =document.querySelector("#types");
    console.log(data);
    let types = data.results;
    
    types.forEach((type) => {
      let option = document.createElement("option")
      option.setAttribute("value" , type.id)   
      option.innerText=type.name;
      select.appendChild(option);
      
    });
    
    };

 
    

fetch(`${URL}/type/`)
.then((response) => response.json())
.then((data) => renderSelect(data));


  



version 3 
const renderSelect = (data) => {

    let select =document.querySelector("#types");
    console.log(data);

    let types = data.results;
    
    types.forEach((type) => {
      
      let option = document.createElement("option")
      option.setAttribute("value" , type.id)   
      option.innerText=type.name;
      select.appendChild(option);
      
    });
    
    };

 
    

fetch(`${URL}/type/`)
.then((response) => response.json())
.then((data) => renderSelect(data));



*/