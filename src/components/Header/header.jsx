import React from 'react';
import { useState } from 'react';
import './header.css';

export const Header = () => {
  return (
    <header>
      <a href="#welcome">Úvod</a>
      <a href="#aboutproject">O Projektu</a>
      <a href="#iva">Iva Havranová</a>
      <a href="#michaela">Michaela Trčková</a>
    </header>
  );
};
