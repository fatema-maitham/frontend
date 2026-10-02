import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import Mission from "./components/sections/Mission.jsx";
import Features from "./components/sections/Features.jsx";
import HowItWorks from "./components/sections/HowItWorks.jsx";
import PhoneScene from "./components/scenes/PhoneScene.jsx";
import NotifyScene from "./components/scenes/NotifyScene.jsx";
import Industries from "./components/sections/Industries.jsx";
import Places from "./components/sections/Places.jsx";
import CallToAction from "./components/sections/CallToAction.jsx";
import { useReveal } from "./lib/useReveal.js";

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Features />
        <HowItWorks />
        {/* pinned scroll scenes */}
        <PhoneScene />
        <NotifyScene />
        <Industries />
        <Places />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
