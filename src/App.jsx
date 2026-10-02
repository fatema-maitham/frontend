import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import ForBusinesses from "./components/ForBusinesses.jsx";
import Benefits from "./components/Benefits.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ForBusinesses />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}
