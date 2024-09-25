import { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import LangContext, { LangContextProps } from "../context/LangContext";

const Menu = ({ setShow }: { setShow: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { text } = useContext<LangContextProps>(LangContext);
  const handleLinkMenu = () => {
    document.querySelector(".panel-ext")?.classList.remove("is-active");
    document.querySelector(".panel")?.classList.remove("is-active");

    setShow(false);
  };
  const handleCloseMenu = () => {
    document.querySelector(".panel-ext")?.classList.remove("is-active");
    document.querySelector(".panel")?.classList.remove("is-active");

    setShow(false);
  };
  return (
    <div className="panel-ext" onClick={handleCloseMenu}>
      <aside className="panel">
        <nav className="menu">
          <HashLink onClick={handleLinkMenu} smooth to="#contact">
            {text.nav_contacto}
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#about">
            {text.nav_acerca}
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#portfolio">
            {text.nav_portfolio}
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#experience">
            {text.nav_experiencia}
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#lang">
            {text.nav_idioma}
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#education">
            {text.nav_educacion}
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#tech">
            {text.nav_tecnologias}
          </HashLink>
          <HashLink onClick={handleLinkMenu} smooth to="#skills">
            {text.nav_habilidades}
          </HashLink>
        </nav>
      </aside>
    </div>
  );
};

export default Menu;
