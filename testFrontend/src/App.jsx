import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import ParticlesBackground from "./utils/ParticlesBackground";

function App() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* particles background */}

      <ParticlesBackground />
      {/* navbar */}
      <NavBar />

      {/* content */}

      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* toast notifications */}
      <ToastContainer />
    </div>
  );
}

export default App;
