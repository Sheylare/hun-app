import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import NailArtPage from "./pages/NailArtPage/NailArtPage";
import NailArtDetailsPage from "./pages/NailArtPage/NailArtDetailsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import CarritoPage from "./pages/CarritoPage/CarritoPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
       <Navbar /> 

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reserva" element={<ReservationPage />} />
        <Route path="/nailart" element={<NailArtPage />} />
        <Route path="/nailart/:id" element={<NailArtDetailsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
