import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [themeState, setThemeState] = useState({
    isLightTheme: true,
    light: {
      bg: "bg-gray-300",
      bg2: "bg-white",
      bg3: "bg-blue-300",
      bg4: "bg-gradient-to-tr from-white to-violet-300",
      bg5: "bg-violet-900",
      bg6: "bg-amber-400",
      text: "text-zinc-900",
      text2: "text-purple-800",
      text3: "text-blue-500",
    },
    dark: {
      bg: "bg-gray-800",
      bg2: "bg-gray-300",
      bg3: "bg-blue-900",
      bg4: "bg-gradient-to-tr from-black to-gray-700",
      bg5: "bg-purple-900",
      bg6: "bg-purple-500",
      text: "text-white",
      text2: "text-amber-300",
      text3: "text-amber-500",
    },
  });

  const themeToggler = () => {
    setThemeState((themeState) => ({
      ...themeState,
      isLightTheme: !themeState.isLightTheme,
    }));
  };
  return (
    <ThemeContext.Provider value={{ ...themeState, themeToggler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
