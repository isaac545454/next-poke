import Image from 'next/image'
import styles from '../styles/abolt.module.css'

export default function About(){
  return(
    <div className={styles.about}>
      <h1>sobre o projeto</h1>
      <p> projeto em next.js
      </p>
      <Image
       src="/charizard.png"
        alt="pokemon"
         width="300"
         height="300" 
      />
    </div>
  )
}