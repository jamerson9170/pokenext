import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.css";

export default function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://img.pokemondb.net/artwork/avif/${pokemon.name}.avif`}
        width="120"
        height="120"
        alt={pokemon.name}
      ></Image>
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className={styles.btn}>Detalhes</a>
      </Link>
    </div>
  );
}