import React, { useState, useEffect, useCallback } from 'react';
import Swal from 'sweetalert2'
import { AnimatedList } from "react-animated-list";
import Loader from "react-loader-spinner";
import { getAllPokemon, getPokemonDetail } from './services/pokemonApi'
import { loaderProps, getSwalErrorDialog } from './helpers/commons'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Footer from './components/Footer'
import './App.css';

const App = () => {
    const [nextUrl, setNextUrl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState(false)
    const [pokemonData, setPokemonData] = useState([])
    const [pokemonSearched, setPokemonSearched] = useState({})
    const baseURL = 'https://pokeapi.co/api/v2/pokemon'

    const fetchInitialData = useCallback(async () => {
        let response = await getAllPokemon(baseURL)
        await loadPokemonData(response.results)
        setNextUrl(response.next)
        setPrevUrl(response.previous)
        setLoading(false)
    }, [])

    const loadPokemonData = async (results) => {
        let data = await Promise.all(results.map(async pokemon => {
            let pokemonRecord = await getPokemonDetail(pokemon.url)
            return pokemonRecord
        }))
        setPokemonData(data)
    }

    const movePage = async (e) => {
        const url = e.target.value === "prev" ? prevUrl : nextUrl;
        if (!url) return;
        setLoading(true);
        let response = await getAllPokemon(url)
        await loadPokemonData(response.results)
        setNextUrl(response.next)
        setPrevUrl(response.previous)
        setLoading(false)
    }

    const searchPokemon = async (searchText) => {
        setLoading(true);
        const url = `${baseURL}/${searchText}`
        const pokemonRecord = await getPokemonDetail(url)
        setLoading(false)
        if(pokemonRecord){
            setPokemonSearched(pokemonRecord)
            setSearch(true)
        } else {
            Swal.fire(getSwalErrorDialog("No pudimos encontrar al pokémon que buscas. Ingresa su nombre completo o su # en la pokédex."))
        }
    }

    const endSearch = () => {
        setSearch(false)
    }

    useEffect(() => {
        fetchInitialData()
    }, [fetchInitialData])

    return (
        <div className="app__main__div">
            <Navbar />
            <Searchbar searchPokemon={searchPokemon} />
            {
                search ? (
                    <div className="btn">
                    <button onClick={endSearch} value="prev">{`VOLVER`}</button>
                    </div>
                ) : (
                    <div className="btn">
                        <button onClick={movePage} value="prev">{`<<`}</button>
                        <button onClick={movePage} value="next">{`>>`}</button>
                    </div>
                )
            }
            <div className="grid-container">
                {
                    loading ? (
                        <div className="center-loader">
                            <Loader 
                                type={loaderProps.type} 
                                color={loaderProps.color} 
                                height={loaderProps.height} 
                                width={loaderProps.width} />
                        </div>
                    ) : search ? <div><Card
                                    key={pokemonSearched.id}
                                    pokemon={pokemonSearched}/>
                                 </div> : (
                                            <AnimatedList
                                                animation={"grow"}
                                                initialAnimationDuration={2250}>
                                                {pokemonData.map((pokemon) =>
                                                    <Card
                                                        key={pokemon.id}
                                                        pokemon={pokemon}
                                                    />
                                                )}
                                            </AnimatedList>
                                        )
                }
            </div>
            { 
                loading || search ? <div className="btn"></div>: (
                    <div className="btn">
                        <button onClick={movePage} value="prev">{`<<`}</button>
                        <button onClick={movePage} value="next">{`>>`}</button>
                    </div>
                )
            }
            <Footer />
        </div>
    );
}

export default App;