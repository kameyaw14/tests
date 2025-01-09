import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";
import ParticlesBackground from "./utils/ParticlesBackground";
import AboutMe from "./pages/About";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import ContactPage from "./pages/Contact";

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
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* toast notifications */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
    </div>
  );
}

export default App;
