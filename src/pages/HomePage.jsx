import React from 'react';
import { Link } from 'react-router-dom';
import beersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';



const HomePage = () => {
  return (
    <div>
      <h1>IronBeers Last Lab</h1>
      <div>
      <Link to="/beers">
          <img src={beersImage} alt="All Beers" />
          <h2>All Beers</h2>
        </Link>
      </div>
      <div>
        <Link to="/random-beer">
          <img src={randomBeerImage} alt="Random Beer" />
          <h2>Random Beer</h2>
        </Link>
      </div>
      <div>
        <Link to="/new-beer">
          <img src={newBeerImage} alt="New Beer" />
          <h2>New Beer</h2>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
