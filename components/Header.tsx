import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <header className={`py-6 px-4 flex justify-between items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-gray-200`}>
      <div className="flex-1 flex justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide uppercase drop-shadow-md">
          Weather Dashboard
        </h1>
      </div>
      <button
        onClick={toggleDarkMode}
        className="text-2xl sm:text-3xl md:text-4xl focus:outline-none ml-auto"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
};

export default Header;
