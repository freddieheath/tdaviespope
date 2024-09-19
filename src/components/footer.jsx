import React from "react";

export default function Footer() {
  return (
    <div className="text-white px-16 w-full bg-gray-80  items-center justify-center py-4 text-center text-xs sm:flex sm:justify-between sm:text-nowrap  bg-gray-800 sm:py-8">
      <h1 className=" my-2 sm:my-0">©2024</h1>
      <div className="gap-x-4 sm:flex">
        <h1 className="pointer my-2 cursor-pointer transition-all  hover:text-gray-500 sm:my-0">
          Lorem Ipsum
        </h1>
        <h1 className="pointer my-2 cursor-pointer transition-all  hover:text-gray-500 sm:my-0">
          Lorem Ipsum
        </h1>
      </div>
    </div>
  );
}
