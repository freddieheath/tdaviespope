import { useContext } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { ThemeContext } from "./ThemeContext";

const Darkmode = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button
        aria-label="darkmode"
        className={`transform cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 ${
          darkMode ? `text-white` : `text-gray-800`
        }`}
        onClick={() => {
          toggleTheme();
        }}
      >
        {darkMode ? <IoSunny /> : <IoMoon />}
      </button>
    </div>
  );
};

export default Darkmode;
