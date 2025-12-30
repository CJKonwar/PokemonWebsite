import { useEffect, useState } from "react";

import { PokemonCards } from "./PokemonCards.jsx";

export const Pokemon = () => {



    const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

    const [pokemon, setPokemon] = useState([]);

    const [loading , setLoading] = useState(true);

    const [error, setError] = useState(null);


    const fetchPokemon = async () => {

        try {

            const res = await fetch(API);

            const data = await res.json();

            const pokemonResults = data.results.map(async (curPokemon) => {

                const res = await fetch(curPokemon.url);

                const data = await res.json();

                return data;
               
            });
             

            const allResponses = await Promise.all(pokemonResults);

            console.log(allResponses);

            setPokemon(allResponses);
            setLoading(false);

        } catch (error) {

            console.log(error);
            setLoading(false);

            setError(error);

        }



    }


    useEffect(() => { fetchPokemon(); }, [])




    if (loading) {


        return (
        
        <div>
            <h2>Loading...</h2>
        </div>);
    }

    if (error) {

        return (
        
        <div>
            <h2>{error.message}</h2>
        </div>);
    }

    return (

        <>

            <section className="container">

                <header>
                    <h1>Pokemon Gallery</h1>
                </header>


                




                <div>

                    <ul className="cards">

                        {pokemon.map((curPokemon) => {

                            return (

                                <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />

                            );

                        })}
                    </ul>

                </div>






            </section>





        </>


    )


};