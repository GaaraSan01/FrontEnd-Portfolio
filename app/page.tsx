import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Tecnologias from "./components/tecnologias/Tecnologias";
import Projetos from "./components/Projetos/Projetos";
import Contato from "./components/Contato/Contato";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Tecnologias />
      <Projetos />
      <Contato />
      <Footer />
    </>
  )
}
