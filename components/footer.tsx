import React from "react";
import Container from "./container";
import { SiLinkedin } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-[88px] bg-backgroundAlt flex items-center px-[60px]">
      <Container>
        <div className="flex items-center justify-center gap-[5px]">
          <Link
            href={"https://www.linkedin.com/in/velic-benjamin-756548157/"}
            target="_blank"
            className="size-[40px] flex items-center justify-center hover:bg-background rounded-full hover:text-primaryGreen"
          >
            <SiLinkedin size={20} />
          </Link>

          <Link
            href={"https://www.facebook.com/zoneqt"}
            target="_blank"
            className="size-[40px] flex items-center justify-center hover:bg-background rounded-full hover:text-primaryGreen"
          >
            <SiFacebook size={20} />
          </Link>

          <Link
            href={"mailto:benjaminvelic.dev@gmail.com"}
            className="size-[40px] flex items-center justify-center hover:bg-background rounded-full hover:text-primaryGreen"
          >
            <FaEnvelope size={20} />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
