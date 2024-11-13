import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import TadobaParkPage from "./pages/TadobaPark";
import PenchParkPage from "./pages/penchpark";
import KanhaParkPage from "./pages/kanhapark";
import BandhavgarhParkPage from "./pages/bandhavgarh";
import Contactpage from "./pages/contact";
import AboutUsPage from "./pages/aboutuspage";
import Servicepage from "./pages/servicepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tadobapark" element={<TadobaParkPage />} />
          <Route path="/penchpark" element={<PenchParkPage />} />
          <Route path="/kanhapark" element={<KanhaParkPage />} />
          <Route path="/bandhavgarh" element={<BandhavgarhParkPage />} />
          <Route path="/contactus" element={<Contactpage />} />
          <Route path="/aboutus" element={<AboutUsPage/>} />
          <Route path="/services" element={<Servicepage/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
