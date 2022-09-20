import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';

function App() {

  return (
    <>
      <Nav />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            ;
            <Route path="/src/components/Details.js" element={<Details />} />
            ;
          </Routes>
        </div>
    </>
  );
}

export default App;
