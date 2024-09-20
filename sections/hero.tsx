import Container from "@/components/container";
import Image from "next/image";
import React from "react";
import HeroImage from "/public/images/hero.png";
import Section from "@/components/section";
import Badge from "@/components/badge";
import ReactIcon from "/public/icons/react.svg";
import JsIcon from "/public/icons/js.svg";
import CsharpIcon from "/public/icons/csharp.svg";

const Hero = () => {
  return (
    <Section>
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

              <Badge
                icon={ReactIcon}
                name="React"
                className="w-[80px] h-[80px] absolute bottom-[83px] left-[-12px] shadow-badgeShadow  max-[1050px]:bottom-[55px]"
                iconClassName="w-[52px]"
              />
              <Badge
                icon={JsIcon}
                name="Javascript"
                className="w-[100px] h-[100px] absolute bottom-[0px] right-[25px] shadow-badgeShadow max-[1050px]:right-[12px]"
                iconClassName="w-[57px]"
              />
              <Badge
                icon={CsharpIcon}
                name="C#"
                className="w-[70px] h-[70px] absolute top-[12px] right-[48px] shadow-badgeShadow max-[1050px]:right-[24px] max-[1050px]:top-[-7px]"
                iconClassName="w-[44px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
