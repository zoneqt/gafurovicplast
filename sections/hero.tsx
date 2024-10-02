"use client";

import Container from "@/components/container";
import Image from "next/image";
import React, { useRef } from "react";
import HeroImage from "/public/images/hero.png";
import Section from "@/components/section";
import Badge from "@/components/badge";
import ReactIcon from "/public/icons/react.svg";
import JsIcon from "/public/icons/js.svg";
import CsharpIcon from "/public/icons/csharp.svg";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref}>
      <Section className="min-h-[calc(100vh-88px)] max-lg:min-h-[calc(100vh-68px)] flex items-center">
        <Container>
          <div className="flex items-center justify-between gap-[40px] max-md:flex-col">
            <div className="flex flex-col gap-[10px] max-w-[570px] w-full max-md:text-center">
              <h1 className="text-primaryGreen text-[18px] font-regular max-lg:text-[16px] max-md:text-[14px]">
                Hi, I'm Benjamin Velić 👋
              </h1>
              <h2 className="font-bold text-[36px] text-textPrimary max-lg:text-[28px] leading-[1.2] max-md:text-[24px]">
                Frontend Developer <br></br> with Backend Expertise
              </h2>
              <p className="text-textAlt text-[18px] max-lg:text-[16px] max-md:text-[14px]">
                Crafting intuitive and dynamic user experiences with a strong
                foundation in backend development. Let's build something amazing
                together.
              </p>
            </div>

            <div className="">
              <div className="max-w-[440px] relative max-h-[440px] min-w-[300px] max-md:max-w-[300px] w-full h-full rounded-full bg-gradient-to-r from-[#2D2E32] via-26% to-[#28292B] via-100%">
                <Image
                  className="w-full rounded-full"
                  src={HeroImage}
                  alt="hero image"
                />

                <motion.div
                  style={{
                    y,
                    opacity,
                    transition:
                      "all 600ms cubic-bezier(0.68,-0.55,0.27,1.55) 25ms",
                  }}
                  className="absolute bottom-[83px] left-[-12px]"
                >
                  <Badge
                    icon={ReactIcon}
                    name="React"
                    className="w-[80px] h-[80px] shadow-badgeShadow  max-[1050px]:bottom-[55px]"
                    iconClassName="w-[52px]"
                  />
                </motion.div>
                <motion.div
                  style={{
                    y: y1,
                    opacity,
                    transition:
                      "all 600ms cubic-bezier(0.68,-0.55,0.27,1.55) 100ms",
                  }}
                  className="absolute bottom-[0px] right-[25px]"
                >
                  <Badge
                    icon={JsIcon}
                    name="Javascript"
                    className="w-[100px] h-[100px] shadow-badgeShadow max-[1050px]:right-[12px]"
                    iconClassName="w-[57px]"
                  />
                </motion.div>
                <motion.div
                  style={{
                    y: y2,
                    opacity,
                    transition: "all 1000ms cubic-bezier(0.68,-0.55,0.27,1.55)",
                  }}
                  className="absolute top-[12px] right-[48px]"
                >
                  <Badge
                    icon={CsharpIcon}
                    name="C#"
                    className="w-[70px] h-[70px] shadow-badgeShadow max-[1050px]:right-[24px] max-[1050px]:top-[-7px]"
                    iconClassName="w-[44px]"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Hero;
