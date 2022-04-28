import { useEffect, useState } from "react";
import Card from '../../components/Card';
import styles from '../../App.css';

export default function PokemonList() {
    const [pokemon, setPokemon] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    const searching = !!search.length;
    const noResults = searching && !results.length;
    const pokemonList = searching ? results: pokemon;

    const handleSearch = (e) => {
        setSearch(e.target.value);
        const filteredPokemon = pokemon.filter((pokemon) => 
        pokemon.pokemon.toLowerCase().includes(e.target.value.toLowerCase().trim()));

        setResults(filteredPokemon);
    };

  useEffect(() => {
      const fetchPokemon = async () => {
          const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
          const  { results }  = await res.json();
          console.log(results);
          const pokemonData = results.map((poke) => ({
              img: poke.url_image,
              name: poke.pokemon,
              type: poke.type_1,
          }))
          setPokemon(pokemonData);
          setLoading(false);
      };
      fetchPokemon();

  }, []);

  return (
  <>
    <h2>Who's That Pokémon?</h2>
    <div className={styles.pokemon}>
        {pokemon.map((poke) => {
          return (
            <Card img={poke.img} name={poke.name} type={poke.type} />
          );
          })}
    </div>
  </>
  );
}