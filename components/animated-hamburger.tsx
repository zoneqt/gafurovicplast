import useScreenSize from "@/hooks/useWindowSize";
import { motion, MotionConfig } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "/public/images/logo.svg";

interface Props {
  handleClick: (id: string) => void;
}

function AnimatedHamburger({ handleClick }: Props) {
  const [active, setActive] = useState(false);
  const screenSize = useScreenSize();
  const [menuOffset, setMenuOffset] = useState(60);

  useEffect(() => {
    setMenuOffset(screenSize.width < 640 ? 32 : 64);
  }, [screenSize.width]);

  const listVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {/* WRAPPER */}
      <motion.div
        className="relative hidden w-10 h-10 max-md:block"
        animate={active ? "open" : "closed"}
      >
        {/* BUTTON */}
        <motion.button
          initial={false}
          onClick={() => setActive((pv) => !pv)}
          className="relative w-10 h-10 bg-white/0 transition-colors hover:bg-white/20 z-10"
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
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "35%"],
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
              },
              closed: {
                rotate: ["-45deg", "0deg", "0deg"],
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
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                left: "calc(50% + 5px)",
                bottom: ["50%", "50%", "35%"],
              },
            }}
          />
        </motion.button>
        {/* MENU */}
        <motion.div
          className="absolute right-0 top-0 rounded-[10px] overflow-hidden"
          style={{ width: "40px", height: "40px" }}
          transition={{ delay: active ? 0 : 0.75 }}
          variants={{
            open: {
              width: ["40px", `calc(100vw - ${menuOffset}px)`],
              height: ["40px", "calc(100vh - 32px)"],
              background: ["#25262e1", "#25262a"],
            },
            closed: {
              width: [`calc(100vw - ${menuOffset}px)`, "40px"],
              height: ["calc(100vh - 32px)", "40px"],
              background: ["#25262a", "#25262e1"],
            },
          }}
        >
          <div className="flex flex-col h-full">
            <motion.div
              transition={{
                delay: active ? 0.75 : 0,
              }}
              variants={{
                open: {
                  opacity: 1,
                  y: 0,
                },
                closed: {
                  opacity: 0,
                  y: -20,
                },
              }}
              className="flex items-center justify-center size-20 bg-background rounded-br-[10px]"
            >
              <Image src={Logo} alt="logo" className="max-lg:max-w-[40px]" />
            </motion.div>

            <motion.div
              animate={active ? "open" : "closed"}
              transition={{
                delay: active ? 1 : 0,
                staggerChildren: active ? 0.2 : 0,
              }}
              className="flex flex-col pl-[32px] my-auto"
            >
              <motion.div
                variants={listVariants}
                className="text-[46px] font-bold text-textAlt hover:text-primaryGreen cursor-pointer"
                onClick={() => handleClick("")}
              >
                About
              </motion.div>
              <motion.div
                variants={listVariants}
                className="text-[46px] font-bold text-textAlt hover:text-primaryGreen cursor-pointer"
                onClick={() => handleClick("")}
              >
                Work
              </motion.div>
              <motion.div
                variants={listVariants}
                className="text-[46px] font-bold text-textAlt hover:text-primaryGreen cursor-pointer"
                onClick={() => handleClick("")}
              >
                Contact
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}

export default AnimatedHamburger;
