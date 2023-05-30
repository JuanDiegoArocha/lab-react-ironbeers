import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


const Beers = () => {
  const [allBeers, setAllBeers] = useState(null);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => 
      response.json())
      .then((data) => {
        setAllBeers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (allBeers === null) {
    return (
    <div>Loading...</div>
    )
  }

  return (
    <div>

        <Header />

      <h2>All Beers</h2>
      {allBeers.map((eachBeer) => (
        <div key={eachBeer._id}>
          <img src={eachBeer.image_url} alt={eachBeer.name} width={100} />
          <h3>{eachBeer.name}</h3>
          <p>{eachBeer.tagline}</p>
          <Link to={`/beers/${eachBeer._id}`} style={{ textDecoration: "none", color: "black" }}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Beers;