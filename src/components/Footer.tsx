import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex h-20 justify-between items-center relative z-10 mt-16">
      <div className="flex justify-start items-center">
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
