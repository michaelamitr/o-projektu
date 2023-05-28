import React from 'react';
import './misa.css';
import misaImage from '../../img/IMG_2041.jpg';

export const Misa = () => {
  return (
    <section id="misa">
      <div className="description">
        <p>Ahoj!</p>
        <p>
          Jmenuji se Michaela Trčková a společně s mou drahou dvojičkou – Ivou
          Havranovou zpracovávám projekt Hike it and like it.
        </p>
        <p>
          Moc ráda cestuji, poznávám nové kultury, učím se cizí jazyky a
          poznávám krásy přírody. Jelikož Iva je na stejné vlně jako já, shodly
          jsme se, že web o různých světových trasách bude to pravé pro nás.
        </p>
      </div>
      <img className="misaimg" src={misaImage} alt="fotka Míša"></img>
    </section>
  );
};
