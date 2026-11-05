"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface ThemeChangerProps {
  onChange: () => void;
}

const ThemeChanger: React.FC<ThemeChangerProps> = ({ onChange }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    onChange();
  };

  return (
    <div className="flex items-center order-last ">
      {theme === "dark" ? (
        <button
          onClick={() => handleThemeChange("light")}
          className="text-gray-900 dark:text-gray-300 rounded-full outline-none focus:outline-none ">
          <span className="sr-only">Light Mode</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => handleThemeChange("dark")}
          className="text-gray-900 dark:text-gray-300 rounded-full outline-none focus:outline-none ">
          <span className="sr-only">Dark Mode</span>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;