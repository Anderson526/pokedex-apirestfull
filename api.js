import { urlPokemon } from "./url";

export function getPokemon(parm){
    return fetch(urlPokemon+parm)
}