import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Service from "./pages/Service";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Project from "./pages/Project";
import MyResume from "./pages/MyResume";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-yellow-400 selection:text-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:serviceId" element={<Service />} />
          <Route path="/projects/:projectId" element={<Project />} />
          <Route path="/my-resume" element={<MyResume />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
