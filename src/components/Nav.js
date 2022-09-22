import React from 'react';
import img from './images/monet.jpg';

function Nav() {
  return (
    <header style={{ display: 'flex' }}>
      <img className="headerImg" src={img} alt="Monet" width={100} />
      <div>
        <h1 className="headerText">Monet Art Work</h1>
      </div>
    </header>
  );
}

export default Nav;
