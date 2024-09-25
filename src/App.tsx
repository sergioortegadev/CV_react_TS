import "./App.css";
import { LangProvider } from "./context/LangContext";
import { ThemeProvider } from "./context/ThemeContext";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <ThemeProvider>
        <LangProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </HashRouter>
        </LangProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
