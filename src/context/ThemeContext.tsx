import {
  useState,
  useEffect,
  createContext,
  type SetStateAction,
  type ReactNode,
} from "react";

interface propType {
  children: ReactNode;
}
type Theme = string;

interface ThemeContextType {
  theme: Theme;
  setTheme?: React.Dispatch<SetStateAction<Theme>>;
  toggleTheme: ()=> void;
}

 export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function Themeprovider({ children }: propType) {
  const [theme, setTheme] = useState<Theme>("light");
  function toggleTheme(){
    setTheme((prev)=> prev==="light"? "dark": "light" )
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);


  }, [theme]);

  return <ThemeContext value={{ theme, toggleTheme }}>
    {children}
    </ThemeContext>;
}
