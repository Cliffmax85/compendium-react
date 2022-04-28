import styles from '../App.css';

export default function PokemonCard({ img, name, type }) {
    return (
      <div>
       <p>{name}</p>
       <img className={styles.img} src={img} alt="pokemon"/>
       <p>{type}</p>
      </div>
    );
  }