import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types"
import { PokemonDetailType } from "../api"

export type TypeState = {
    pokemons: PokemonDetailType[],
    loading : boolean
}

const initialState: TypeState = {
    pokemons: [],
    loading: false
}

export const pokemonReducer = (state:TypeState = initialState, action:any)=>{
    switch(action.type){
        case SET_POKEMONS:
            return {...state, pokemons: action.payload}
        case SET_FAVORITE:
            const newPokemonList =  [...state.pokemons]
            const currentPokemonIndex = newPokemonList.findIndex(
                pkmn => {
                    return action.payload.pokemonId === pkmn.id  
                }
            )
            if(currentPokemonIndex < 0){
                return state;
            }
            newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite
            return {...state, pokemons: newPokemonList}
        case SET_LOADING:
            return {...state, loading: action.payload}
        default:
            return state
    }

}