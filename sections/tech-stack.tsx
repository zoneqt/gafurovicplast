import Container from "@/components/container";
import Section from "@/components/section";
import HtmlIcon from "/public/icons/html.svg";
import CssIcon from "/public/icons/css.svg";
import TailwindIcon from "/public/icons/tailwind.svg";
import ReactIcon from "/public/icons/react.svg";
import JsIcon from "/public/icons/js.svg";
import CsharpIcon from "/public/icons/csharp.svg";
import SqlIcon from "/public/icons/sql.svg";
import MongoIcon from "/public/icons/mongo.svg";
import FigmaIcon from "/public/icons/figma.svg";
import AdobeIcon from "/public/icons/adobe.svg";
import React from "react";
import Badge from "@/components/badge";

const TechStack = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center gap-[40px]">
          <h2 className="text-[32px] font-bold max-lg:text-[28px] leading-[1.2] max-md:text-[24px]">
            Tech Stack
          </h2>
          <div className="flex items-center justify-center gap-[16px] flex-wrap">
            <Badge
              className="w-[90px] h-[90px] max-md:w-[70px] max-md:h-[70px]"
              icon={HtmlIcon}
              name={"HTML5"}
            />
            <Badge
              className="w-[90px] h-[90px] max-md:w-[70px] max-md:h-[70px]"
              icon={CssIcon}
              name={"CSS"}
            />
            <Badge
              className="w-[90px] h-[90px] max-md:w-[70px] max-md:h-[70px]"
              icon={TailwindIcon}
              name={"Tailwind"}
            />
            <Badge
              className="w-[90px] h-[90px] max-md:w-[70px] max-md:h-[70px]"
              icon={ReactIcon}
              name={"React"}
            />
            <Badge
              className="w-[90px] h-[90px] max-md:w-[70px] max-md:h-[70px]"
              icon={JsIcon}
              name={"Javascript"}
            />
            <Badge
              className="w-[90px] h-[90px] max-md:w-[70px] max-md:h-[70px]"
              icon={CsharpIcon}
              name={"C#"}
            />
            <Badge
              className="w-[90px] h-[90px] max-md:w-[70px] max-md:h-[70px]"
              icon={SqlIcon}
              name={"SQL"}
            />
            <Badge
              className="w-[90px] h-[90px] max-md:w-[70px] max-md:h-[70px]"
              icon={MongoIcon}
              name={"MongoDB"}
            />
            <Badge
              className="w-[90px] h-[90px] max-md:w-[70px] max-md:h-[70px]"
              icon={FigmaIcon}
              name={"Figma"}
            />
            <Badge
              className="w-[90px] h-[90px] max-md:w-[70px] max-md:h-[70px]"
              icon={AdobeIcon}
              name={"Adobe Ilustrator"}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TechStack;
