import Image from "next/image";
import styles from '../styles/home.module.css'
import Card from "../components/card";




export default function Home({pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
         {pokemons.map((pokemon)=>(<Card key={pokemon.id} pokemon={pokemon} />))}
      </div>
    </>

)}

export const getStaticProps = async()=>{
  const maxPokemons = 100
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results
    },
  }
}