import { useEffect, useState } from "react";

export default function PokemonList() {
    const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
      const fetchPokemon = async () => {
          const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
          const data = res.json();
          console.log(data);
          setPokemon(data.results);
      };
      fetchPokemon();

  }, []);

  return (
  <div>Search Pokemon of the World</div>
  );
}