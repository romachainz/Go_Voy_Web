import { useState, useEffect } from 'react';
import foto1 from '../assets/picViaje1.png';
import foto2 from '../assets/picViaje2.png';
import foto3 from '../assets/picViaje3.png';
import foto4 from '../assets/picViaje4.png';

const picsTrips = [foto1, foto2, foto3, foto4];
const INTERVALO = 6000; // cambia de foto cada 6 segundos

export default function QuienesSomos() {
    const [ index, setIndex ] = useState(0);

    useEffect(() => {
        if (picsTrips.length <= 1) return; // no rota si solo hay una foto cargada
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % picsTrips.length);
        }, INTERVALO);
        return () => clearInterval(timer);
    }, []);

    return (
        <section 
            id="quienes-somos" 
            className="bg-[#012040] py-20 px-6 lg:px-20"
        >
            <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">

                {/* Foto con esquina inferior izquierda "cortada" */}
                <div className="relative w-full lg:w-1/2 aspect-square rounded-[40px] overflow-hidden shrink-0">
                   {picsTrips.map((foto, i) => (
                    <img
                        key={i}
                        src={foto}
                        alt="Equipo Go Voy"
                        className= {`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                    />
                   ))}
                </div>

                {/* Texto */}
                <div className="w-full lg:w-1/2 text-white">
                    <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
                        ¿QUIÉN ES <br/>
                        <span className="lg:text-8xl text-[#ff8434]">GO VOY?</span>
                    </h2>

                        <div className="space-y-1 text-lg text-white/90">
                            <p>Transporte cómodo y seguro a conciertos.</p>
                            <p>Vive la experiencia en unidades de lujo, conductor certificado, seguro de viajero y todo incluido.</p>
                            <p>¡Go Voy, siempre seguro a donde voy!</p>
                        </div>
                </div>
            </div>
        </section>
    );
}