import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HeroScene from "./components/scenes/HeroScene.jsx";
import LineScene from "./components/scenes/LineScene.jsx";
import PhoneScene from "./components/scenes/PhoneScene.jsx";
import LiveScene from "./components/scenes/LiveScene.jsx";
import NotifyScene from "./components/scenes/NotifyScene.jsx";
import BusinessScene from "./components/scenes/BusinessScene.jsx";
import FinalScene from "./components/scenes/FinalScene.jsx";

// The page is one story told by scrolling:
// standing in line -> join QLess -> leave -> watch your place move
// -> get notified -> your turn -> the business side -> get started
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroScene />
        <LineScene />
        <PhoneScene />
        <LiveScene />
        <NotifyScene />
        <BusinessScene />
        <FinalScene />
      </main>
      <Footer />
    </>
  );
}
