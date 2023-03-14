import React from "react";
import Image from "next/image";
import icon from "../../public/IconNoBackgound.svg";

export default function Header() {
  function scrollToId(id: string) {
    const element = document.getElementById(id);
    element!.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="w-full flex h-20 justify-between items-center relative z-10 mb-16">
      <div className="flex justify-start items-center">
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
        <h1 className="text-5xl ml-7 font-medium">Starborn Studio</h1>
      </div>
      <div className="flex justify-evenly items-center w-1/3 text-base font-extralight ">
        <div>
          <button>Home</button>
        </div>
        <div>
          <button>Project Star</button>
        </div>
        <div>
          <button>About Us</button>
        </div>
        <div>
          <button>Press Kit</button>
        </div>
      </div>
    </div>
  );
}
