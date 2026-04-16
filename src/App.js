import './App.css';

function App() {
return (
  <div className="App">

    {/* CABECERA */}
    <header className="header">
      <h1>Tu Nombre</h1>
      <p>AWS Certified Solutions Architect – Associate</p>
      <nav>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>

    {/* SOBRE MÍ */}
    <section id="sobre-mi" className="seccion">
      <h2>Sobre mí</h2>
      <p>
        Profesional en transición hacia el mundo cloud con certificación 
        AWS Solutions Architect Associate. Experiencia combinando habilidades 
        técnicas con visión de negocio.
      </p>
    </section>

    {/* PROYECTOS */}
    <section id="proyectos" className="seccion">
      <h2>Proyectos AWS</h2>
      <div className="proyectos-grid">
        <div className="proyecto-card">
          <h3>Portfolio en AWS</h3>
          <p>Sitio web estático desplegado con S3, CloudFront y Route 53.</p>
          <span className="tag">S3</span>
          <span className="tag">CloudFront</span>
          <span className="tag">Route 53</span>
        </div>
      </div>
    </section>

    {/* CONTACTO */}
    <section id="contacto" className="seccion">
      <h2>Contacto</h2>
      <p>Email: tuemail@ejemplo.com</p>
      <p>LinkedIn: linkedin.com/in/tuperfil</p>
      <p>GitHub: github.com/tuusuario</p>
    </section>

  </div>
);
}

export default App;