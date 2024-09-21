import React from "react";
import Image from "next/image";

interface Props {
  className?: string;
  iconClassName?: string;
  icon: string;
  name: string;
}
const Badge = ({ icon, className, name, iconClassName }: Props) => {
  return (
    <div
      className={`bg-backgroundAlt rounded-full flex items-center justify-center p-[20px] ${className}`}
    >
      <Image src={icon} alt={name} className={iconClassName} />
    </div>
  );
};

export default Badge;
