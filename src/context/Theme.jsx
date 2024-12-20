import { useEffect, useState, createContext } from "react";


const ThemeContext = createContext();

function getTheme() {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "dark");
    return "dark";
  } else {
    return theme;
  }
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme)
    }
    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider };