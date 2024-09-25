import { useContext, useEffect, useState } from "react";
import ThemeContext, { ThemeContextProps } from "../context/ThemeContext";
import LangContext, { LangContextProps } from "../context/LangContext";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Header from "./Header";
import { BsPersonFillUp } from "react-icons/bs";
import { FiSun, FiMoon } from "react-icons/fi";
import { IoMdArrowRoundUp } from "react-icons/io";
import Menu from "./Menu";

const Home: React.FC = () => {
  const { theme, handleTheme } = useContext<ThemeContextProps>(ThemeContext);
  const { text, lang, handleLang } = useContext<LangContextProps>(LangContext);

  const [show, setShow] = useState(false);

  const handleMenu = () => {
    document.querySelector(".panel-ext")?.classList.toggle("is-active");
    document.querySelector(".panel")?.classList.toggle("is-active");

    setShow(!show);
  };

  //Revisar "pageYOffset" Deprecado.
  // Para que el botón aparezca cuando hacemos scroll para abajo, y desaparezca cuando suba. Usamos las propiedades: "pageYOffset" del objeto Window, || o la propiedad "documentElement.scrollTop" del Document, para detectar a qué distancia se ha hecho scroll vertical, y luego determinar que cuando sea mayor de 400 haga aparecer (quita el hidden) al botón. Con else volvemos a ocultarlo.
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 450) {
      document.querySelector(".btn-up")?.classList.remove("hidden");
    } else {
      document.querySelector(".btn-up")?.classList.add("hidden");
    }
  });

  return (
    <>
      <Menu setShow={setShow} />
      <Header />

      <main className="container">
        <article id="contact">
          <h2>{text.contacto_h2}</h2>
          <ul>
            <li>
              <p>{text.contact_li_mail}</p>
            </li>
            <li>
              <p>
                {text.contact_li_linkedin}
                <a href="https://linkedin.com/in/sergioortegadev" target="_blank" rel="noreferrer">
                  linkedin.com/in/sergioortegadev
                </a>
              </p>
            </li>
            <li>
              <p>
                {text.contact_li_github}
                <a href="https://github.com/sergioortegadev" target="_blank" rel="noreferrer">
                  github.com/sergioortegadev
                </a>
              </p>
            </li>
            <li>
              <p>
                {text.contact_li_twitter}
                <a
                  href="https://twitter.com/intent/follow?screen_name=sergioortegadev"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter.com/sergioortegadev
                </a>
              </p>
            </li>
            <li>
              <p>
                {text.contact_li_web}
                <a href="https://sergioortega.com.ar" target="_blank" rel="noreferrer">
                  sergioortega.com.ar
                </a>
              </p>
            </li>
            <li>
              <p>{text.contact_li_location}</p>
            </li>
          </ul>
        </article>

        <article id="about">
          <h2>{text.acerca_h2}</h2>
          <p>{text.acerca_p}</p>
        </article>

        <article id="portfolio">
          <figure className="icon">
            <Link to="/portfolio">
              <img src="./assets/portfolio_.png" alt="portfolio" />
            </Link>
          </figure>
          <p>
            <Link to="/portfolio">{text.portfolio_p}</Link>
          </p>
        </article>

        <article id="experience">
          <h2>{text.experiencia_h2}</h2>
          <div className="exp-item">
            <div className="exp-logo">
              <img src="./assets/tpl.jpg" alt="TPL Logo" />
            </div>
            <div className="exp-text">
              <h3>{text.experiencia_01_h3}</h3>
              <h4>{text.experiencia_01_h4}</h4>
              <p>{text.experiencia_01_p1}</p>
              <p>{text.experiencia_01_p2}</p>
            </div>
          </div>
          <div className="exp-item">
            <div className="exp-logo">
              <img src="./assets/freelance-code.png" alt="Sergio Ortega Developer Freelance Logo" />
            </div>
            <div className="exp-text">
              <h3>{text.experiencia_00_h3}</h3>
              <h4>{text.experiencia_00_h4}</h4>
              <p>{text.experiencia_00_p1}</p>
              <p>{text.experiencia_00_p2}</p>
            </div>
          </div>

          <p className="exp-before">{text.educacion_anterior}</p>
        </article>

        <article id="lang">
          <h2>{text.lang_h2}</h2>
          <div className="lang">
            <figure className="icon">
              <a href="https://cert.efset.org/y5ikc8" target="_blank" rel="noopener noreferrer">
                <img src="./assets/lang.png" alt="portfolio" />
              </a>
            </figure>
            <ol>
              <li>
                <p>
                  <a href="https://cert.efset.org/y5ikc8" target="_blank" rel="noopener noreferrer">
                    {text.lang_p1}
                  </a>
                </p>
              </li>
              <li>
                <p>{text.lang_p2}</p>
              </li>
            </ol>
          </div>
        </article>

        <article id="education">
          <h2>{text.educacion_h2}</h2>
          <ul>
            <li>
              <p>
                {text.educacion_li_autodidacta} <BsPersonFillUp className="self-taught-icon" />
              </p>
            </li>
            <li>
              <p>
                2023 -{" "}
                <a
                  href="https://www.udemy.com/certificate/UC-d0fbe477-8ba4-4f05-b035-fdcafacf1996/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {text.educacion_li_typescript} │ DS
                </a>{" "}
              </p>
            </li>
            <li>
              <p>
                2023 -{" "}
                <a
                  href="https://drive.google.com/file/d/16edeP5Vfz-XbSGTfchXgM5Fc8HCqxA5A/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  {text.educacion_li_node} │ DS
                </a>{" "}
              </p>
            </li>
            <li>
              <p>
                2023 -{" "}
                <a
                  href="https://drive.google.com/file/d/1SlrL5mQfP8YLflhK4qw8I4OrolbCvAtt/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {text.educacion_li_ciberseguridad} │ Cámara de Comercio de Córdoba - CorLab - UTN
                </a>{" "}
              </p>
            </li>
            <li>
              <p>
                2023 -{" "}
                <a
                  href="https://drive.google.com/file/d/1LAQbGqCcdfEDQjM8IPNVlSHtrYWgv-51/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {text.educacion_li_metodologias} │ UNC - Min. Ciencia y Tecnología -
                </a>{" "}
                <a
                  href="https://certificados.campusvirtual.unc.edu.ar/upv/?code=754554925bc64b019b39e3dcc0a556ba"
                  target="_blank"
                  rel="noreferrer"
                >
                  <small>{text.educacion_li_medotologias_code_small}</small>
                </a>
              </p>
            </li>

            <li>
              <p>
                2022 -{" "}
                <a
                  href="https://drive.google.com/file/d/1iIjj0C3uVjWKc_OYvj64sJ3KhfuBAGnf/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cisco - NDG Linux Unhatched
                </a>
              </p>
            </li>
          </ul>
        </article>

        <article id="tech">
          <h2>{text.tecnologias_h2}</h2>
          <div className="tech-grid">
            <figure>
              <img src="./assets/typescript-logo.svg" alt="typescript" />
              <figcaption>TypeScript</figcaption>
            </figure>
            <figure>
              <img src="./assets/react.svg" alt="react.js" />
              <figcaption>React.js</figcaption>
            </figure>
            <figure>
              {theme === "light" ? (
                <img src="./assets/nextjs-light.svg" alt="next.js" />
              ) : (
                <img src="./assets/nextjs.svg" alt="next.js" />
              )}

              <figcaption>Next.js</figcaption>
            </figure>
            <figure>
              <img src="./assets/tailwindcss-logo.svg" alt="Tailwind" />
              <figcaption>Tailwind CSS</figcaption>
            </figure>
            <figure>
              <img src="./assets/javascript.svg" alt="javascript" />
              <figcaption>JavaScript</figcaption>
            </figure>
            <figure>
              <img src="./assets/node.svg" alt="node.js" />
              <figcaption>Node.js</figcaption>
            </figure>
            <figure>
              <img src="./assets/mongodb_.svg" alt="logo MongoDB" />
              <figcaption>MongoDB</figcaption>
            </figure>
            <figure>
              <img src="./assets/git.svg" alt="git" />
              <figcaption>Git</figcaption>
            </figure>
            <figure>
              {theme === "light" ? (
                <img src="./assets/github-light.svg" alt="github" />
              ) : (
                <img src="./assets/github.svg" alt="github" />
              )}

              <figcaption>GitHub</figcaption>
            </figure>
          </div>

          <p className="tech-others">{text.tech_p}</p>
        </article>

        <article id="skills">
          <h2>{text.habilidades_h2}</h2>
          <ul>
            {text.habilidades_li.map((el, index) => (
              <li key={index}>
                <p>{el}</p>
              </li>
            ))}
          </ul>
        </article>
      </main>

      <footer>
        <div className="footer-cont">
          <h3>Sergio Ortega</h3>
          <div className="footer-right">
            <p>{text.footer_p1}</p>
            <p>{text.footer_p2}</p>
          </div>
        </div>
      </footer>

      {/* Botón Up - scroll-top-boton */}
      <button className="btn-up btn btn-dark hidden">
        <HashLink smooth to="#top">
          <div>
            <IoMdArrowRoundUp />
          </div>
        </HashLink>
      </button>

      {/* Botón idioma - Lang Button */}
      <button className="btn-lang btn btn-dark" onClick={() => handleLang(lang)}>
        <div>{lang === "es" ? "En" : "Es"}</div>
      </button>

      {/* Botón tema oscuro - Dark theme */}
      <button onClick={() => handleTheme(theme)} className="btn-theme btn btn-dark">
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </button>

      {/* Menu Hamburguer button */}
      <button className="btn btn-menu" onClick={handleMenu}>
        <span className="sr-only">Open main menu</span>
        <div className="menu-bar-container">
          <span
            aria-hidden="true"
            className={`menu-bar ${show ? "menu-bar-open-rotate" : "menu-bar-closed-translate"}`}
          />
          <span aria-hidden="true" className={`menu-bar ${show ? "menu-bar-open-opacity" : ""}`} />
          <span
            aria-hidden="true"
            className={`menu-bar ${show ? "menu-bar-open-reverse-rotate" : "menu-bar-closed-translate-reverse"}`}
          />
        </div>
      </button>
    </>
  );
};

export default Home;
