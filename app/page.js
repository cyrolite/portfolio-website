import Background from "@/components/Background"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Tools from "@/components/Tools"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function Home(){

  return(
    <>
      <Background/>
      
      <Navbar/>

      <main>
        <Hero/>
        <Skills/>
        <Tools/>
        <Projects/>
        <Contact/>
      </main>
    </>
  )
}