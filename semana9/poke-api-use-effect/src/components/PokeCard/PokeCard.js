import React, { useEffect, useState } from "react";
import axios from "axios";


const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState ({});

    useEffect(() => {
        pegaPokemon(props.pokemon)
    }, [props.pokemon]);

    useEffect(() => {
        if (pokemon !== props.pokemon){
            pegaPokemon(props.pokemon)
        }
    }, [props.pokemon])

    const pegaPokemon = async (pokeName) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        setPokemon(response.data)
    }

    return(
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </div>
    );
}

export default PokeCard;