import Dashboard from "../src/components/Dashboard"
import Navbar from "./components/Navbar"
import Home from "./components/Dashboard-components/Home"
import Banques from "./components/Dashboard-components/Banques"
import Favorite from "./components/Dashboard-components/Favourite"
import Fournisseur from "./components/Dashboard-components/Fournisseurs"
import Monnaie from "./components/Dashboard-components/Monnaie"
import Soumisions from "./components/Dashboard-components/Soummision"
import Structures from "./components/Dashboard-components/Structures"
import Garanties from "./components/Dashboard-components/Garanties"
import Historique from "./components/Dashboard-components/Historique"


const App = () => {
  return (

    <div className="flex flex-row w-full" >
      <Dashboard />
      <div className="flex flex-col w-full ">
        <Navbar/>
        <Home/>
        <Banques/>
        <Favorite />
        <Fournisseur/>
        <Monnaie/>
        <Soumisions/>
        <Structures/>
        <Garanties />
        <Historique/>
      </div>
    </div>

  )
}

export default App


