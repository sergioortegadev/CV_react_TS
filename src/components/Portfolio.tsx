import { Link } from "react-router-dom";
import { portfolioProyects } from "../utils/portfolio-proyects";

const Portfolio = () => {
  return (
    <>
      <main className="main-port">
        <h1 className="h1-port">Porfolio</h1>

        {/*       Proyectos  Section   */}
        <section className="proyectos ">
          <h2 className="h2-port seccion-titulo">PROYECTS</h2>

          {/*   Galeria de Proyectos  */}
          <div className="container text-center proyectos-box">
            {/*     Proyectos    */}
            {portfolioProyects.map((proyecto) => (
              <div className="proyecto" key={proyecto.id}>
                <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
                  <img src={proyecto.img} alt={proyecto.name} />
                  <div className="overlay">
                    <p className="overlay-left">{proyecto.description1}</p>
                    <p className="overlay-right">{proyecto.description2}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="boton-volver">
            <Link to="/">
              <button type="button" className=" btn-portfolio">
                ◀ Back to CV
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
