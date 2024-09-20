import React from "react";
import Container from "./container";
import Logo from "/public/images/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-[88px] flex items-center backdrop-blur-[10px] bg-[#2d2e32a8] sticky top-0 z-[100] px-[60px]">
      <Container>
        <div className="flex justify-between">
          <div>
            <Image src={Logo} alt="logo" />
          </div>
          <div className="flex items-center gap-[20px]">
            <div className="cursor-pointer hover:text-primaryGreen">About</div>
            <div className="cursor-pointer hover:text-primaryGreen">Work</div>
            <div className="cursor-pointer hover:text-primaryGreen">
              Contact
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
