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
        const filteredPokemon = pokemon.filter((poke) => 
        poke.name.toLowerCase().includes(e.target.value.toLowerCase().trim()));

        setResults(filteredPokemon);
    };

  useEffect(() => {
      const fetchPokemon = async () => {
          const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
          const  { results }  = await res.json();
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
     <div>
         <input
           placeholder="find that pokemon"
           value={search}
           onChange={handleSearch}
         />
     </div>
     <div>
      {loading ? (
        <p>...Loading</p>
      ) : (
        <div className={styles.pokemon}>
            {pokemonList.map((pokemon) => {
                return (
                    <Card
                      img={pokemon.img}
                      name={pokemon.name}
                      type={pokemon.type}
                    />
                )
            })}
        </div>
      )}
    </div>
  </>
  );
}