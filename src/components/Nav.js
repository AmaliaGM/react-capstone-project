import React from 'react';
import { Link } from 'react-router-dom';
import back from '../back.png';
import mic from '../microphone.png';
import settings from '../settings.png';

function Nav() {
  return (
    <div className="navBar">
      <Link to="../">
        <img src={back} className="back" alt="" />
      </Link>

      <header style={{ display: 'flex' }}>
        {/*   <img className="headerImg" src={img} alt="Monet" width={150} /> */}
        <div>
          <h1 className="headerText">Monet Art</h1>
        </div>
      </header>
      <div>
        <img src={mic} className="microphone" alt="" />
        <img src={settings} className="settings" alt="" />
      </div>
    </div>
  );
}

export default Nav;
