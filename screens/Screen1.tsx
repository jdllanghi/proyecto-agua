import React from "react";
import { Section } from "../components/Section";
import { Button } from "../components/Button";

interface Screen1Props {
  onNext: () => void;
}

const Screen1: React.FC<Screen1Props> = ({ onNext }) => {
  return (
    <Section title="Bienvenido">
      <p>Introduce los datos iniciales.</p>
      <Button text="Next" onClick={onNext} />
    </Section>
  );
};

export default Screen1;
