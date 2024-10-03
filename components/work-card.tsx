import React from "react";
import Tag from "./tag";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  titleAlt: string;
  tags: string[];
  image: StaticImageData;
  imgRight?: boolean;
}

const WorkCard = ({ title, titleAlt, tags, image, imgRight }: Props) => {
  return (
    <div className="bg-background py-[20px] flex flex-col rounded-[35px] gap-[20px] max-w-[600px] max-md:gap-[20px] max-md:py-[20px]">
      <div
        className={`flex px-[40px] items-center max-md:px-[20px] ${
          imgRight && "justify-end"
        }`}
      >
        <p className="text-[20px]">
          {title} <span className="text-textAlt ">{titleAlt}</span>
        </p>
      </div>
      <div
        className={`max-w-[calc(100%-40px)] max-md:max-w-[calc(100%-20px)] overflow-hidden ${
          imgRight ? "rounded-l-[25px] ml-auto" : "rounded-r-[25px]"
        }`}
      >
        <Image src={image} alt="" />
      </div>
      <div
        className={`flex items-center gap-[5px] px-[40px] max-md:px-[20px] flex-wrap ${
          imgRight && "justify-end"
        }`}
      >
        {tags.map((tag, index) => (
          <Tag key={index} name={tag} />
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
