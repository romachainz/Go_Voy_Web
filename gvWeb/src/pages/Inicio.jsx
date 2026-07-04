import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import SelectorMes from "../components/SelectorMes";
import QuienesSomos from "../components/QuienesSomos";
import Footer from "../components/Footer";

export default function Inicio() {
    return (
        <div className="min-h-screen relativa overflow-hidden">
            <Navbar />

        
            <div className="pagina-entrada">
                <HeroCarousel />
                <SelectorMes />
                <QuienesSomos />
                <Footer />
            </div>
        </div>
    );
}

