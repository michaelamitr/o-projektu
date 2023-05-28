import React from 'react';
import './style.css';
import imgIva from './img/Bety.jpg';

export const Iva = () => {
  return (
    <section id="iva">
      <div className="intro__iva">
        <div className="intro__text">
          Ahoj, já jsem Iva a na fotce je se mnou naše psí láska Bety. Kromě
          učení se nových věcí je mojí vášní šití a hrozně se těším na všechny
          projekty, které v budoucnu nakódím a naprogramuji. V příštích dnech to
          bude projekt Hike it and like it, na kterým pracuju spolu s Míšou a
          našimi mentory Kájou a Sergejem. A co mi nejde? Psát něco o sobě, tak
          raději končím :D.
        </div>
        <div className="intro__photo">
          <img
            className="intro__photo--iva"
            src={imgIva}
            alt="Fotka Ivy"
            width="300"
          />
        </div>
      </div>
    </section>
  );
};
