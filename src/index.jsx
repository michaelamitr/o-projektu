import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { useState } from 'react';
import { Welcome } from './sections/Welcome/welcome';
import { AboutProject } from './sections/AboutProject/aboutproject';
import { Footer } from './components/Footer/footer';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
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
      <main>
        <Welcome />
        <AboutProject />
      </main>
      <Footer />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
