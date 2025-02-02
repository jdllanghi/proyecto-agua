import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/Button';

interface Screen2Props {
  onNext: () => void;
  onReturn: () => void;
}

const Screen2: React.FC<Screen2Props> = ({ onNext, onReturn }) => {
  const [showEstadoAgua, setShowEstadoAgua] = useState(false);
  const [showPotable, setShowPotable] = useState(false);
  const [showNoPotable, setShowNoPotable] = useState(false);

  const toggleEstadoAgua = () => setShowEstadoAgua((prev) => !prev);
  const togglePotable = () => setShowPotable((prev) => !prev);
  const toggleNoPotable = () => setShowNoPotable((prev) => !prev);

  return (
    <View style={{ padding: 20 }}>
      <Text>Fecha y hora de la última muestra:</Text>

      {/* Estado del Agua */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <Text>Estado del Agua</Text>
        <Button
          text={showEstadoAgua ? "Ocultar Detalles" : "Mostrar Detalles"}
          onClick={toggleEstadoAgua}
        />
      </View>
      {showEstadoAgua && <Text>Detalles sobre el Estado del Agua...</Text>}

      {/* Potable */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <Text>Potable</Text>
        <Button
          text={showPotable ? "Ocultar Detalles" : "Mostrar Detalles"}
          onClick={togglePotable}
        />
      </View>
      {showPotable && <Text>Detalles sobre Agua Potable...</Text>}

      {/* No Potable */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <Text>No Potable</Text>
        <Button
          text={showNoPotable ? "Ocultar Detalles" : "Mostrar Detalles"}
          onClick={toggleNoPotable}
        />
      </View>
      {showNoPotable && <Text>Detalles sobre Agua No Potable...</Text>}

      {/* Botones de navegación */}
      <View style={{ marginTop: 20 }}>
        <Button text="Return" onClick={onReturn} />
        <Button text="Next" onClick={onNext} />
      </View>
    </View>
  );
};

export default Screen2;