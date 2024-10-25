import React from "react";
import "./ProductosBiodegradables.css";

const productos = [
  {
    id: 1,
    title: "Bolsas Biodegradables",
    description: "Bolsas hechas de materiales orgánicos que se descomponen de manera natural.",
    priceWholesale: "$600 COP",
    priceRetail: "$900 COP",
    image: "public/BolsasEcologicas.jpg"
  },
  {
    id: 2,
    title: "Envases Biodegradables",
    description: "Envases ecológicos ideales para almacenar alimentos sin contaminar el medio ambiente.",
    priceWholesale: "$1,200 COP",
    priceRetail: "$1,800 COP",
    image: "public/EnvasesBiodegradables.jpg"
  },
  {
    id: 3,
    title: "Toallitas Húmedas Biodegradables",
    description: "Toallitas hechas de fibras naturales que se descomponen fácilmente sin dejar residuos nocivos.",
    priceWholesale: "$400 COP",
    priceRetail: "$800 COP",
    image: "public/ToallasBiodegradables.jpg"
  }
];

const ProductosBiodegradables = () => {
  return (
    <div className="biodegradables-container">
      <header>
        <h1>Productos Biodegradables</h1>
        <p>Descubre nuestra gama de productos ecológicos que cuidan el medio ambiente.</p>
      </header>

      <section className="productos-section">
        <div className="productos-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img src={producto.image} alt={producto.title} className="producto-image" />
              <h2>{producto.title}</h2>
              <p>{producto.description}</p>
              <p><strong>Precio al por mayor:</strong> {producto.priceWholesale}</p>
              <p><strong>Precio al detal:</strong> {producto.priceRetail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductosBiodegradables;
