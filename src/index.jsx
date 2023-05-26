import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { useState } from 'react';
import { Welcome } from './sections/Welcome/welcome';
import { AboutProject } from './sections/AboutProject/aboutproject';
import { Footer } from './components/Footer/footer';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { Iva } from './sections/Iva';

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
          <Link to="/iva">Iva Havranová</Link>
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/iva',
    element: <Iva />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
