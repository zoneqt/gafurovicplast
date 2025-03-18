import { motion, MotionConfig } from "framer-motion";
import React from "react";

interface Props {
  active: boolean;
  handleClick: () => void;
}

function AnimatedHamburger({ active, handleClick }: Props) {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {/* WRAPPER */}
      <motion.div
        className="relative hidden w-10 h-10 max-lg:block"
        animate={active ? "open" : "closed"}
      >
        {/* BUTTON */}
        <motion.button
          initial={false}
          onClick={() => handleClick()}
          className="relative w-10 h-10 bg-white/0 transition-colors hover:bg-white/20 z-[100]"
          variants={{
            open: {
              borderRadius: ["10px", "10px", "0 10px 0 10px"],
            },
            closed: {
              borderRadius: ["0 10px 0 10px", "10px", "10px"],
            },
          }}
        >
          <motion.span
            style={{
              top: "35%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            className="absolute h-[2px] w-5 bg-white"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["35%", "50%", "50%"],
                background: ["white", "white", "black"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "35%"],
                background: ["black", "black", "white"],
              },
            }}
          />
          <motion.span
            style={{
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }}
            className="absolute h-[2px] w-5 bg-white"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-45deg"],
                background: "black",
              },
              closed: {
                rotate: ["-45deg", "0deg", "0deg"],
                background: "white",
              },
            }}
          />
          <motion.span
            style={{
              bottom: "35%",
              left: "calc(50% + 5px)",
              x: "-50%",
              y: "50%",
            }}
            className="absolute h-[2px] w-2 bg-white"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                bottom: ["35%", "50%", "50%"],
                left: "50%",
                background: "black",
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                left: "calc(50% + 5px)",
                bottom: ["50%", "50%", "35%"],
                background: "white",
              },
            }}
          />
        </motion.button>
      </motion.div>
    </MotionConfig>
  );
}

export default AnimatedHamburger;
