import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import meses from '../data/meses';
import { useNavigate } from 'react-router-dom';

export default function SelectorMeses() {
    const scrollRef = useRef(null);

    const retroceder = () => {
        scrollRef.current?.scrollBy({ left: -340, behavior: 'smooth'}); 
    };
    
    const avanzar = () => {
        scrollRef.current?.scrollBy({ left: 340, behavior: 'smooth'});
    };

    const navigate = useNavigate();

    return (
        <section className="relative bg-linear-to-b from-[#000000] to-[#012040] pt-20 pb-24 px-6 lg:px-20">
            {/* Encabezado */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-wide">
                    ¿CUÁNDO ES TU CONCIERTO?
                </h2>
                <p className="text-lg text-white/80">
                    ¡Encuentra la fecha de tu próximo viaje!
                </p>
            </div>

            {/* Fila de meses con scroll horizontal */}
            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                        {meses.map((mes) => (
                            <button 
                                key={mes.id}
                                type="button"
                                onClick={() => navigate(`/calendario#${mes.id}`)}
                                className="relative shrink-0 w-72 h-80 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)] group"
                            >

                                {/* Poster (o degradado mientras no tenga la imagen lista) */}
                            {mes.poster ? (
                                <img
                                    src={mes.poster}
                                    alt={mes.nombre}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />    
                            ) : (
                                <div className="absolute inset-0 w-full h-full bg-linear-to-br from-slate-600 to-slate-800"/>   
                            )} 

                            {/* Capa de cristal encima del poster */}
                            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] group-hover:bg-black/20 transition-colors"/>

                            

                            {/* Nombre del mes */}
                            <span className="absolute bottom-8 left-6 z-10 text-2xl font-bold text-white tracking-wide">
                                {mes.nombre}
                            </span> 
                           </button>   
                        ))}
                </div>

                {/*Flecha izquierda: retrocede */}
                <button 
                    type="button"
                    onClick={retroceder}
                    aria-label="Ver meses anteriores"
                    className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/60 hover:bg-[#ff7b30] backdrop-blur-md items-center justify-center border border-white/20 transition-all"
                >
                    <ChevronLeft className="w-6 h-6"/>
                </button>
                {/* Flecha: empuja el scroll hacia adelante */}
                <button
                    type="button"
                    onClick={avanzar}
                    aria-label="Ver más meses"
                    className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/60 hover:bg-[#ff7b30] backdrop-blur-md items-center justify-center border border-white/20 transition-all"
                >
                    <ChevronRight className="w-6 h-6"/>    
                </button>    
             </div>
        </section>
    );
}