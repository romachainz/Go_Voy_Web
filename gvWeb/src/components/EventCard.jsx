import { useNavigate } from 'react-router-dom';
import viajes from "../data/viajes";
import glassGovoy from '../assets/GlassGovoy.png';


export default function EventCard({ evento, eventoKey, onPrev, onNext}) {

    const navigate = useNavigate();

    if (!evento) return null;

    const handleVerMas = () => {
        const viajeSeleccionado = viajes.find(v =>
            v.artista.toLowerCase().includes(evento.artista.toLowerCase())
        );

        if (viajeSeleccionado) {
            navigate('/calendario', { state: { abrirViaje: viajeSeleccionado } });
        } else {
            navigate('/calendario');
        }
    };
    return (
        <div className="relative w-full min-h-screen overflow-hidden text-white bg-black">
            
            {/* Imagen desktop - oculta en móvil */}
            <img
                key={`desktop-${eventoKey}`}
                src={evento.fondo}
                alt={evento.recinto}
                className="animar-hero absolute inset-0 w-full h-full object-cover object-top hidden md:block"
            />

            {/* Imagen mobile - oculta en desktop */}
            <img 
                key={`mobile-${eventoKey}`}
                src={evento.fondoMobile || evento.fondo}
                alt={evento.recinto}
                className="animar-hero absolute inset-0 w-full h-full object-cover object-top block md:hidden"
            />

            <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
            

            {/* Capa de transición: se funde con el color de la siguiente sección */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-[#000000] pointer-events-none"/>


            {/* Capa 3: tarjeta de cristal flotando encima de todo */}
            <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 md:px-12 lg:px-20">
                <div className="relative max-w-sm md:max-w-xl p-8 md:p-12 lg:p-16">
                    {/* Imagen de glass con marca de agua de Govoy */}
                    <img
                        src={glassGovoy}
                        alt="Fondo de cristal"
                        className="absolute inset-0 w-full h-full object-contain object-left pointer-events-none drop-shadow-2xl"
                    />
                    {/* Contenido de la tarjeta */}
                    <div key={`contenido-${eventoKey}`} className="animar-hero relative z-10">
                        <p className="text-sm tracking-[0.1em] mb-6 font-light uppercase">
                            EVENTOS DESTACADOS
                        </p>

                        <h1 className="text-4xl md:text-6xl lg:text-[70px] font-bold leading-none mb-6 md:mb-11 tracking-wide">
                            {evento.artista}<br/>{evento.artista2}
                        </h1>

                        <div className="mb-8 md:mb-12 font-light tracking-wider space-y-2 text-base md:text-lg">
                            <p>{evento.recinto}</p>
                            <p>{evento.fecha}</p>
                        </div>

                        {/* Botones y controles */}
                        <div className="flex items-center gap-4 flex-wrap">
                            <button type="button" 
                                    onClick={handleVerMas}
                                    className="bg-[#ff7b30] hover:bg-[#e66a25] transition-colors px-8 md:px-10 py-3 md:py-4 rounded-md font-bold tracking-wider shadow-lg text-sm md:text-base"
                            >
                                VER MÁS
                            </button>

                            <div className="flex gap-3 md:gap-4">
                                <button type="button" onClick={onPrev} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/40 hover:bg-[#ff7b30] backdrop-blur-md flex items-center justify-center border border-white/20 transition-all text-2xl">
                                    ←
                                </button>
                                <button type="button" onClick={onNext} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/40 hover:bg-[#ff7b30] backdrop-blur-md flex items-center justify-center border border-white/20 transition-all text-2xl">
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        </div>
    );   
}