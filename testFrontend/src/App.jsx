import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter
import "./App.css";

import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Service from "./pages/Service";

import Project from "./pages/Project";
import MyResume from "./pages/MyResume";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-yellow-400 selection:text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceId" element={<Service />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route path="/my-resume" element={<MyResume />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
