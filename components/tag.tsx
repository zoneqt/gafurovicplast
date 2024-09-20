import React from "react";

interface Props {
  name: string;
  className?: string;
}

const Tag = ({ name }: Props) => {
  return (
    <div className="bg-backgroundAlt px-[10px] py-[5px] rounded-[5px] text-[12px] text-primaryGreen">
      {name}
    </div>
  );
};

export default Tag;
