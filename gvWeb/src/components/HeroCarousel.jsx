import { useState, useEffect } from 'react';
import EventCard from './EventCard';
import eventos from '../data/eventos';

const INTERVALO = 6000; //cambia de eveno cada 6 segundos

export default function HeroCarousel(){
    const [index, setIndex] = useState(0);

    const irAnterior = () => {
        setIndex((prev) => (prev === 0 ? eventos.length - 1 : prev - 1));
    };

    const irSiguiente = () => {
        setIndex((prev) => (prev === eventos.length - 1 ? 0 : prev +1));
    };

    // auto-rotación: se reinicia cada vez que cambias de evento (manual o automático)
    useEffect(() => {
        const timer = setInterval(irSiguiente, INTERVALO);
        return () => clearInterval(timer);
    }, [index]); 

    return (
        <EventCard 
        evento={eventos[index]}
        eventoKey={index} 
        onPrev={irAnterior} 
        onNext={irSiguiente}
        />

    );
}