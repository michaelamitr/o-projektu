import React from 'react';
import { useState } from 'react';
import './header.css';

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <button className="hamburger-button" onClick={() => setOpen(!open)}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      <div className={open ? 'navbar navbar-open' : 'navbar '}>
        <a href="#welcome">Úvod</a>
        <a href="#aboutproject">O Projektu</a>
        <a href="#iva">Iva Havranová</a>
        <a href="#michaela">Michaela Trčková</a>
      </div>
    </header>
  );
};
