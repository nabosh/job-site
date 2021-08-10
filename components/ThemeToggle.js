/** @format */

import React from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className='transition duration-1 ease-in-out rounded-full p-2'>
      {theme === "dark" ? (
        <HiSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className='text-gray-900 dark:text-gray-100 text-xl cursor-pointer'
        />
      ) : (
        <HiMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className='text-gray-900 dark:text-gray-100 text-xl cursor-pointer'
        />
      )}
    </div>
  );
};

export default ThemeToggle;
