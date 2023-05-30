import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewBeer = () => {
  const navigate = useNavigate();
  const [beerData, setBeerData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(beerData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Cerveza creada exitosamente');
          // Navegar a una página de éxito o redirigir
          navigate('/exito');
        } else {
          console.log('Error al crear la cerveza');
          // Manejar el error, por ejemplo, mostrar un mensaje de error
        }
      })
      .catch((error) => {
        console.log('Error al crear la cerveza', error);
        // Manejar el error, por ejemplo, mostrar un mensaje de error
      });
  };

  return (
    <div>
      <h2>Crear una Nueva Cerveza</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <input
          type="text"
          name="name"
          value={beerData.name}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <br />
        <input
          type="text"
          name="tagline"
          value={beerData.tagline}
          onChange={handleChange}
          placeholder="Tagline"
        />
        <br />
        <input
          type="text"
          name="description"
          value={beerData.description}
          onChange={handleChange}
          placeholder="Descripción"
        />
        <br />
        <input
          type="text"
          name="first_brewed"
          value={beerData.first_brewed}
          onChange={handleChange}
          placeholder="Primera Elaboración"
        />
        <br />
        <input
          type="text"
          name="brewers_tips"
          value={beerData.brewers_tips}
          onChange={handleChange}
          placeholder="Consejos del Cervecero"
        />
        <br />
        <input
          type="number"
          name="attenuation_level"
          value={beerData.attenuation_level}
          onChange={handleChange}
          placeholder="Nivel de Atenuación"
        />
        <br />
        <input
          type="text"
          name="contributed_by"
          value={beerData.contributed_by}
          onChange={handleChange}
          placeholder="Contribuido por"
        />
        <br />
        <button type="submit">Crear Cerveza</button>
      </form>
    </div>
  );
};

export default NewBeer;
