"use client";

import Container from "@/components/container";
import Section from "@/components/section";
import { servicesData } from "@/utils/static/services";
import Image from "next/image";
import React, { useRef } from "react";
import { imageLoader } from "./about";
import Link from "next/link";
import { PiPhoneCall } from "react-icons/pi";
import { motion, useInView } from "framer-motion";

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

const Services = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true });
  return (
    <Section>
      <Container>
        <h2 className="text-center uppercase mb-[80px] text-textAlt text-[18px] tracking-[10px]">
          Usluge
        </h2>
        <motion.div
          ref={contentRef}
          className="grid gap-[80px] grid-cols-4 max-[1200px]:grid-cols-2 max-[1200px]:gap-[40px] max-md:grid-cols-1"
          variants={{
            visible: {
              transition: {
                duration: 100,
                ease: "ease",
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
            hidden: {},
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {servicesData.map((service, i) => (
            <motion.div key={i} variants={defaultAnimation}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Services;

interface Props {
  title: string;
  image: string;
  description: string;
}

export const ServiceCard = ({ title, image, description }: Props) => {
  return (
    <div className="flex flex-col h-full gap-[20px]">
      <h3 className="text-[24px] font-medium">{title}</h3>
      <Image
        loader={imageLoader}
        src={image}
        width={500}
        height={500}
        alt=""
        className="w-full h-[165px] object-cover rounded-[10px] shadow-imageShadow"
      />
      <p className="text-textAlt">{description}</p>
      <Link
        className="w-[50px] h-[50px] mt-auto rounded-full border-[1px] border-black flex items-center justify-center gap-[10px] text-black hover:bg-primaryYellow hover:border-primaryYellow hover:text-black hover:shadow-btnShadow transition ease duration-150"
        aria-label="telephone"
        href="tel:+38761024472"
      >
        <PiPhoneCall className="text-[20px]" />
      </Link>
    </div>
  );
};
