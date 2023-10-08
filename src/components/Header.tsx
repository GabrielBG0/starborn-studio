"use client";
import React from "react";
import Image from "next/image";
import icon from "../../public/StarbornIcon.svg";

export default function Header() {
  function scrollToId(id: string) {
    const element = document.getElementById(id);
    element!.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="mt-0 flex h-24 lg:justify-between items-center header p-2 lg:sticky lg:top-0 lg:z-10">
      <div className="flex justify-start items-center p-5">
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
        <h1 className="lg:text-5xl ml-7 font-medium text-3xl">
          Starborn Studio
        </h1>
      </div>
      <div className="lg:flex justify-evenly items-center w-1/3 font-medium text-2xl gap-3 hidden">
        <div>
          <button onClick={() => scrollToId("ProjectStar")}>
            Project Star
          </button>
        </div>
        <div>
          <button onClick={() => scrollToId("About")}>About Us</button>
        </div>
        <div>
          <button onClick={() => scrollToId("PressKit")}>Press Kit</button>
        </div>
      </div>
    </div>
  );
}
