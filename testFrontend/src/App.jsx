import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import ParticlesBackground from "./utils/ParticlesBackground";
import AboutMe from "./pages/About";

function App() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* particles background */}

      <ParticlesBackground className={"z-10"} />
      {/* navbar */}
      <NavBar />

      {/* content */}

      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>

      {/* toast notifications */}
      <ToastContainer />
    </div>
  );
}

export default App;
