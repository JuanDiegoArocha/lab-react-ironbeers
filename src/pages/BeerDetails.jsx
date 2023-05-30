import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

const BeerDetails = () => {
  
  const params = useParams();
  const beerId = params.beerId;
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => response.json())
      .then((data) => {
        setBeer(data);
        console.log(data); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, [beerId]);

  if (beer === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>

        <Header />

      <img src={beer.image_url} alt={beer.name} width={100}/>
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetails;
