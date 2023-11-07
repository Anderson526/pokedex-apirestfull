import { getPokemon } from "./api";

let buttonSearch = document.getElementById("buttonPokeS");
buttonSearch.addEventListener('click', function(){
    let idpoke = document.getElementById('pokeSearch');
    let idpokevalue =idpoke.value;
    callPokemon(idpokevalue);


})



//

function callPokemon(pokeid){

let pokemon = getPokemon(pokeid);
pokemon.then((res) => res.json())
.then((res2)=>{

    console.log(res2)
    let {name,sprites,stats}= res2;
    showPokemon(name,sprites,stats);
})
}

function showPokemon(name, sprites, stats) {
    let input = document.getElementById("pokeSearch");
    input.placeholder = name;
    let div = document.getElementById("pokename");
    let table = `<table><tr><td>${name}</td></tr>`;
  
    for (var i = 0; i < stats.length; i++) {
      table += `<tr><td>${stats[i].stat.name}</td><td>${stats[i].base_stat}</td></tr>`;
    
    }
  
    table += `</table>`;
  
    div.innerHTML = table;

    let img = document.getElementById('pokephoto');
    img.src = sprites.front_shiny;
  }
  