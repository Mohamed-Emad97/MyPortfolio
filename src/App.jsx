import { Navbar , Skills , Contact , Services , Home , Resume , About , Portfilio , Projects , SingleProject} from "./Utilies/index";
import { Route , Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  return (
    <>
      <Navbar/>
    {location.pathname !== "/portfilio" && !location.pathname.startsWith("/portfilio/") && (
        <>
          <Home />
          <Services />
          <About />
          <Skills />
          <Portfilio />
          <Resume />
          <Contact />
        </>
      )}
       <Routes>
        <Route path="/portfilio" element={<Projects />} />
        <Route path="/portfilio/:id" element={<SingleProject />} />
      </Routes>
    </>
  )
}

export default App
