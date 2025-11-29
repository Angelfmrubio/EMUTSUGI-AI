import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section-exact">
      <div className="container">
        <div className="hero-content">
          <h1>Bienvenido a EMUTSUGI AI</h1>
          <p>Soluciones inteligentes para el futuro</p>
          <div className="hero-buttons">
            <Link to="/servicios" className="btn btn-primary">
              Nuestros Servicios
            </Link>
            <Link to="/contacto" className="btn btn-secondary">
              Contáctanos
            </Link>
          </div>
        </div>
        <div className="hero-image">
          {/* Aquí puedes agregar tu imagen o ilustración */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;