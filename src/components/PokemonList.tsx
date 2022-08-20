import { FC } from "react";
import { PokemonType } from "../api";
import { PokemonCard } from "./PokemonCard";
import './PokemonList.css'

// export interface IPokemon{
//     name: string
//     url: string
// }

interface Props {
    pokemons: PokemonType[]
}

const PokemonList:FC<Props> = ({ pokemons }) =>{
    return (
        <div className="PokemonList">
            {pokemons.map((pokemon,index)=>(
                <PokemonCard url={pokemon.url} name={pokemon.name} key={pokemon.name} />
            ))}
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}

export {
    PokemonList
}