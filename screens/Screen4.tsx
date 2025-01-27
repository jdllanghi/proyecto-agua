import React, { useState } from "react";
import { Button } from "../components/Button";

interface Screen4Props {
  onReturn: () => void;
}

const Screen4: React.FC<Screen4Props> = ({ onReturn }) => {
  // Estado para controlar la visibilidad del texto
  const [showText, setShowText] = useState(false);

  // Función para alternar la visibilidad del texto
  const toggleText = () => {
    setShowText((prev) => !prev);
  };

  return (
    <div className="screen">
      <h1>No Potable</h1>
      <Button text={showText ? "Ocultar Detalles" : "Mostrar Detalles"} onClick={toggleText} className="mb-4" />

      {/* Texto que se muestra u oculta */}
      {showText && (
        <p>
          Insegura: Contiene microorganismos dañinos (bacterias, virus, parásitos) y/o sustancias tóxicas 
          (metales pesados, químicos, pesticidas). <br />
          Desagradable: Turbia (con partículas en suspensión), con color, con olor y/o sabor desagradables.
        </p>
      )}

      {/* Botón de retorno */}
      <div style={{ marginTop: "20px" }}>
        <Button text="Return" onClick={onReturn} />
      </div>
    </div>
  );
};

export default Screen4;
