import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import HowItWorks from "./components/sections/HowItWorks.jsx";
import PhoneScene from "./components/scenes/PhoneScene.jsx";
import NotifyScene from "./components/scenes/NotifyScene.jsx";
import BusinessScene from "./components/scenes/BusinessScene.jsx";
import Places from "./components/sections/Places.jsx";
import Closing from "./components/sections/Closing.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="home">
        <Hero />
        <HowItWorks />
        {/* pinned scroll scenes: the phone, the notifications, the dashboard */}
        <PhoneScene />
        <NotifyScene />
        <BusinessScene />
        <Places />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
