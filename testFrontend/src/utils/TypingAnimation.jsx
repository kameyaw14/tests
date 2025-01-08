import React from "react";
import { motion } from "framer-motion";

const Typewriter = ({ text, speed, className }) => {
  const letters = text.split("");

  return (
    <motion.div className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * speed, // Speed between letters
            duration: speed,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Typewriter;
