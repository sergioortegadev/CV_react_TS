import { Link } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <main className="main-port">
        <h1 className="h1-port">Porfolio</h1>
        {/*       Proyectos  Section   */}
        <section className="proyectos ">
          <h2 className="h2-port seccion-titulo">PROYECTOS</h2>

          {/*   Galeria de Proyectos  */}
          <div className="container text-center proyectos-contenedor">
            <div className="row">
              {/*      Proyecto 0  */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="proyecto">
                  <a href="https://simple-chat-tkrk.onrender.com/" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/proy00.jpg" alt="Proyecto 1 - Portfolio personal CV" />

                    <div className="overlay">
                      <p>Microservicio SimpleChat</p>
                      <p>Backend de chat basado en node. Con persistencia en DB.</p>
                    </div>
                  </a>
                </div>
              </div>
              {/*      Proyecto 1  */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="proyecto">
                  <a
                    href="https://sergioortega.com.ar/portfolio/web-portfolio-generico/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./assets/proy01.jpg" alt="Proyecto 1 - Portfolio personal CV" />

                    <div className="overlay">
                      <p>Portfolio Profesional Genérico</p>
                    </div>
                  </a>
                </div>
              </div>
              {/*      Proyecto 2  */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="proyecto">
                  <a
                    href="https://sergioortega.com.ar/portfolio/web-pedidos/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./assets/proy02.jpg" alt="Proyecto 1 - Portfolio personal CV" />

                    <div className="overlay">
                      <p>E-commerce Simple</p>
                    </div>
                  </a>
                </div>
              </div>
              {/*      Proyecto 3  */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="proyecto">
                  <a
                    href="https://sergioortega.com.ar/portfolio/calc/calc.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./assets/proy03.jpg" alt="Proyecto 1 - Portfolio personal CV" />

                    <div className="overlay">
                      <p>Calculadora</p>
                    </div>
                  </a>
                </div>
              </div>
              {/*      Proyecto 4  */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="proyecto">
                  <a
                    href="https://sergioortega.com.ar/portfolio/notas/notas.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="./assets/proy04.jpg" alt="Proyecto 1 - Portfolio personal CV" />

                    <div className="overlay">
                      <p>Web app de Notas</p>
                    </div>
                  </a>
                </div>
              </div>
              {/*      Proyecto 5  */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="proyecto">
                  <a href="https://sergioortega.com.ar/portfolio/simpsons/" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/proy05.jpg" alt="Proyecto 1 - Portfolio personal CV" />

                    <div className="overlay">
                      <p>Frases de Los Simpsons</p>
                    </div>
                  </a>
                </div>
              </div>
              {/*      Proyecto 6  */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="proyecto">
                  <a href="https://sergioortega.com.ar/portfolio/nasa-api/" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/proy06.jpg" alt="Proyecto 1 - Portfolio personal CV" />

                    <div className="overlay">
                      <p>API Nasa Photos</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="boton-volver">
            <Link to="/">
              <button type="button" className="btn btn-outline-light">
                Volver al CV
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
