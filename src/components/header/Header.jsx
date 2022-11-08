import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src='https://raw.githubusercontent.com/sunil9813/Netfilx-Clone/6014ba3b4faad2b9745efa5d39c5566b9ae3d3fb/public/images/logo.png' alt="" />
            </div>
            <ul className={Mobile ? "navMenu-list":'flexSB'} onClick={() => setMobile(false)}>
              <Link to='/'>Home</Link>
              <Link to='/series'>series</Link>
              <Link to='/movies'>Movies</Link>
              <Link to='/pages'>Pages</Link>
              <Link to='/prising'>Prising</Link>
              <Link to='/contact'>Contact</Link>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </nav>
          <div className="account flexSB">
            <i className="fa fa-search"></i>
            <i className="fa fa-bell"></i>
            <i className="fa fa-user"></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
