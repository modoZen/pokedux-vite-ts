import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Search } from './components/Search'
import { PokemonList } from './components/PokemonList'
import { Col } from 'antd'
import { getPokemons } from './api'
import { getPokemonsWithDetails, setPokemons } from './actions'
import { TypeState } from './reducers/pokemon'
import logo from './statics/logo.svg'
import './App.css'

function App() {
  const pokemons = useSelector((state:TypeState)=>state.pokemons)
  const dispath = useDispatch();
  useEffect(()=>{
    async function fetchPokemon(){
        const pkmns = await getPokemons();
        dispath(getPokemonsWithDetails(pkmns))
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


export default App;
