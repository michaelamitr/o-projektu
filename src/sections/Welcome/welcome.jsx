import React from 'react';
import './welcome.css';

export const Welcome = () => {
  return (
    <section id="welcome">
      <div className="intro">
        <h1>Vítejte na stránkách o našem projektu</h1>
      </div>
      <div className="headline-container">
        <div className="headline-black">
          <h1 className="hikeit">Hike It</h1>
          <h2 className="likeit">and like it</h2>
        </div>
      </div>
    </section>
  );
};
