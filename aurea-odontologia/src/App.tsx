import DemoBanner from "./components/DemoBanner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Differentials from "./components/Differentials";
import About from "./components/About";
import Treatments from "./components/Treatments";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Journey from "./components/Journey";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded-full bg-petrol px-5 py-3 text-offwhite focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Ir para o conteúdo
      </a>
      <DemoBanner />
      <Header />
      <main id="conteudo">
        <Hero />
        <Differentials />
        <About />
        <Treatments />
        <Gallery />
        <Team />
        <Journey />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
