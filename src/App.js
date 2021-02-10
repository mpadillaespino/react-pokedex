import React, { useState, useEffect, useCallback } from 'react';
import { AnimatedList } from "react-animated-list";
import Loader from "react-loader-spinner";
import { getAllPokemon, getPokemonDetail } from './services/pokemonApi'
import { loaderProps } from './helpers/commons'
import Card from './components/Card'
import Navbar from './components/Navbar'
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
    }, [])

    const loadPokemonData = async (results) => {
        let data = await Promise.all(results.map(async pokemon => {
            let pokemonRecord = await getPokemonDetail(pokemon.url)
            return pokemonRecord
        }))
        setPokemonData(data)
        console.log(data)
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

    useEffect(() => {
        fetchInitialData()
    }, [fetchInitialData])


    return (
        <>
            <Navbar />
            <div className="btn">
                <button onClick={movePage} value="prev">{`<<`}</button>
                <button onClick={movePage} value="next">{`>>`}</button>
            </div>
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
                    ) : (
                        <AnimatedList
                            animation={"fade"}
                            initialAnimationDuration={4700}>
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
                loading ? <></> : (
                    <div className="btn">
                        <button onClick={movePage} value="prev">{`<<`}</button>
                        <button onClick={movePage} value="next">{`>>`}</button>
                    </div>
                )
            }
        </>
    );
}

export default App;