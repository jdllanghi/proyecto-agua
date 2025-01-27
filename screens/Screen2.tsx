import React, { useState } from "react";
import { Button } from "../components/Button";

interface Screen2Props {
  onNext: () => void;
  onReturn: () => void;
}

const Screen2: React.FC<Screen2Props> = ({ onNext, onReturn }) => {
  // Estados para controlar la visibilidad de los textos
  const [showEstadoAgua, setShowEstadoAgua] = useState(false);
  const [showPotable, setShowPotable] = useState(false);
  const [showNoPotable, setShowNoPotable] = useState(false);

  // Funciones para alternar la visibilidad de los textos
  const toggleEstadoAgua = () => setShowEstadoAgua((prev) => !prev);
  const togglePotable = () => setShowPotable((prev) => !prev);
  const toggleNoPotable = () => setShowNoPotable((prev) => !prev);

  return (
    <div className="screen">
      <p>Fecha y hora de la última muestra:</p>

      {/* Estado del Agua */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <h1>Estado del Agua</h1>
        <Button text={showEstadoAgua ? "Ocultar Detalles" : "Mostrar Detalles"} onClick={toggleEstadoAgua} />
      </div>
      {showEstadoAgua && <p>Detalles sobre el Estado del Agua...</p>}

      {/* Potable */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <h2>Potable</h2>
        <Button text={showPotable ? "Ocultar Detalles" : "Mostrar Detalles"} onClick={togglePotable} />
      </div>
      {showPotable && <p>Detalles sobre Agua Potable...</p>}

      {/* No Potable */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <h3>No Potable</h3>
        <Button text={showNoPotable ? "Ocultar Detalles" : "Mostrar Detalles"} onClick={toggleNoPotable} />
      </div>
      {showNoPotable && <p>Detalles sobre Agua No Potable...</p>}

      {/* Botones de navegación */}
      <div style={{ marginTop: "20px" }}>
        <Button text="Return" onClick={onReturn} className="mr-2" />
        <Button text="Next" onClick={onNext} />
      </div>
    </div>
  );
};

export default Screen2;
