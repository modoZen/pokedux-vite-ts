import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Col } from 'antd'
import { Search } from './components/Search'
import { PokemonList } from './components/PokemonList'
import { getPokemons, PokemonType } from './api'
import logo from './statics/logo.svg'
import './App.css'
import { setPokemmons as setPokemmonsActions } from './actions'

type AppType = {
  pokemons:PokemonType[], setPokemons:any
}

function App({pokemons, setPokemons}: AppType ) {
  // const [pokemons,setPokemons] = useState<PokemonType[]>([]);
  useEffect(()=>{
    async function fetchPokemon(){
        const pkmns = await getPokemons();
        setPokemons(pkmns as PokemonType[])
    } 
    fetchPokemon();
  },[])
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Search />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

const mapStateToProps = (state:any)=>({
  pokemons: state.pokemons
})

const mapDispatchToProps = (dispath:any)=>({
  setPokemons: (value:PokemonType[])=> dispath(setPokemmonsActions(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
