import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import CalendarioViajes from './pages/CalendarioViajes';
import Terminos from "./pages/Terminos";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/calendario" element={<CalendarioViajes />} />
                <Route path="/terminos" element={<Terminos />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;