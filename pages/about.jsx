import Image from 'next/image'
import styles from '../styles/abolt.module.css'

export default function About(){
  return(
    <div className={styles.about}>
      <h1>sobre o projeto</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
       aut aperiam quae nobis quidem molestiae esse ipsum quia ducimus 
       accusantium quis voluptatibus similique explicabo ipsam tempora atque
        saepe, a cupiditate!
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