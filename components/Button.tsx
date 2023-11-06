import Image from "next/image";
import React from "react";

interface ButtonProps {
  text: string;
  type: "button" | "submit";
  icon?: string;
  variant: string;
}

export default function Button({
  text,
  variant,
  icon,
  type,
}: ButtonProps): React.JSX.Element {
  return (
    <button
      className={`rounded-full flexCenter border gap-3 ${variant}`}
      type={type}
    >
      <label className="bold-600 whitespace-nowrap">{text}</label>
      {icon && <Image src={icon} alt="login" width={20} height={20} />}
    </button>
  );
}
