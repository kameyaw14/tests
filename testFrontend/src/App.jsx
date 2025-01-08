import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter
import "./App.css";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
