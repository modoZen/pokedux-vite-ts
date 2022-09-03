import { createSlice } from "@reduxjs/toolkit";
import { PokemonDetailType } from "../api";

type InitialState = {
    pokemons: PokemonDetailType[]
}

const initialState: InitialState = {
    pokemons: []
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        setPokemons: (state,action)=>{
            state.pokemons = action.payload
        },
        setFavorite: (state, action)=>{
            const currentPokemonIndex = state.pokemons.findIndex(
                (pkmn:PokemonDetailType) => {
                    return pkmn.id  === action.payload.pokemonId
                }
            )
            if(currentPokemonIndex >= 0){
                const isFavorite = state.pokemons[currentPokemonIndex].favorite
                state.pokemons[currentPokemonIndex].favorite = !isFavorite
            }
        }
    }
})

export const { setPokemons, setFavorite } = dataSlice.actions;