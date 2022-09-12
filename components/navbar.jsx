import Link from "next/link";
import Image from 'next/image'
import Styles from '../styles/navbar.module.css'

export default function Header() {
  return(
    <nav className={Styles.navbar}>
      <div className={Styles.logo}>
        <Image 
        src="/pokeball.png"
        width="30"
        height="30"
        alt="pokenext"
        />
        <h1>pokeNext</h1>
      </div>
      <ul className={Styles.link_items}>

        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>

      </ul>
    </nav>
  )
}