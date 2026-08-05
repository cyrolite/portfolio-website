import Loader from "@/components/Loader"
import Background from "@/components/Background"
import Terminal from "@/components/Terminal"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import PageTransition from "@/components/PageTransition"
import About from "@/components/About"
import { TransitionProvider } from "@/components/TransitionContext"

export default function Home(){

  return(
    <TransitionProvider>
      <Loader>
        <Background/>

        <Navbar/>

        <main>

          <PageTransition>

            <section id="home" className="min-h-screen">
              <Hero/>
            </section>

            <section 
              id="about"
              className="
                h-screen
                flex
                flex-col
                justify-center
                overflow-hidden
              "
            >
              <About/>
            </section>


            <section 
              id="skills"
              className="
                h-screen
                flex
                flex-col
                justify-center
                overflow-hidden
              "
            >
              <Skills/>
            </section>


            <section
              id="projects"
              className="
                min-h-screen
                flex
                flex-col
                justify-center
                py-20
              "
            >
              <Projects/>
            </section>


            <section
              id="contact"
              className="
                h-screen
                flex
                flex-col
                justify-center
                overflow-hidden
              "
            >
              <Contact/>
            </section>

          </PageTransition>

        </main>

        <Terminal/>
      </Loader>
    </TransitionProvider>
  )
}