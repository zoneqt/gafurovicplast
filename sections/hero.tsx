"use client";

import React, { useEffect, useRef, useState } from "react";
import Section from "@/components/section";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from "swiper/react";
import ProzoriImg from "/public/images/hero-1.jpg";
import VrataImg from "/public/images/hero-2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Container from "@/components/container";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { sliderData } from "@/utils/static/slider-data";
import Link from "next/link";
import { PiPhoneCall } from "react-icons/pi";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [parallaxAmount, setParalaxAmount] = useState(ref.current?.clientWidth);
  const prev = useRef(null);
  const next = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const transform = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const clipPath = useMotionTemplate`inset(${transform}% 0 0 0)`;

  useEffect(() => {
    console.log(ref.current?.clientWidth);
    setParalaxAmount(
      ref.current?.clientWidth ? ref.current?.clientWidth * 0.95 : 0
    );
  }, [ref.current?.clientWidth]);

  return (
    <div ref={ref}>
      <Section className="min-h-[100vh] !py-0 !px-0 relative">
        <motion.div
          style={{ clipPath }}
          className="absolute w-[50px] h-[40vh] bg-primaryYellow/70 bottom-0 right-[107px] z-20 max-md:right-[77px] max-sm:hidden"
        ></motion.div>

        <div className="absolute bottom-[60px] right-[60px] text-white z-30 max-md:right-[30px] max-sm:hidden">
          <div className="flex items-center gap-[10px]">
            <div ref={prev} className="cursor-pointer">
              <SlArrowLeft className="text-[46px]" />
            </div>
            <div className="">{activeSlide + 1} / 2</div>
            <div ref={next} className="cursor-pointer">
              <SlArrowRight className="text-[46px]" />
            </div>
          </div>
        </div>
        <Swiper
          speed={1000}
          parallax={true}
          loop={true}
          modules={[Parallax, Navigation]}
          spaceBetween={0}
          effect="slide"
          onRealIndexChange={(swiper) => setActiveSlide(swiper.realIndex)}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prev.current;
            swiper.params.navigation.nextEl = next.current;
          }}
          navigation={{
            nextEl: next.current,
            prevEl: prev.current,
          }}
        >
          <>
            {sliderData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="w-full h-[100vh] relative overflow-hidden">
                  <div className="absolute w-full h-full bg-black/55 z-[1]"></div>
                  <div
                    className="w-full h-full"
                    data-swiper-parallax={parallaxAmount}
                  >
                    <Image
                      src={item.sliderImg}
                      alt={"Vrata"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full bottom-0 left-0 px-[60px] pb-[60px] text-white max-md:px-[30px] z-30">
                    <Container className="max-lg:max-w-full">
                      <div className="flex items-end max-lg:flex-col max-lg:items-start max-lg:gap-[20px] relative">
                        <div>
                          <div
                            className="text-[8vw] leading-[8vw] font-bold audiowide"
                            data-swiper-parallax="-2000"
                          >
                            {item.sliderTitle}
                          </div>
                          <div
                            className="text-[28px] leading-[28px] mt-[28px]"
                            data-swiper-parallax="-600"
                          >
                            {item.sliderSubTitle}
                          </div>
                        </div>

                        <div
                          className="max-w-[400px] mx-auto text-[16px] flex flex-col gap-[40px] max-lg:mx-0"
                          data-swiper-parallax="-100"
                        >
                          <p>{item.sliderContent}</p>
                          <Link
                            className="w-[190px] h-[50px] rounded-full border-[1px] border-white flex items-center justify-center gap-[10px] text-white transition-all hover:bg-primaryYellow hover:border-primaryYellow hover:text-black"
                            aria-label="telephone"
                            href="tel:+38761024472"
                          >
                            <PiPhoneCall className="text-[20px]" />
                            <span className="font-light">
                              Kontaktirajte nas
                            </span>
                          </Link>
                        </div>
                      </div>
                    </Container>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </>
        </Swiper>
      </Section>
    </div>
  );
};

export default Hero;
