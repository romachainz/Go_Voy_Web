import { Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import govoyLogo from '../assets/govoyLogoSinFondo.png';
import IconFacebook from '../assets/fbIcon.svg';
import IconInstagram from '../assets/igIcon.svg';
import IconWhats from '../assets/waIcon.svg';


export default function Footer() {
    const numeroWhatsApp ="527447252842"
    const mensajeWA = encodeURIComponent("Hola! Me gustaría obtener más información sobre los viajes de Go Voy.");


    return (
        <footer id="contacto" className="bg-[#050d1a] text-white">

            {/* Sección principal */}
            <div className="px-6 lg:px-20 py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                  {/* Logo */}  
                  <div className="shrink-0">
                        <img
                            src={govoyLogo}
                            alt="Go Voy"
                            className="w-40 h-auto"
                        />
                  </div>
                    {/* Slogan */}
                    <div className="text-center text-3xl lg:text-5xl font-bold leading-tight">
                        <p>
                            ¡Viaja con { ' '}
                            <span className="text-[#ff7b30]">estilo</span>
                            {' '}y sin
                        </p>
                        <p className="text-[#ff7b30]">preocupaciones!</p>
                    </div>

                    {/* Contacto y redes */}

                    <div className="flex gap-12 shrink-0">

                        {/* Atención al cliente */}
                        <div className="flex flex-col items-center gap-3">
                            <Phone className="w-10 h-10 text-white" strokeWidth={1.5} />
                            <p className="text-xs font-bold tracking-widest uppercase text-white/60">
                                Atención al cliente
                            </p>
                            
                            <a
                            href={`https://wa.me/${numeroWhatsApp}?text=${mensajeWA}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff7b30] font-bold text-lg hover:underline"
                            >
                                744 725 2842
                            </a>
                        </div>

                        {/* Redes sociales */}
                        <div className="flex flex-col items-center gap-3">
                            <MessageCircle className="w-10 h-10 text-white" strokeWidth={1.5} />
                            <p className="text-xs font-bold tracking-widest uppercase text-white/60">
                                Redes sociales
                            </p>
                            <div  className="flex gap-4 mt-1">
                                <a
                                    href="https://www.facebook.com/profile.php?id=100089244318456"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="hover:opacity-70 transition-colors"
                                >
                                    <img 
                                        src={IconFacebook}
                                        alt="Facebook"
                                        className="w-6 h-6" 
                                    />
                                </a>
                                <a 
                                    href={`https://wa.me/${numeroWhatsApp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="hover:text-[#ff7b30] transition-colors"
                                >
                                    <img 
                                        src={IconWhats}
                                        alt="WhatsApp"
                                        className="w-6 h-6"
                                    />
                                </a>
                                
                                <a
                                    href="https://www.instagram.com/go_voy_21/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="hover:text-[#ff7b30] transition-colors"
                                >
                                    <img
                                        src={IconInstagram}
                                        alt="Instagram"
                                        className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                {/* Barra inferior */}
                <div className="border-t border-white/10 px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
                    <p>© 2026 GoVoy. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link 
                            to="/terminos" 
                            className="hover:text-white/70 transition-colors"
                        >
                            Términos y condiciones
                        </Link>
                       {/* <Link
                            to="/privacidad"
                            className="hover:text-white/70 transition-colors"
                        >
                            Aviso de privacidad
                        </Link> */}
                    </div>
                </div>
        </footer>
    );
}