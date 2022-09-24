import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <Nav />
      <div id="container" className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          ;
          <Route path="/details" element={<Details />} />
          ;
        </Routes>
      </div>
    </div>
  );
}

export default App;
