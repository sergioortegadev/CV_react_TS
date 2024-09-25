import { createContext, useState, ReactNode, useContext } from "react";

export interface ThemeContextProps {
  theme: string;
  handleTheme: (theme: string) => void;
}

const defaultValue: ThemeContextProps = {
  theme: "dark",
  handleTheme: () => {},
};
const ThemeContext = createContext<ThemeContextProps>(defaultValue);

if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "dark");
if (localStorage.getItem("theme") === "dark") document.documentElement.classList.add("dark");

const initialTheme = localStorage.getItem("theme") || "dark";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(initialTheme);

  const darkMode = () => {
    setTheme("dark");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  const lightMode = () => {
    setTheme("light");
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };

  const handleTheme = (theme: string) => {
    if (theme === "light") darkMode();
    else lightMode();
  };

  const data: ThemeContextProps = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider };
export default ThemeContext;
