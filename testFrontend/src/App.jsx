import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Assets from "./assets/assets";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-yellow-400 selection:text-black">
      <div className="fixed top-0 -z-10  h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto ">
        <NavBar />
        <Hero />
      </div>
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
