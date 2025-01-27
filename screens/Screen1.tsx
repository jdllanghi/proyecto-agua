import React from "react";
import { Section } from "../components/Section";
import { Button } from "../components/Button";

interface Screen1Props {
  onNext: () => void;
}

const Screen1: React.FC<Screen1Props> = ({ onNext }) => {
  return (
    <Section title="Bienvenido">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1>Dispositivo</h1>
        <Button text="Acción Dispositivo" onClick={() => console.log("Acción para Dispositivo")} />
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h2>Longitud</h2>
        <Button text="Acción Longitud" onClick={() => console.log("Acción para Longitud")} />
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1>Latitud</h1>
        <Button text="Acción Latitud" onClick={() => console.log("Acción para Latitud")} />
      </div>

      <Button text="Next" onClick={onNext} />
    </Section>
  );
};

export default Screen1;
