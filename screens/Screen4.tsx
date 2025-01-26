import React from "react";
import { Button } from "../components/Button";

interface Screen4Props {
  onReturn: () => void;
}

const Screen4: React.FC<Screen4Props> = ({ onReturn }) => {
  return (
    <div className="screen">
      <h1>Pantalla 4</h1>
      <p>Información sobre agua no potable.</p>
      <Button text="Return" onClick={onReturn} />
    </div>
  );
};

export default Screen4;
