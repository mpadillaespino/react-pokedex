import React, { useState, useEffect, useCallback } from 'react';
import { getAllPokemon, getPokemonDetail } from './services/pokemonApi'
import './App.css';

const App = () => {
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState([])
  const baseURL = 'https://pokeapi.co/api/v2/pokemon'

  const fetchInitialData = useCallback(async () => {
    let response = await getAllPokemon(baseURL)
    await loadPokemonData(response.results)
    setNextUrl(response.next)
    setPrevUrl(response.previous)
    setLoading(false)
  },[])

  const loadPokemonData = async (results) => {
    let data = await Promise.all(results.map(async pokemon => {
      let pokemonRecord = await getPokemonDetail(pokemon.url)
      return pokemonRecord
    }))
    setPokemonData(data)
    console.log(data)
  }

  const movePage = async (e) => {
    const action = e.target.value;
    const url = action === "prev" ? prevUrl : nextUrl;
    if(action === "prev" && !prevUrl) return;
    setLoading(true);
    let response = await getAllPokemon(url)
    await loadPokemonData(response.results)
    setNextUrl(response.next)
    setPrevUrl(response.previous)
    setLoading(false)
  }

  useEffect(() => {
    fetchInitialData()
  }, [fetchInitialData])


  return (
    <>
      {
        loading ? <h1>Cargando...</h1> : (
          <>
            <button onClick={movePage} value="prev">Prev</button>
            <button onClick={movePage} value="next">Next</button>
            {pokemonData.map((pokemon) => 
            <li key={pokemon.id}>
              {pokemon.name}
            </li>)}
          </>
        )
      }
    </>
  );
}

export default App;
