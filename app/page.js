import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
    <Navbar />
    <About />
    <Skills />
    <Projects />
    <Contacts />
    <Footer />
    </main>
  )
}
