import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Header } from './components/Header/header';
import { Welcome } from './sections/Welcome/welcome';
import { AboutProject } from './sections/AboutProject/aboutproject';

const App = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Welcome />
        <AboutProject />
      </main>
      <footer>
        <p>
          O Projektu – Hike It<br></br>
          Czechitas, Digitální akademie: Web<br></br>
          by<br></br>Iva Havranová & Michaela Trčková
        </p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
