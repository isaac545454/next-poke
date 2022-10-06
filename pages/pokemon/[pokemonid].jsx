import Image from 'next/image'
import style from "../../styles/detail.module.css";

export const getStaticPaths = async () =>{
  const maxPokemons = 100
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()
  
  //params 
   const paths = data.results.map((pokemon, index)=>{
    return{
      params: {pokemonid: (index + 1).toString()}
    }
  })

  return {
    paths,
    fallback: false,
  }

}

export const getStaticProps =async(context)=>{
  const id = context.params.pokemonid 
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await res.json()
  
  return{
    props: {pokemon: data},
  }
}

export default function Pokemon({pokemon}) {
  console.log(pokemon)
  return (
    <div className={style.container_detail}>
      <h1 className={style.title_detail}>{pokemon.name}</h1>
      <Image 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width="300"
        height="300"
        alt={pokemon.name}
       />
       <div>
        <h3>numero: </h3>
        <p>#{pokemon.id}</p>
       </div>
       <div>
        <h3>tipo: </h3>
        <div className={style.types_container}>
          {pokemon.types.map((item, index)=>(
            <span className={`${style.type} ${style['type_' + item.type.name]}`} key={index}>{item.type.name}</span>
          ))}
        </div>
       </div>
       <div  className={style.data_container}>
        <div className={style.data_height}>
          <h4>Altura: </h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={style.data_weight}>
          <h4>peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
       </div>
    </div>
  )
}