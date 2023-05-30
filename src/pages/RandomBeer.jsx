import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => 
      response.json())
      .then((data) => {
        setBeer(data)
    })
      .catch((err) => {
        console.error(err);
      })
  }, []);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>

       <Header />

      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
};

export default RandomBeer;
