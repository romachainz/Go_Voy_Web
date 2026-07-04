import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { createPortal } from 'react-dom'

export default function PosterModal({ viaje, onCerrar, onAnterior, onSiguiente }) {
   if (!viaje) return null;
   
   const mensajeWhatsApp = `Hola! Me interesa el viaje a ${viaje.artista} el ${viaje.fecha}. ¿Tienen lugares disponibles?`;
   const urlWhatsApp = `https://wa.me/${viaje.whatsapp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

   return createPortal(
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-6"
        onClick={onCerrar}
    >
        <div
            className="relative bg-[#012040] rounded-3xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl max-h-[90vh] shadow-2xl"
            style={{ maxHeight: 'calc(100vh - 48px)' }}
            onClick={(e) => e.stopPropagation()}
        >
            {/* Botón cerrar */}
            <button
                type="button"
                onClick={onCerrar}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center hover:bg-[#ff7b30] transition-colors"
            >
                <X className="w-5 h-5 text-white"/>
            </button>

            {/* Poster */}
            <div className="w-full md:w-1/2 shrink-0 h-56 md:h-auto">
                <img
                    src={viaje.poster}
                    alt={viaje.artista}
                    className="w-full h-full object-cover object-top"
                />
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between text-white overflow-y-auto">
                <div>
                    <p className="text-[#ff7b30] font-bold text-sm tracking-widest uppercase mb-2">
                    {viaje.info}  
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-1">{viaje.artista}</h2>
                    <p className="text-white/70 text-lg mb-6">{viaje.fecha}</p>

                    <div className="space-y-3 mb-8">
                        <p className="text-xl md:text-2xl font-bold text-[#ff7b30]">{viaje.tipo}</p>
                        <div>
                            <p className="text-sm text-white/60 uppercase tracking-wide mb-1">Salida desde:</p>
                            {viaje.salidas.map((salida) => (
                                <p key={salida} className="text-white/90">• {salida}</p>
                            ))}
                        </div>
                        <div className="space-y-1 pt-2">
                            {viaje.precio && (
                                <p className="text-2xl md:text-3xl font-bold">
                                    {viaje.precio}
                                    {viaje.salida1 && (
                                        <span className="text-base font-light text-white/60 ml-2">
                                            {viaje.salida1}
                                        </span>
                                    )} 
                                </p>
                            )}

                            {viaje.precio2 && (
                                <p className="text-2xl md:text-3xl font-bold">
                                    {viaje.precio2}
                                    {viaje.salida2 && (
                                        <span className="text-base font-light text-white/60 ml-2">
                                            {viaje.salida2}
                                        </span>
                                    )}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Botón de WhatsApp */}

                <a  
                    href={urlWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#1da851] transition-colors text-white font-bold py-4 rounded-xl text-center text-lg trancking-wide mt-4 shrink-0"
                >
                    Contactar por WhatsApp
                </a>
            </div>  
                {/* Flechas navegación entre posters */}
                <button
                    type="button"
                    onClick={onAnterior}
                    className="absolute left-4 top-28 w-10 h-10 rounded-full bg-black/40 hover:bg-[#ff7b30] flex items-center justify-center border border-white/20 "
                 >
                    <ChevronLeft className="w-5 h-5 text-white"/>
                </button>
                <button
                    type="button"
                    onClick={onSiguiente}
                    className="absolute right-4 top-28 w-10 h-10 rounded-full bg-black/40 hover:bg-[#ff7b30] flex items-center justify-center border border-white/20 "
                 >
                    <ChevronRight className="w-5 h-5 text-white" />    
                </button>             
        </div>
    </div>,
    document.body
   );
}