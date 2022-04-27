import { useEffect, useState } from "react";

export default function PokemonList() {
    const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
      const fetchPokemon = async () => {
          const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
          const { data } = res.json();
          console.log(data);
          const pokemonData = data.map((pokes) => ({
              img: pokes.url_image,
              name: pokes.pokemon,
              type: pokes.type,
          })),
          setPokemon(pokemonData);
      };
      fetchPokemon();

  }, []);

  return <div>Pokemon of the World</div>;
}