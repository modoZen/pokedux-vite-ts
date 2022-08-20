import { FC } from "react";
import { PokemonCard } from "./PokemonCard";
import './PokemonList.css'

interface Props {
    pokemons: any[]
}

const PokemonList:FC<Props> = ({ pokemons }) =>{
    return (
        <div className="PokemonList">
            {pokemons.map((pokemon,index)=>(
                <PokemonCard key={index} />
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