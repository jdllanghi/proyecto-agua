import React from "react";
import { Button } from "../components/Button";

interface Screen3Props {
  onNext: () => void;
  onReturn: () => void;
}

const Screen3: React.FC<Screen3Props> = ({ onNext, onReturn }) => {
  return (
    <div className="screen">
      <h1>Pantalla 3</h1>
      <p>Información sobre agua potable.</p>
      <Button text="Return" onClick={onReturn} className="mr-2" />
      <Button text="Next" onClick={onNext} />
    </div>
  );
};

export default Screen3;
