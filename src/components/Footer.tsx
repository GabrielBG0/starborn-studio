import React from "react";
import Image from "next/image";
import icon from "../../public/IconNoBackgound.svg";

export default function Footer() {
  return (
    <div className="w-full flex h-20 justify-between items-center relative z-10 mt-16">
      <div className="flex justify-start items-center w-full">
        <h1 className="text-2xl ml-7 font-medium">© 2023 Starborn Studio</h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <Image
          src={icon}
          alt="Starborn Logo"
          quality={100}
          style={{
            width: "80px",
            height: "80px",
          }}
          priority
        />
      </div>
      <div className="flex justify-evenly items-center text-base font-extralight w-full">
        <p>
          Made With ❤️ By{" "}
          <a
            className="underline"
            href="https://github.com/GabrielBG0"
            target="_blank"
            rel="noopener noreferrer"
          >
            GBG
          </a>
        </p>
      </div>
    </div>
  );
}
