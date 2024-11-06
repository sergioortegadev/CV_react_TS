import { useContext } from "react";
import LangContext, { LangContextProps } from "../context/LangContext";

const Header = () => {
  const { text, lang } = useContext<LangContextProps>(LangContext);
  return (
    <header>
      <div className="banner">
        <img
          src="./assets/banner-large_g.png"
          alt="Banner Sergio Ortega dev con mensaje: La incomodidad de la comodidad"
        />
      </div>

      <div className="profile-photo-cont">
        <div className="profil-photo">
          <img src="./assets/perfil.jpg" alt="foto de perfil de Sergio Ortega" />
        </div>
      </div>

      <div className="title">
        <h1>Sergio Ortega</h1>
        <h4>{text.tituloCentro_h4}</h4>
        {lang === "es" ? (
          <a href="https://sergioortega.com.ar/sergioortega-cv.pdf" target="_blank" rel="noreferrer">
            <button type="button">versión impresa 🖨️ es</button>
          </a>
        ) : (
          <a href="https://sergioortega.com.ar/sergioortega-cv-en.pdf" target="_blank" rel="noreferrer">
            <button type="button">printed version 🖨️ en</button>
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
