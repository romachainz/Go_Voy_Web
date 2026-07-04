import { useEffect, useState } from "react";
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import govoyLogo from '../assets/govoylogo.jpeg';
import Buscador from './Buscador';

const enlaces = [
    { texto:"INICIO", ruta: "/", hash: null },
    { texto:"CALENDARIO DE VIAJES", ruta: "/calendario", hash: null },
    { texto:"¿QUIENES SOMOS?", ruta: "/#quienes-somos", hash: null },
    { texto:"TÉRMINOS Y CONDICIONES", ruta: "/terminos", hash: null },
    { texto:"CONTACTO", ruta: "/", hash: "contacto" },
];

export default function Navbar(){
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const alHacerScroll = () => {
            setScrolled(window.scrollY > window.innerHeight - 800);
        };
        window.addEventListener('scroll', alHacerScroll);
        return () => window.removeEventListener('scroll', alHacerScroll);
    }, []); 

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    const handleClick = (e, enlace) => {
        e.preventDefault();
        setMenuAbierto(false);

        if(enlace.hash) {
            // Buscamos si la sección (ej. "contacto") existe en la página actual
            const el = document.getElementById(enlace.hash);
            if(el){ 
                // Si sí existe (como el Footer, que está en todas partes), solo scrollea hacia abajo
                el.scrollIntoView({ behavior: 'smooth'});
            } else {
                // Si NO existe (como "¿Quienes somos?" cuando estemos en Términos), nos mandará a la ruta correcta.
                navigate(`${enlace.ruta}#${enlace.hash}`);
            }
        } else {
            //Si el enlace es normal (como Inicio o Calendario, solo cambia de página)
            navigate(enlace.ruta);
        }
    };


    return (
        <nav className={`fixed top-0 w-full z-20 text-white transition-colors duration-300 ${
            scrolled ? 'bg-[#012040]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
            <div className="flex items-center justify-between px-6 md:px-10 py-6">
                
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center border-2 border-white/20 shadow-lg">
                        <img
                            src={govoyLogo}
                            alt="Go Voy"
                            className="w-40 h-auto rounded-full"
                        />
                    </div>
                </div>

                {/* Enlace de navegación (desktop) */}
                
                <ul className="hidden md:flex gap-6 text-sm font-light tracking-wide">
                    {enlaces.map((enlace) => (
                        <li key={enlace.texto}>
                            <a 
                                href={enlace.hash ? `/#${enlace.hash}` : enlace.ruta}
                                onClick={(e) => handleClick(e, enlace)}
                                className="cursor-pointer hover:text-blue-300 transition-colors"
                            >
                                {enlace.texto}
                            </a>
                        </li>   
                    ))}
                </ul>
                        
                

                {/* Buscador y carrito (desktop) */} 
                <div className="hidden md:flex items-center gap-4">
                    <Buscador />
                  {/*  <div className="w-8 h-8 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer border border-white/20 hover:bg-white/40">
                        <ShoppingCart className="w-4 h-4"/>
                    </div> */}
                </div>
                    
                        {/* Carrito + botón de menú (mobile) */}
                <div className="flex items-center gap-3 md:hidden">
                   {/*} <div className="w-8 h-8 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer border-white/20">
                        <ShoppingCart className="w-4 h-4"/>
                    </div> */}
                        <button
                            type="button"
                            onClick={() => setMenuAbierto((prev) => !prev)}
                            aria-label={menuAbierto ? "Cerrar Menú" : "Abrir Menú"}
                            className="w-10 h-10 flex items-center justify-center"
                            >
                            {menuAbierto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6"/>}
                    </button>
                </div>
            </div>

            {/* Menú desplegable (mobile) */}
            {menuAbierto && (
                <div className="md:hidden bg-blue-950/95 backdrop-blur-md border-t border-white/10 px-6 py-6">
                    <ul className="flex flex-col gap-5 text-sm font-light tracking-wide mb-6">
                        {enlaces.map((enlace) => (
                            <li
                                key={enlace.texto}
                                href={enlace.hash ? `/#${enlace.hash}` : enlace.ruta}
                                onClick={(e) => handleClick(e, enlace)}
                                className="cursor-pointer hover:text-blue-300 transition-colors"
                            >
                                {enlace.texto}
                            </li> 
                        ))}
                    </ul>

                    <div className="relative">
                       <Buscador onCerrar={() => setMenuAbierto(false)} />
                    </div>
                </div>
            )}
        </nav>
    );
}