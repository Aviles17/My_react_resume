import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <div className="py-20 bg-[#0a192f]">
      <Proyectos/>
      </div>
      <div className="py-20 bg-[#0a192f]">
        <Contact/>
      </div>
    </div>
  );
}

export default App;
