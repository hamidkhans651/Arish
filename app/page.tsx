import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import Footer from "./components/Footer";

export default function Home() {
  return (

    <main>
      <nav>

        <Navbar />
      </nav>

      <section>
        <HeroPage />
      </section>

      <footer>
        <Footer />
      </footer>
    </main>



  );
}
