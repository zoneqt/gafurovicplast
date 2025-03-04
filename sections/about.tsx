"use client";

import Container from "@/components/container";
import Image from "next/image";
import React, { useRef } from "react";
import AboutImage from "/public/images/about.png";
import Section from "@/components/section";
import {
  motion,
  useInView,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { PiPhoneCall } from "react-icons/pi";

export const imageLoader = ({ src, width }: { src: string; width: number }) => {
  return `${src}?w=${width}}`;
};

const defaultAnimation = {
  hidden: {
    opacity: 0,
    transform: "translateY(25px)",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0)",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const imageAnimation = {
  hidden: {
    opacity: 0,
    transform: "translateY(100px)",
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0)",
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });
  const isInView = useInView(contentRef, { once: true });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const translateY = useMotionTemplate`${y}%`;
  return (
    <div ref={ref}>
      <Section className="pt-[200px] max-lg:pt-[80px]">
        <Container>
          <div className="flex items-center justify-center gap-[80px] max-lg:flex-col">
            <motion.div
              variants={imageAnimation}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="w-fit shrink-0 relative overflow-hidden max-lg:w-full"
            >
              {/*  <motion.div
                style={{ translateY }}
                className="absolute w-[50px] h-full bg-primaryYellow/70 left-[50%] translate-x-[-50%]"
              ></motion.div> */}
              <Image
                loader={imageLoader}
                src="/images/about-img.jpg"
                alt=""
                width={500}
                height={500}
                className="w-[400px] h-[550px] object-cover rounded-[15px] max-lg:w-full max-lg:h-[300px]"
              />
            </motion.div>
            <motion.div
              ref={contentRef}
              className="flex flex-col max-w-[450px] gap-[20px] max-lg:max-w-full"
              variants={{
                visible: {
                  transition: {
                    duration: 100,
                    ease: "ease",
                    staggerChildren: 0.3,
                    delayChildren: 0.3,
                  },
                },
                hidden: {},
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={defaultAnimation}
                className="text-[46px] font-bold"
              >
                Gafurović Plast
              </motion.h2>
              <motion.p variants={defaultAnimation} className="text-textAlt">
                Naša firma specijalizovana je za proizvodnju visokokvalitetne
                PVC i aluminijske stolarije, uključujući vrata i prozore koji
                zadovoljavaju najviše standarde izdržljivosti, energetske
                efikasnosti i estetskog izgleda. Sa dugogodišnjim iskustvom u
                industriji, posvećeni smo pružanju proizvoda koji kombinuju
                savremeni dizajn, vrhunsku funkcionalnost i pouzdanost.
              </motion.p>
              <motion.div variants={defaultAnimation}>
                <Link
                  className="w-[190px] h-[50px] rounded-full border-[1px] border-black flex items-center justify-center gap-[10px] text-black hover:bg-primaryYellow hover:border-primaryYellow hover:text-black hover:shadow-btnShadow transition ease duration-150"
                  aria-label="telephone"
                  href="tel:+38761024472"
                >
                  <PiPhoneCall className="text-[20px]" />
                  <span className="font-light">Kontaktirajte nas</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default About;
