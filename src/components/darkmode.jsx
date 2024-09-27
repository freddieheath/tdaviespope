import { useContext } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { ThemeContext } from "./ThemeContext";

const Darkmode = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button
        className={`cursor-pointer ${
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
