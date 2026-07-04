import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import PosterModal from '../components/PosterModal';
import viajes from '../data/viajes';

//Agrupa los viajes por meses automáticamente

const viajesPorMes = viajes.reduce((acc, viaje) => {
    if (!acc[viaje.mes]) acc[viaje.mes] = { nombreMes: viaje.nombreMes, viajes: [] };
    acc[viaje.mes].viajes.push(viaje); 
    return acc;
}, {});

export default function CalendarioViajes() {
    const location = useLocation();
    const [modalAbierto, setModalAbierto] = useState(null);
    const seccionRefs = useRef({});
    const { state } = useLocation();

    useEffect(() => {
        if (state?.abrirViaje) {
            // Pequeño delay para que la página termine de renderizar
            setTimeout(() => setModalAbierto(state.abrirViaje), 300);
        }
    }, [state]);

    // Scroll al mes correcto si viene con hash (#julio-2026)
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = seccionRefs.current[id];
            if (el) {
                setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth'});
        }
    }, [location]);

    const viajesFlat = viajes; // paranavegar con flechas en el modal
    const indexModal = modalAbierto ? viajesFlat.findIndex(v => v.id == modalAbierto.id) : -1;

    const irAnteriorModal = () => {
        const anterior = viajesFlat[(indexModal - 1 + viajesFlat.length) % viajesFlat.length];
        setModalAbierto(anterior);
    };

    const irSiguienteModal = () => {
        const siguiente = viajesFlat[(indexModal + 1) % viajesFlat.length];
        setModalAbierto(siguiente);
    };

    return (
        <div className="min-h-screen bg-[#012040] text-white">
            <Navbar />

            <div className="pagina-entrada">
                {/* Header de la página */}
                <div className="bg-[#ff7b30] pt-32 pb-12 px-6 lg:px-20">
                    <h1 className="text-5xl lg:text-7xl font-bold text-center tracking-wide">
                        CALENDARIO DE VIAJES
                    </h1>
                </div>

                {/* Secciones por mes */}
                <div className="px-6 lg:px-20 py-16 space-y-20">
                    {Object.entries(viajesPorMes).map(([mesId, { nombreMes, viajes: viajesMes }]) =>(
                        <section
                            key={mesId}
                            id={mesId}
                            ref={(el) => (seccionRefs.current[mesId] = el)}
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                                {nombreMes}
                            </h2>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                                {viajesMes.map((viaje) => (
                                    <button
                                        key={viaje.id}
                                        type="button"
                                        onClick={() => setModalAbierto(viaje)}
                                        className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                                    >
                                        <img
                                            src={viaje.poster}
                                            alt={viaje.artista}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Número del día - extrae el primer número de fecha */}
                                        <span className="absolute bottom-2 right-3 z-10 bg-[#012040]/60 backdrop-blur-sm text-white font-black text-2xl px-2 py-0.5 rounded-lg pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                                            {viaje.fecha.split(' ')[0]}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Modal */}
                {modalAbierto && (
                    <PosterModal
                        viaje={modalAbierto}
                        onCerrar={() => setModalAbierto(null)}
                        onAnterior={irAnteriorModal}
                        onSiguiente={irSiguienteModal}
                    />
                )}
                <Footer />
            </div>
        </div>
    );
}