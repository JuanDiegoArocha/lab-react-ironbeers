import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Beers from './pages/Beers';
import { Routes,  Route } from 'react-router-dom';
import BeerDetails from './pages/BeerDetails';

function App() {
  return (
    <div className="App">

    <Routes>

        <Route exact path="/" element={< HomePage />} />
        <Route path="/beers" element={< Beers />} />
        <Route path="/random-beer" element={< RandomBeer />} />
        <Route path="/new-beer" element={ < NewBeer />} />
        <Route path="/beers/:beerId" element={ <BeerDetails /> } />

    </Routes>


    </div>
  );
}

export default App;
