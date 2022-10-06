import Image from "next/image"
import Link from "next/link";
import style from "../styles/card.module.css";

export default function Card({pokemon}) {
  return(
    <div className={style.card}>
      <Image 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width="150"
        height="150"
        alt={pokemon.name}
       />
       <p className={style.id}>#{pokemon.id}</p>
      <h3 className={style.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className={style.btn}>detalhes</a>
      </Link>
      
    </div>
  )
}