import Dashboard from "../src/components/Dashboard"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <div className="flex flex-row" >
        <Dashboard />
        <Navbar />
      </div>
    </>
  )
}

export default App


