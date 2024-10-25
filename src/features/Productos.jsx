import React from 'react';
import './Productos.css';

const productos = [
  {
    id: 1,
    title: "Cartón Reciclado",
    description: "Material ecológico ideal para empaques que reduce el desperdicio y la tala de árboles.",
    benefits: [
      "100% reciclable y biodegradable",
      "Reduce el consumo de recursos naturales",
      "Ideal para empaques y envases"
    ],
    origin: "Fabricado en plantas sostenibles usando papel reciclado.",
    examples: "Cajas de envío, envases de alimentos y bandejas para productos.",
    image: "public/Carton.jpg"
  },
  {
    id: 2,
    title: "Fibra de Bambú",
    description: "Fibra natural renovable que crece rápidamente, perfecta para reemplazar materiales plásticos.",
    benefits: [
      "Crecimiento rápido y sostenible",
      "Se descompone naturalmente sin causar contaminación",
      "Suavidad y resistencia"
    ],
    origin: "Cultivos de bambú controlados, respetuosos con el ecosistema local.",
    examples: "Platos, vasos, cubiertos y servilletas.",
    image: "public/Bambu.jpg"
  },
  {
    id: 3,
    title: "Bioplástico de Maíz",
    description: "Un bioplástico derivado de maíz que es compostable y ayuda a reducir los desechos plásticos.",
    benefits: [
      "Reduce la dependencia de combustibles fósiles",
      "Compostable en instalaciones industriales",
      "Seguro para el medio ambiente"
    ],
    origin: "Proveniente de cultivos de maíz de fuentes renovables.",
    examples: "Bolsas de supermercado, envases y cubiertos.",
    image: "public/Maiz.jpg"
  }
];

const Productos = () => {
  return (
    <div className="productos-container">
      <h1>Materiales de Nuestros Productos</h1>
      <p>Descubre cómo cada material aporta beneficios al medio ambiente y mejora tu vida diaria.</p>
      
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.image} alt={producto.title} className="producto-image" />
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <h3>Beneficios:</h3>
            <ul>
              {producto.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <p><strong>Procedencia:</strong> {producto.origin}</p>
            <p><strong>Ejemplos de uso:</strong> {producto.examples}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
