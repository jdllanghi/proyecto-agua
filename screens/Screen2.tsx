import React from "react";
import { Button } from "../components/Button";

interface Screen2Props {
  onNext: () => void;
  onReturn: () => void;
}

const Screen2: React.FC<Screen2Props> = ({ onNext, onReturn }) => {
  return (
    <div className="screen">
      <h1>Pantalla 2</h1>
      <p>Fecha y hora de la última muestra:</p>
      <Button text="Return" onClick={onReturn} className="mr-2" />
      <Button text="Next" onClick={onNext} />
    </div>
  );
};

export default Screen2;
