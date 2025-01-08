import React, { useRef, useEffect } from "react";

const ParticlesBackground = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const particlesArray = [];

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Particle class
    class Particle {
      constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }

      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"; // Slightly transparent white
        ctx.font = `${this.size * 5}px Consolas, monospace`; // Use a coding font
        const symbols = ["</>"]; // Web dev symbols
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillText(symbol, this.x, this.y);
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce particles off edges
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }
    }

    // Create particles
    for (let i = 0; i < 100; i++) {
      particlesArray.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 1 + 0.5, // Slightly smaller size for text
          Math.random() * 2 - 1,
          Math.random() * 2 - 1
        )
      );
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    // Adjust canvas size on resize
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      className={className}
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        // zIndex: 1, // Keep it behind all other elements
      }}
    />
  );
};

export default ParticlesBackground;
