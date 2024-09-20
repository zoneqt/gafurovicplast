import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: Props) => {
  return (
    <div
      className={`px-[60px] max-md:px-[32px] max-sm:px-[16px] py-[80px] max-md:py-[40px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
