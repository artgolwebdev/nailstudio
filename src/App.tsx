import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { QuickServices } from "./components/QuickServices";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <QuickServices />
      <Services />
      <About />
      <Gallery />
      <Booking />
      <Footer />
    </div>
  );
}