import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Steps from "./components/Steps.jsx";
import Moment from "./components/Moment.jsx";
import Business from "./components/Business.jsx";
import Closing from "./components/Closing.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <Moment />
        <Business />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
