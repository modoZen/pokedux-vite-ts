import { PokemonType } from "../api";
import { SET_POKEMONS } from "./types";


export const setPokemons = (payload: PokemonType[])=>({
    type: SET_POKEMONS,
    payload
})