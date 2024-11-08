import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Filter from "./pages/Filter";
import Navbar from "./components/NavBar";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <Navbar />
      <div className="">
      <Routes>
        <Route path="/:filterType?" element={<Filter/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
