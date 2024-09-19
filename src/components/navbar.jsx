import React from "react";

export default function Navbar() {
  return (
    <>
      <section>
        <div className="top-0 z-10 bg-gray-800 md:sticky">
          <div className="container mx-auto flex flex-row flex-wrap items-center justify-between px-6 py-5">
            <span className="title-font text-2xl font-medium text-white transition-all hover:text-gray-500 cursor-pointer md:mb-0">
              <h1>Tom Davies-Pope</h1>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
