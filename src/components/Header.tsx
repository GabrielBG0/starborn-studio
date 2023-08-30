import React from "react";
import Image from "next/image";
import icon from "../../public/Starborn-Icon.svg";

export default function Header() {
  return (
    <div className="w-full flex h-20 lg:justify-between justify-center items-center relative z-10 mb-16">
      <div className="flex justify-start items-center">
        <Image src={icon} alt="Starbor Studio" />
        <h1 className="text-5xl ml-7 font-medium">Starborn Studio</h1>
      </div>
    </div>
  );
}
