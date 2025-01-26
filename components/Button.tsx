import React from 'react';

interface ButtonProps {
  text: string; // Texto que aparecerá en el botón
  onClick: () => void; // Acción al hacer clic en el botón
  className?: string; // Clases adicionales opcionales
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button 
      onClick={onClick} 
      className={`base-button ${className}`}
    >
      {text}
    </button>
  );
};
