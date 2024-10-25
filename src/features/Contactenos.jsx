import React, { useState } from 'react';
import "./Contactenos.css";

const Contactenos = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!name || !email || !comment) {
      setError('Todos los campos son obligatorios');
      return;
    }

    // Validar el formato del email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Ingresa un email válido');
      return;
    }

    // Limpiar errores y mostrar los datos en consola
    setError('');
    console.log('Formulario enviado:', { name, email, comment });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contáctenos</h1>
      <p>Nos encantaría saber de ti. Completa el formulario a continuación:</p>
      
      <div>
        <label>Nombre:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>

      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>

      <div>
        <label>Comentario:</label>
        <textarea 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Contactenos;
