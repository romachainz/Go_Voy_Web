import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import viajes from '../data/viajes';

export default function Buscador({ onCerrar }) {
    const [query, setQuery] = useState('');
    const [resultados, setResultados] = useState([]);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        inputRef.current?.focus();
    }, []); 

    const buscar = (texto) => {
        setQuery(texto) ;
        if (texto.trim().length < 2) {
            setResultados([]);
            return;
        }
        const termino = texto.toLowerCase();
        const encontrado = viajes.filter((v) =>
            v.artista.toLowerCase().includes(termino) ||
            v.nombreMes.toLowerCase().includes(termino) ||
            v.recinto?.toLowerCase().includes(termino) ||
            v.fecha.toLowerCase().includes(termino)
        );
        setResultados(encontrado);
    };

    const seleccionar = (viaje) => {
        setQuery('');
        setResultados([]);
        if (onCerrar) onCerrar();
        navigate('/calendario', { state: { abrirViaje: viaje } });
    };

    return (
        <div className="relative w-full">
            <div className="relative">
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => buscar(e.target.value)}
                    placeholder="Buscar artista, mes, fecha..."
                    className="bg-white/30 backdrop-blur-md text-white placeholder-white/80 px-4 py-1.5 pr-8 rounded-full text-sm outline-none border border-white/20 focus:bg-white/40 transition-all w-48 focus:w-64"
                />
                {query ? (
                    <button
                        type="button"
                        onClick={() => { setQuery(''); setResultados([]); }}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                        <X className="w-4 h-4 text-white/80" />
                    </button>
                ) : (
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/80 pointer-events-none" /> 
                )}
            </div>
            {/* Dropdown de resultados */}
            {resultados.length > 0 && (
                <div className="absolute top-full mt-2 left-0 w-72 bg-[#012040]/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden z-50">
                    {resultados.map((viaje) => (
                        <button
                            key={viaje.id}
                            type="button"
                            onClick={() => seleccionar(viaje)}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors text-left"
                        >
                            <img
                                src={viaje.poster}
                                alt={viaje.artista}
                                className="w-10 h-10 rounded-lg object-cover shrink-0"
                            />
                            <div>
                                <p className="text-white font-bold text-sm">{viaje.artista}</p>
                                <p className="text-white/60 text-xs">{viaje.fecha}</p>
                            </div>
                        </button> 
                    ))}

                    {/* Sin resultados */}
                    {query.length >= 2 && resultados.length === 0 && (
                        <p className="text-white/50 text-sm px-4 py-3">
                            No encontramos resultados para "{query}"
                        </p>
                    )}
                </div>
            )}

            {/* Sin resultados visible */}
            {query.length >= 2 && resultados.length === 0 && (
                <div className="absolute top-full mt-2 left-0 w-72 bg-[#012040]/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 z-50">
                    <p className="text-white/50 text-sm px-4 py-3">
                        No encontramos "{query}"
                    </p>
                </div>  
            )}
        </div>
    );
}