import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Home from "./components/Dashboard-components/Home";
import Banques from "./components/Dashboard-components/Banques";
import Favourite from "./components/Dashboard-components/Favourite";
import Fournisseurs from "./components/Dashboard-components/Fournisseurs";
import Monnaie from "./components/Dashboard-components/Monnaie";
import Soumissions from "./components/Dashboard-components/Soummision";
import Structures from "./components/Dashboard-components/Structures";
import Garanties from "./components/Dashboard-components/Garanties";
import Historique from "./components/Dashboard-components/Historique";

const App = () => {
  return (
    <Router>
      <div className="flex flex-row w-full">
        <Dashboard />
        <div className="flex flex-col w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/banques" element={<Banques />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/fournisseurs" element={<Fournisseurs />} />
            <Route path="/monnaie" element={<Monnaie />} />
            <Route path="/soumissions" element={<Soumissions />} />
            <Route path="/structures" element={<Structures />} />
            <Route path="/garanties" element={<Garanties />} />
            <Route path="/historique" element={<Historique />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
