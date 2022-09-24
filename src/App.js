import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Details from './pages/Details';
import PostDetails from './pages/post/[id]';

function App() {
  return (
    <div className="App">
      <Nav />
      <div id="container" className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          ;
          <Route path="/Details" element={<Details />} />
          ;
          <Route path="posts/:id" element={<PostDetails />} />
          ;
        </Routes>
      </div>
    </div>
  );
}

export default App;
