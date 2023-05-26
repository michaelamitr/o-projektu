import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { useState } from 'react';
import { Welcome } from './sections/Welcome/welcome';
import { AboutProject } from './sections/AboutProject/aboutproject';
import { Footer } from './components/Footer/footer';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import { Iva } from './sections/Iva';
import { Misa } from './sections/Misa/misa';

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
          <Link to="/welcome">Úvod</Link>
          <Link to="/about">O projektu</Link>
          <Link to="/iva">Iva Havranová</Link>
          <Link to="/misa">Michaela Trčková</Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'welcome',
        element: <Welcome />,
      },
      {
        path: 'about',
        element: <AboutProject />,
      },
      {
        path: 'iva',
        element: <Iva />,
      },
      {
        path: 'misa',
        element: <Misa />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
