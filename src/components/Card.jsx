export default function PokeCard({ pokemon }) {
    return (
        <div className={styles['item']} >
            <h2>{pokemon.pokemon}</h2>
            <img src={pokemon.url_image} alt='pokemon' />
        </div>
    );
}