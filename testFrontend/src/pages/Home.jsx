import React from "react";
import { useAppStore } from "../store/AppStore";
import Typewriter from "../utils/TypingAnimation";

const Home = () => {
  return (
    <section className="bg-black flex items-center justify-center min-h-screen">
      <div className="md:mb-[40%] lg:mb-[20%] mb-[80%] md:text-left text-center">
        <h1 className="text-3xl md:text-5xl font-courier">
          <Typewriter text="Hello, I'm Chief" speed={0.13} />
          <Typewriter text="Full Stack Developer" speed={0.15} />
        </h1>
      </div>
    </section>
  );
};

export default Home;
