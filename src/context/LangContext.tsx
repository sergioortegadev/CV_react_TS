import { createContext, useState, ReactNode, useContext } from "react";
import Translations from "../db/Translations";

export interface LangContextProps {
  lang: "en" | "es";
  text: (typeof Translations)["en"];
  handleLang: (lang: "en" | "es") => void;
}

const defaultValue: LangContextProps = {
  lang: "en",
  text: Translations.en,
  handleLang: () => {},
};

const LangContext = createContext<LangContextProps>(defaultValue);

const initialLang: "en" | "es" = "en";

interface LangProviderProps {
  children: ReactNode;
}

const LangProvider = ({ children }: LangProviderProps) => {
  const [lang, setLang] = useState<"es" | "en">(initialLang);
  const [text, setText] = useState<(typeof Translations)["es"]>(Translations[initialLang]);

  const handleLang = (lang: "es" | "en") => {
    setLang(lang);
    setText(Translations[lang]);
    if (lang === "es") {
      setLang("en");
      setText(Translations.en);
    } else {
      setLang("es");
      setText(Translations.es);
    }
  };

  const data: LangContextProps = { text, lang, handleLang };

  return <LangContext.Provider value={data}>{children}</LangContext.Provider>;
};

export const useLang = (): LangContextProps => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};

export { LangProvider };
export default LangContext;
