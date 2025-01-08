import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      {/* navbar */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
