"use client";

import React, { useState } from "react";
import Container from "./container";
import AnimatedHamburger from "./animated-hamburger";
import Logo from "./logo";
import { PiPhoneCall } from "react-icons/pi";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Windows from "./icons/windows";
import { CiLocationOn } from "react-icons/ci";

const Header = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => setActive((pv) => !pv);

  return (
    <>
      <div
        className={`w-full ${
          active ? "fixed" : "absolute"
        } top-0 z-[100] px-[60px] h-[130px] flex items-center max-md:px-[30px] max-md:h-[90px]`}
      >
        <Container className="max-w-[1710px]">
          <div className="flex justify-between items-center">
            <div className="z-[100]">
              <Logo
                className={`max-w-[120px] h-auto max-md:max-w-[80px] ${
                  active ? "text-black" : "text-white"
                }`}
              />
            </div>
            <div className="flex items-center gap-[20px] max-md:hidden">
              <Link
                href={""}
                className="w-[50px] h-[50px] rounded-full border-[1px] border-white flex items-center justify-center text-white transition-all hover:bg-primaryYellow hover:border-primaryYellow hover:text-black"
              >
                <FaFacebook className="text-[24px]" />
              </Link>
              <Link
                href={""}
                className="w-[50px] h-[50px] rounded-full border-[1px] border-white flex items-center justify-center text-white transition-all hover:bg-primaryYellow hover:border-primaryYellow hover:text-black"
              >
                <FaInstagram className="text-[24px]" />
              </Link>
              <Link
                href={"mailto:gafurovicplastdoo@gmail.com"}
                className="w-[50px] h-[50px] rounded-full border-[1px] border-white flex items-center justify-center text-white transition-all hover:bg-primaryYellow hover:border-primaryYellow hover:text-black"
              >
                <SiGmail className="text-[24px]" />
              </Link>

              <Link
                className="w-[190px] h-[50px] rounded-full border-[1px] border-white flex items-center justify-center gap-[10px] text-white transition-all hover:bg-primaryYellow hover:border-primaryYellow hover:text-black"
                aria-label="telephone"
                href="tel:+38761024472"
              >
                <PiPhoneCall className="text-[20px]" />
                <span className="font-light">+387 61 024 472</span>
              </Link>
            </div>
            <AnimatedHamburger handleClick={handleClick} active={active} />
          </div>
        </Container>
        <div
          className="fixed top-0 left-0 h-[100vh] w-full bg-background z-50 hidden max-md:block px-[30px] py-[30px] pt-[90px] overflow-hidden"
          style={{
            transform: active ? "translateX(0%)" : "translateX(-100%)",
            transition: "all 300ms ease",
          }}
        >
          <div className="flex flex-col justify-between h-full pt-[40px] relative z-20">
            <div className="flex flex-col gap-4">
              <Link
                className="w-[190px] h-[50px] rounded-full border-[1px] border-black flex items-center justify-center gap-[10px] text-black transition-all hover:bg-primaryYellow hover:border-primaryYellow hover:text-black"
                aria-label="telephone"
                href="tel:+38761024472"
              >
                <PiPhoneCall className="text-[20px]" />
                <span className="font-light">+387 61 024 472</span>
              </Link>
              <Link
                className="w-[190px] h-[50px] rounded-full border-[1px] border-black flex items-center justify-center gap-[10px] text-black transition-all hover:bg-primaryYellow hover:border-primaryYellow hover:text-black"
                aria-label="telephone"
                href="tel:+38761024473"
              >
                <PiPhoneCall className="text-[20px]" />
                <span className="font-light">+387 61 024 473</span>
              </Link>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div className="flex items-center gap-[10px] reltive z-[10]">
                <Link
                  href={""}
                  className="w-[50px] h-[50px] rounded-full border-[1px] border-black flex items-center justify-center text-black transition-all hover:bg-primaryYellow hover:border-primaryYellow hover:text-black"
                >
                  <FaFacebook className="text-[24px]" />
                </Link>
                <Link
                  href={""}
                  className="w-[50px] h-[50px] rounded-full border-[1px] border-black flex items-center justify-center text-black transition-all hover:bg-primaryYellow hover:border-primaryYellow hover:text-black"
                >
                  <FaInstagram className="text-[24px]" />
                </Link>
                <Link
                  href={"mailto:gafurovicplastdoo@gmail.com"}
                  className="w-[50px] h-[50px] rounded-full border-[1px] border-black flex items-center justify-center text-black transition-all hover:bg-primaryYellow hover:border-primaryYellow hover:text-black"
                >
                  <SiGmail className="text-[24px]" />
                </Link>
              </div>
              <div className="flex items-center gap-[5px]">
                <CiLocationOn className="text-[18px]" />
                <span className="leading-[1]">
                  Bosna i Hercegovina, Bugojno
                </span>
              </div>
            </div>
          </div>

          <Windows className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50vw] h-auto text-[#dfdfdf]/30 select-none" />
        </div>
      </div>
    </>
  );
};

export default Header;
