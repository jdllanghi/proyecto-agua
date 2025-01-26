import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <img 
        src="/assets/images/logo.png" 
        alt="Logo" 
        className="logo" 
      />
      <h1>Calidad del Agua en Ricaurte-Cuenca</h1>
    </header>
  );
};
