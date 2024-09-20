import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="mx-auto max-w-[1120px] w-full">{children}</div>;
};

export default Container;
