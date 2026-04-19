import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current.disconnect();
  }, []);

  return (
    <div className="App">

      <header className="hero">
        <div className="hero-inner">
          <span className="hero-tag">Cloud &amp; AWS</span>
          <h1>Yucami</h1>
          <p className="hero-sub">
            AWS Certified Solutions Architect Associate
          </p>
          <nav className="hero-nav">
            <a href="#sobre-mi">Sobre mi</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
        <div className="hero-scroll">
          <span></span>
        </div>
      </header>

      <section id="sobre-mi" className="seccion reveal">
        <div className="seccion-inner">
          <span className="seccion-label">01 — Sobre mi</span>
          <h2>Profesional en transicion hacia el cloud</h2>
          <p>
            Certificada como AWS Solutions Architect Associate, construyo
            arquitecturas cloud escalables, seguras y optimizadas en coste.
            Vengo de un sector donde las personas importan, y eso lo traigo
            tambien a como diseno soluciones tecnicas.
          </p>
        </div>
      </section>

      <section id="proyectos" className="seccion seccion-dark">
        <div className="seccion-inner">
          <span className="seccion-label light">02 — Proyectos</span>
          <h2 className="light">Arquitecturas reales en AWS</h2>
          <div className="proyectos-grid">
            <div className="proyecto-card reveal">
              <div className="card-numero">01</div>
              <h3>Portfolio estatico</h3>
              <p>
                Sitio web desplegado con bucket privado en S3, CloudFront
                como CDN con OAC, HTTPS con ACM y dominio en Route 53.
              </p>
              <div className="card-tags">
                <span className="tag">S3</span>
                <span className="tag">CloudFront</span>
                <span className="tag">Route 53</span>
                <span className="tag">ACM</span>
              </div>
              
              <a  href="https://github.com/yucami/mi-portfolio-aws"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Ver en GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="seccion reveal">
        <div className="seccion-inner">
          <span className="seccion-label">03 — Contacto</span>
          <h2>Hablemos</h2>
          <p>Disponible para oportunidades en cloud y AWS.</p>
          <div className="contacto-links">
            <a href="mailto:odaya.fnavarro@gmail.com" className="contacto-item">
              <span className="contacto-icon">✉</span>
              odaya.fnavarro@gmail.com
            </a>
            
            <a  href="https://linkedin.com/in/miproximoperfil"
              target="_blank"
              rel="noreferrer"
              className="contacto-item"
            >
              <span className="contacto-icon">in</span>
              LinkedIn
            </a>
            
            <a  href="https://github.com/yucami"
              target="_blank"
              rel="noreferrer"
              className="contacto-item"
            >
              <span className="contacto-icon">gh</span>
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>2026 Yucami · Desplegado en AWS</p>
      </footer>

    </div>
  );
}

export default App;