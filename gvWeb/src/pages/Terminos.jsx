import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const secciones = [
    {
        titulo: "1. Políticas de Reserva y Pagos",
        intro: null,
        puntos: [
            { subtitulo: "Anticipos:", texto: "Para asegurar tu lugar en cualquiera de nuestros viajes, es indispensable realizar el pago de un anticipo o el pago total (según se especifique en la ruta) a través de los métodos oficiales de Go Voy." },
            { subtitulo: "Confirmación:", texto: "Tu lugar no se considerará apartado hasta que el equipo de Go Voy te envíe el boleto o mensaje de confirmación correspondiente." },
            { subtitulo: "Transferibilidad:", texto: "Los lugares son transferibles a otra persona siempre y cuando se notifique a nuestro equipo con al menos 48 horas de anticipación al viaje." },
        ],
    },
    {
        titulo: "2. Políticas de Cancelación y Reembolsos (Devoluciones)",
        intro: "Entendemos que los planes pueden cambiar, por lo que nuestras políticas de devolución operan bajo los siguientes lineamientos:",
        puntos: [
            { subtitulo: "Cancelaciones con 7 días de anticipación:", texto: "Se reembolsará el 100% del monto pagado por el servicio de transporte." },
            { subtitulo: "Cancelaciones entre 6 - 3 días de anticipación:", texto: "Se retendrá el monto del anticipo por gastos de logística y bloqueo del asiento. Se reembolsará únicamente el excedente (en caso de haber liquidado la totalidad del viaje)." },
            { subtitulo: "Cancelaciones con menos de 3 días de anticipación:", texto: "No habrá devoluciones ni reembolsos bajo ninguna circunstancia, ya que los espacios en las unidades están pagados y contemplados para el viaje." },
            { subtitulo: "Paquetes con boleto de acceso:", texto: "En los paquetes que incluyen boleto para el concierto o evento, el costo del boleto no es reembolsable en ningún caso, de acuerdo con las políticas de las boleteras oficiales (Ticketmaster, Superboletos, etc.)." },
        ],
    },
    {
        titulo: "3. Cancelación o Reprogramación del Evento (Fuerza Mayor)",
        intro: null,
        puntos: [
            { subtitulo: null, texto: "Si el artista o la boletera cancelan el evento, Go Voy realizará la devolución del costo del transporte al 100%, o bien, se podrá dejar como saldo a favor para un viaje futuro." },
            { subtitulo: null, texto: "Si el evento es pospuesto o reprogramado, tu lugar en nuestro transporte seguirá siendo válido para la nueva fecha. Si no puedes asistir en la nueva fecha, aplicarán las políticas estándar de cancelación del punto 2." },
            { subtitulo: null, texto: "Si la demanda para el artista no se ve favorable en la realización del servicio, contemplamos máximo 1 semana para poder cancelar el servicio y notificar a los pasajeros con un reembolso del total brindado." },
        ],
    },
    {
        titulo: "4. Puntualidad y Abordaje",
        intro: null,
        puntos: [
            { subtitulo: null, texto: "Es responsabilidad exclusiva del pasajero llegar al punto de encuentro con al menos 10 minutos de anticipación a la hora de salida pactada." },
            { subtitulo: null, texto: "Por respeto al resto de los viajeros, las unidades de Go Voy partirán a la hora exacta indicada. No hay tiempo de tolerancia adicional." },
            { subtitulo: null, texto: "Si el pasajero pierde su viaje por impuntualidad, no procederá ningún tipo de reembolso." },
        ],
    },
    {
        titulo: "5. Responsabilidad del Pasajero",
        intro: null,
        puntos: [
            { subtitulo: null, texto: "Go Voy se compromete a brindar un viaje seguro y cómodo; sin embargo, no nos hacemos responsables por objetos personales olvidados, perdidos o dañados dentro de las unidades." },
            { subtitulo: null, texto: "Nos reservamos el derecho de negar el abordaje o bajar de la unidad a cualquier persona que presente estado de ebriedad extremo, actitudes violentas o que comprometa la seguridad de los demás pasajeros y el conductor." },
        ],
    },
];


export default function Terminos() {
    return (
        <div className="min-h-screen bg-[#afcadb]">
            <Navbar />

            <div className="pagina-entrada">
                {/* Header */}
                <div className="bg-[#012040] pt-32 pb-12 px-6 lg:px-20">
                    <h1 className="text-4xl text-center lg:text-6xl font-black text-[#ff7b30] tracking-wide mb-6">
                        TÉRMINOS Y CONDICIONES
                    </h1>
                    
                </div>

                {/* Contenido */}
                <div className="px-6 lg:px-24 pb-20 py-16 space-y-10 max-w-5xl">
                    <p className="text-[#012040] text-base lg:text-lg max-w-4xl">
                        Bienvenido a Go Voy. Al realizar una reserva con nosotros, aceptas los siguientes términos y condiciones que garantizan la seguridad, comodidad y claridad para todos nuestros viajeros.
                    </p>
                    {secciones.map((seccion) => (
                        
                        <div key={seccion.titulo}>
                            <h2 className="text-lg font-bold text-[#012040] mb-2">
                                {seccion.titulo}
                            </h2>
                            {seccion.intro && (
                                <p className="text-[#012040] mb-3 text-sm lg:text-base">
                                    {seccion.intro}
                                </p>
                            )}
                            <ul className="space-y-2">
                                {seccion.puntos.map((punto, i) => (
                                    <li key={i} className="flex gap-2 text-sm lg:text-base text-[#012040]">
                                        <span className="mt-1 shrink-0">•</span>
                                        <p>
                                            {punto.subtitulo && (
                                                <span className="font-bold">{punto.subtitulo} </span>
                                            )}
                                            {punto.texto}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Footer />
            </div>
        </div>
    );
}