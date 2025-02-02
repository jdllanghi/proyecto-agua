import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '../components/Button';

interface Screen4Props {
  onReturn: () => void;
}

const Screen4: React.FC<Screen4Props> = ({ onReturn }) => {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText((prev) => !prev);
  };

  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>No Potable</Text>

      {/* Primera imagen */}
      <Image
        source={require('../assets/images/images3.jpeg')}
        style={{ width: 200, height: 150, marginVertical: 10, borderRadius: 10 }}
      />

      <Button
        text={showText ? "Ocultar Detalles" : "Mostrar Detalles"}
        onClick={toggleText}
      />

      {/* Texto y segunda imagen que se muestran u ocultan */}
      {showText && (
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Text style={{ textAlign: 'center' }}>
            Insegura: Contiene microorganismos dañinos (bacterias, virus, parásitos) y/o sustancias tóxicas
            (metales pesados, químicos, pesticidas). {'\n'}
            Desagradable: Turbia (con partículas en suspensión), con color, con olor y/o sabor desagradables.
          </Text>
          <Image
            source={require('../assets/images/images5.jpeg')}
            style={{ width: 200, height: 150, marginTop: 10, borderRadius: 10 }}
          />
        </View>
      )}

      {/* Botón de retorno */}
      <View style={{ marginTop: 20 }}>
        <Button text="Return" onClick={onReturn} />
      </View>
    </View>
  );
};

export default Screen4;
