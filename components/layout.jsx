import Navbar from "./navbar";
import Footer from "./footer"
import Head from "next/head"

export default function Layout({children}){
  return(
   <>
   <Head>
    <link rel="shortcut icon" href="./favicon.ico" />
    <title> pokeNext </title>
   </Head>
   <Navbar />
   <main className="main-container">{children}</main>
   <Footer />
   </>
  )
}