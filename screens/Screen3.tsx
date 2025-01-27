import React, { useState } from "react";
import { Button } from "../components/Button";

interface Screen3Props {
  onNext: () => void;
  onReturn: () => void;
}

const Screen3: React.FC<Screen3Props> = ({ onNext, onReturn }) => {
  // Estado para controlar la visibilidad del texto
  const [showText, setShowText] = useState(false);

  // Función para alternar la visibilidad del texto
  const toggleText = () => {
    setShowText((prev) => !prev);
  };

  return (
    <div className="screen">
      <h1>Potable</h1>
      <Button text={showText ? "Ocultar" : "Mostrar Detalles"} onClick={toggleText} className="mb-4" />

      {/* Texto que se muestra u oculta */}
      {showText && (
        <p>
          Segura: Libre de microorganismos dañinos (bacterias, virus, parásitos) y sustancias tóxicas 
          (metales pesados, químicos). <br />
          Agradable: Clara (sin turbidez), incolora, sin olor ni sabor desagradables.
        </p>
      )}

      {/* Botones de navegación */}
      <div style={{ marginTop: "20px" }}>
        <Button text="Return" onClick={onReturn} className="mr-2" />
        <Button text="Next" onClick={onNext} />
      </div>
    </div>
  );
};

export default Screen3;
