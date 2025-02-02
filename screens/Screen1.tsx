import React from 'react';
import { View, Text } from 'react-native';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

interface Screen1Props {
  onNext: () => void;
}

const Screen1: React.FC<Screen1Props> = ({ onNext }) => {
  return (
    <Section title="Bienvenido">
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text>Dispositivo</Text>
        <Button text="Acción Dispositivo" onClick={() => console.log("Acción para Dispositivo")} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text>Longitud</Text>
        <Button text="Acción Longitud" onClick={() => console.log("Acción para Longitud")} />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text>Latitud</Text>
        <Button text="Acción Latitud" onClick={() => console.log("Acción para Latitud")} />
      </View>

      <Button text="Next" onClick={onNext} />
    </Section>
  );
};

export default Screen1;