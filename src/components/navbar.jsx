import Darkmode from "./darkmode";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <section>
        <div
          className={`top-0 z-10 md:sticky ${
            darkMode ? `bg-gray-800` : `bg-off-white`
          }`}
        >
          <div className="container mx-auto flex flex-row flex-wrap items-center justify-between px-6 py-5">
            <Link to="/">
              <span
                className={`title-font cursor-pointer text-2xl font-medium md:mb-0 ${
                  darkMode ? `text-white` : `text-gray-800`
                }`}
              >
                <h1
                  className={`transform transition-transform duration-300 ease-in-out hover:scale-105`}
                >
                  Tom Davies-Pope
                </h1>
              </span>
            </Link>
            <Darkmode />
          </div>
        </div>
      </section>
    </>
  );
}
