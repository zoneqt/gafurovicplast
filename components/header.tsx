"use client";

import React from "react";
import Container from "./container";
import Logo from "/public/images/logo.svg";
import Image from "next/image";
import AnimatedHamburger from "./animated-hamburger";

const Header = () => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-[88px] max-lg:h-[68px] flex items-center backdrop-blur-[10px] bg-[#2d2e32a8] sticky top-0 z-[100] px-[60px] max-md:px-[32px] max-sm:px-[16px]">
      <Container>
        <div className="flex justify-between">
          <div>
            <Image src={Logo} alt="logo" className="max-lg:max-w-[40px]" />
          </div>
          <div className="flex items-center gap-[20px] max-md:hidden">
            <div
              className="cursor-pointer hover:text-primaryGreen"
              onClick={() => handleClick("about")}
            >
              About
            </div>
            <div
              className="cursor-pointer hover:text-primaryGreen"
              onClick={() => handleClick("work")}
            >
              Work
            </div>
            <div
              className="cursor-pointer hover:text-primaryGreen"
              onClick={() => handleClick("contact")}
            >
              Contact
            </div>
          </div>
          <AnimatedHamburger handleClick={handleClick} />
        </div>
      </Container>
    </div>
  );
};

export default Header;
