import enhypenBg from '../assets/enhypenBgD.jpg';
import enhypenBgM from '../assets/enhypenBgM.jpg';
import harryBg from '../assets/harryBgD.jpg';
import harryBgMobile from '../assets/harryBgM.jpg';
import katyBg from "../assets/karyBgD.jpg";
import katyBgM from "../assets/karyBgM.jpg";


const eventos = [
    {
        id: "enhypen-cdmx",
        artista: "ENHYPEN",
        artista2: "",
        recinto: "CDMX, ARENA CDMX",
        fecha: "11 DE JULIO 2026",
        fondo: enhypenBg ,
        fondoMobile: enhypenBgM,
    },
    {
        id: "harry-styles-cdmx",
        artista: "HARRY",
        artista2: "STYLES",
        recinto: "CDMX, ESTADIO GNP SEGUROS",
        fecha: "31 DE JULIO 2026",
        fondo: harryBg,
        fondoMobile: harryBgMobile,  
    },

    {
        id: "katy-perry-fenapo",
        artista: "KATY",
        artista2: "PERRY",
        recinto: "FENAPO, SAN LUIS POTOSÍ",
        fecha: "25 DE AGOSTO 2026",
        fondo: katyBg,
        fondoMobile: katyBgM,  
    },
    //Cuando se tengan más conciertos, se agregan otro objeti aquí
];

export default eventos;
