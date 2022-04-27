
export default function PokemonList() {
    const [pokemen, setPokemen] = useState([]);

    async function fetchPokemon(e) {
        e.preventDefault();
        const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');

        const json = await res.json();
        console.log(json);
    }
}