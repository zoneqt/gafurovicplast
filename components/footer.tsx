import React from "react";
import { SiFacebook } from "react-icons/si";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Logo from "./logo";

const Footer = () => {
  return (
    <div className="py-[40px] bg-backgroundAlt flex items-center px-[60px]">
      <div className="mx-auto w-full max-w-[1710px]">
        <div className="flex justify-between gap-4 max-md:flex-col max-md:items-center max-md:gap-10">
          <div className="w-4/12 flex max-md:w-full max-md:justify-center">
            <div className="text-gray-100 max-md:text-center">
              <p className="font-semibold text-xl mb-3">Kontakt telefon</p>
              <p className="mb-2">+387 61 024 472</p>
              <p>+387 61 024 473</p>
            </div>
          </div>
          <div className="w-4/12 max-md:w-full flex justify-center">
            <Logo className={`max-w-[120px] h-auto text-white`} />
          </div>

          <div className="w-4/12 max-md:w-full flex justify-end max-md:justify-center">
            <div className="text-gray-100 max-md:text-center">
              <p className="font-semibold text-xl mb-3">Kontakt email</p>

              <p>gafurovicplastdoo@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[5px] py-10">
          <Link
            href={"/"}
            target="_blank"
            className="size-[40px] flex items-center justify-center text-gray-100 hover:bg-gray-100/10 rounded-full hover:text-primaryYellow"
          >
            <FaInstagram size={20} />
          </Link>

          <Link
            href={"/"}
            target="_blank"
            className="size-[40px] flex items-center justify-center text-gray-100 hover:bg-gray-100/10 rounded-full hover:text-primaryYellow"
          >
            <SiFacebook size={20} />
          </Link>

          <Link
            href={"mailto:gafurovicplastdoo@gmail.com"}
            className="size-[40px] flex items-center justify-center text-gray-100 hover:bg-gray-100/10 rounded-full hover:text-primaryYellow"
          >
            <FaEnvelope size={20} />
          </Link>
        </div>
        <div className="texe-center text-gray-100 text-sm flex justify-center">
          <div>
            {" "}
            Developed by{" "}
            <Link
              href={"https://benjaminvelic.dev/"}
              target="_blank"
              className="hover:text-primaryYellow"
            >
              benjaminvelic.dev
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
