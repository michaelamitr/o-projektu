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
  NavLink,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { Iva } from './sections/Iva';
import { Misa } from './sections/Misa/misa';

const App = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="container">
      <header>
        <button className="hamburger-button" onClick={() => setOpen(!open)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <div className={open ? 'navbar navbar-open' : 'navbar '}>
          <NavLink to="/welcome" activeclassname="active">
            Úvod
          </NavLink>
          <NavLink to="/about" activeclassname="active">
            O projektu
          </NavLink>
          <NavLink to="/iva" activeclassname="active">
            Iva Havranová
          </NavLink>
          <NavLink to="/misa" activeclassname="active">
            Michaela Trčková
          </NavLink>
        </div>
      </header>
      <main>{location.pathname === '/' ? <Welcome /> : <Outlet />}</main>
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
