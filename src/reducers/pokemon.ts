import { fromJS, getIn, setIn } from "immutable"
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types"
import { PokemonDetailType } from "../api"

export type TypeState = {
    pokemons: PokemonDetailType[],
    loading : boolean
}

const initialState = fromJS({
    pokemons: [],
    loading: false
})

export const pokemonReducer = (state = initialState, action:any)=>{
    switch(action.type){
        case SET_POKEMONS:
            // return {...state, pokemons: action.payload}
            return setIn(state, ['pokemons'], fromJS(action.payload));
        case SET_FAVORITE:
            const currentPokemonIndex = state.get('pokemons').findIndex(
                (pkmn) => {
                    return pkmn.get('id')  === action.payload.pokemonId
                }
            )
            if(currentPokemonIndex < 0){
                return state;
            }
            // const isFavorite = state.get('pokemons').get(currentPokemonIndex).get('favorite');

            const isFavorite = getIn(state, ['pokemons', currentPokemonIndex, 'favorite'])


            return setIn(state, ['pokemons', currentPokemonIndex, 'favorite'], !isFavorite)

            // newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite
            // return {...state, pokemons: newPokemonList}
        case SET_LOADING:
            // return {...state, loading: action.payload}
            return setIn(state, ['loading'], fromJS(action.payload));
        default:
            return state
    }

}