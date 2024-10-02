"use client";

import Container from "@/components/container";
import Image from "next/image";
import React from "react";
import AboutImage from "/public/images/about.png";
import Section from "@/components/section";

const About = () => {
  return (
    <div id="about">
      <Section className="bg-backgroundAlt">
        <Container>
          <div className="flex items-center gap-[80px] max-lg:gap-[40px] max-[950px]:flex-col-reverse ">
            <div className="max-w-[340px] w-full">
              <Image className="w-full" src={AboutImage} alt="about image" />
            </div>

            <div className="flex flex-col gap-[20px] w-full">
              <h2 className="font-bold text-[36px] text-textPrimary max-lg:text-[28px] leading-[1.2] max-md:text-[24px]">
                Background
              </h2>
              <p className="text-textAlt text-[18px] max-lg:text-[16px] max-md:text-[14px]">
                I'm currently an{" "}
                <span className="text-textPrimary">Developer</span> at{" "}
                <span className="text-primaryGreen">ZIK</span> building things
                for the web with some awesome people. Since joining in 2017,
                I've been part of the journey from startup to becoming a{" "}
                <span className="text-textPrimary">
                  leader in market analytics software
                </span>
                .
              </p>
              <p className="text-textAlt text-[18px] max-lg:text-[16px] max-md:text-[14px]">
                As a software developer, I love connecting the dots between
                engineering and design—leveraging my technical expertise and
                design sense to craft visually appealing products. I strive to
                create applications that are not only scalable and efficient
                behind the scenes but also deliver seamless, pixel-perfect user
                experiences.
              </p>
              <p className="text-textAlt text-[18px] max-lg:text-[16px] max-md:text-[14px]">
                <span className="text-textPrimary">
                  When I'm away from the computer
                </span>
                , you’ll likely find me spending quality time with my wife and
                daughter or relaxing with friends.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default About;
