import { Pokemon } from "./Pokemon"
import "./index.css"

export const PokemonCards = ({ pokemonData }) => {


    return (
    <li className="pokemon-card">

        <figure>


            <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name}
            className="pokemon-image" />
            
        </figure>


       
    </li>

    );

};