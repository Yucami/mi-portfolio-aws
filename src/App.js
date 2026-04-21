import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const observerRef = useRef(null);
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [estado, setEstado] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado('enviando');
    try {
      const res = await fetch('https://dezerftu66.execute-api.us-east-1.amazonaws.com/prod/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setEstado('ok');
        setFormData({ nombre: '', email: '', mensaje: '' });
      } else {
        setEstado('error');
      }
    } catch {
      setEstado('error');
    }
  };

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
            AWS Certified Solutions Architect Associate.
            Aprendiendo cloud desde cero con proyectos reales en AWS.
            En transición desde un sector donde las personas
            y los procesos importan.
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

              <a href="https://github.com/yucami/mi-portfolio-aws"
                className="card-link"
                target="_blank"
                rel="noreferrer"
              >
                Ver en GitHub
              </a>
            </div>
            <div className="proyecto-card reveal">
              <div className="card-numero">02</div>
              <h3>Formulario serverless</h3>
              <p>
                Formulario de contacto con función Lambda en Python,
                endpoint en API Gateway y envío de email con SES.
                Logs estructurados en CloudWatch.
              </p>
              <div className="card-tags">
                <span className="tag">Lambda</span>
                <span className="tag">API Gateway</span>
                <span className="tag">SES</span>
                <span className="tag">CloudWatch</span>
              </div>
              <a href="https://github.com/Yucami/proyecto2-serverless-form"
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
            <a href="mailto:contacto@yucami.com" className="contacto-item">
              <span className="contacto-icon">✉</span>
              contacto@yucami.com
            </a>

            <a href="https://linkedin.com/in/miproximoperfil"
              target="_blank"
              rel="noreferrer"
              className="contacto-item"
            >
              <span className="contacto-icon">in</span>
              LinkedIn
            </a>

            <a href="https://github.com/yucami"
              target="_blank"
              rel="noreferrer"
              className="contacto-item"
            >
              <span className="contacto-icon">gh</span>
              GitHub
            </a>
          </div>

          <form className="contacto-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="mensaje"
              placeholder="Tu mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={estado === 'enviando'}>
              {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
            {estado === 'ok' && <p className="form-ok">✅ Mensaje enviado correctamente</p>}
            {estado === 'error' && <p className="form-error">❌ Error al enviar. Inténtalo de nuevo</p>}
          </form>

        </div>
      </section>

      <footer className="footer">
        <p>2026 Yucami · Desplegado en AWS</p>
      </footer>

    </div>
  );
}

export default App;