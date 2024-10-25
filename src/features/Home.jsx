// src/features/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'; // Importa SweetAlert2
import "./Home.css";

const Home = () => {
  const handleClick = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Has sido redirigido con éxito!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenidos a Nuestra Tienda Ecológica</h1>
        <p>Comprometidos con el planeta, ofreciendo productos biodegradables y sostenibles de alta calidad.</p>
        <p>Explora nuestras categorías y encuentra productos que cuidan el medio ambiente.</p>
      </header>

      <section className="benefits-section">
        <h2>¿Por qué elegir productos biodegradables?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Respetuosos con el Medio Ambiente</h3>
            <p>Nuestros productos se descomponen naturalmente, reduciendo la huella ecológica.</p>
          </div>
          <div className="benefit-card">
            <h3>Alta Calidad y Sostenibilidad</h3>
            <p>Ofrecemos productos duraderos y seguros, diseñados para un menor impacto ambiental.</p>
          </div>
          <div className="benefit-card">
            <h3>Precios Competitivos</h3>
            <p>Precios accesibles sin comprometer el compromiso con el medio ambiente.</p>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <h2>Nuestras Categorías</h2>
        <div className="categories-grid">
          <div className="category-card">
            <h3>¿De qué están hechos nuestros productos?</h3>
            <p>Conoce todo sobre nuestros productos sostenibles.</p>
            <Link to="/productos" className="btn" onClick={handleClick}>Ver Productos</Link>
          </div>
          <div className="category-card">
            <h3>Productos Biodegradables</h3>
            <p>Descubre nuestra selección de productos que cuidan el planeta.</p>
            <Link to="/productos-biodegradables" className="btn" onClick={handleClick}>Ver Productos Biodegradables</Link>
          </div>
          <div className="category-card">
            <h3>Contáctenos</h3>
            <p>¿Tienes dudas? Ponte en contacto con nosotros.</p>
            <Link to="/contactenos" className="btn" onClick={handleClick}>Contáctanos</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
