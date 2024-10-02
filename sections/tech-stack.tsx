"use client";

import Container from "@/components/container";
import Section from "@/components/section";
import React, { useRef } from "react";
import Badge from "@/components/badge";
import { stackData } from "@/assets/data/tech-stack";
import { motion, useInView } from "framer-motion";

const defaultAnimation = {
  hidden: {
    opacity: 0,
    transform: "translateY(-20px)",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0)",
  },
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center gap-[40px]">
          <h2 className="text-[32px] font-bold max-lg:text-[28px] leading-[1.2] max-md:text-[24px]">
            Tech Stack
          </h2>
          <motion.div
            ref={ref}
            className="flex items-center justify-center gap-[16px] flex-wrap"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stackData.map((stack, i) => (
              <motion.div
                key={i}
                variants={defaultAnimation}
                className={"w-[90px] h-[90px] max-md:w-[70px] max-md:h-[70px]"}
              >
                <Badge
                  className={
                    "w-[90px] h-[90px] max-md:w-[70px] max-md:h-[70px]"
                  }
                  icon={stack.icon}
                  name={stack.name}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default TechStack;
