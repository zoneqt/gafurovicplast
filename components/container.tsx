import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`mx-auto max-w-[1330px] w-full ${className || ""}`}>
      {children}
    </div>
  );
};

export default Container;
