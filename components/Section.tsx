import React from 'react';

interface SectionProps {
  title: string; // Título de la sección
  children: React.ReactNode; // Contenido dentro de la sección
  className?: string; // Clases adicionales opcionales
}

export const Section: React.FC<SectionProps> = ({ title, children, className }) => {
  return (
    <div className={`section ${className}`}>
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};
