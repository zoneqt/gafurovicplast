import React from "react";
import Section from "../components/section";
import Container from "../components/container";
import Tag from "../components/tag";
import Image from "next/image";
import ZikApp from "/public/images/zikApp.png";
import ZikLanding from "/public/images/zikLanding.png";
import WorkCard from "../components/work-card";
import Link from "next/link";

const FeaturedWork = () => {
  return (
    <div id="work">
      <Section className="bg-backgroundAlt">
        <Container>
          <div className="flex gap-[32px] max-lg:flex-col">
            <div className="flex flex-col w-full max-lg:items-center">
              <div>
                <h2 className="text-[36px] font-bold my-[80px] max-lg:text-[28px] leading-[1.2] max-md:my-[40px] max-md:text-[24px]">
                  Featured Work
                </h2>
              </div>
              <Link href={"https://www.zikanalytics.com/"} target="_blank">
                <WorkCard
                  title="ZIK"
                  titleAlt="Landing"
                  image={ZikLanding}
                  tags={["Next.js", "Emotion.css"]}
                />
              </Link>
            </div>
            <div className="flex flex-col w-full max-lg:items-center">
              <Link href={"https://app.zikanalytics.com/login"} target="_blank">
                <WorkCard
                  title="ZIK"
                  titleAlt="App"
                  image={ZikApp}
                  tags={["React", "Redux Toolkit", "Tailwind"]}
                  imgRight
                />
              </Link>
            </div>
          </div>
          <div className="text-center mt-10 text-lg text-textAlt">
            More projects coming soon ... 🧙
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default FeaturedWork;
