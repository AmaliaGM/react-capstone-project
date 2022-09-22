import React from 'react';
import { Image } from 'react-bootstrap';

function detNav() {
  return (
    <header>
      <div href="#" className="thumbnail">
        <img className="navImg" src={Image} alt="" />
      </div>
      <div>
        <h1>Monet Art Work</h1>
      </div>
    </header>
  );
}

export default detNav;
