import React from "react";
import Section from "../components/section";
import Container from "../components/container";
import Tag from "../components/tag";
import Image from "next/image";
import ZikApp from "/public/images/zikApp.png";
import ZikLanding from "/public/images/zikLanding.png";
import WorkCard from "../components/work-card";

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
              <WorkCard
                title="ZIK"
                titleAlt="Landing"
                image={ZikLanding}
                tags={["Next.js", "Emotion.css"]}
              />
            </div>
            <div className="flex flex-col w-full max-lg:items-center">
              <WorkCard
                title="ZIK"
                titleAlt="App"
                image={ZikApp}
                tags={["React", "Redux Toolkit", "Tailwind"]}
                imgRight
              />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default FeaturedWork;
