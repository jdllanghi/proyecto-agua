import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '../components/Button';

interface Screen3Props {
  onNext: () => void;
  onReturn: () => void;
}

const Screen3: React.FC<Screen3Props> = ({ onNext, onReturn }) => {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText((prev) => !prev);
  };

  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Potable</Text>

      {/* Primera imagen */}
      <Image
        source={require('../assets/images/images.jpeg')}
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
            Segura: Libre de microorganismos dañinos (bacterias, virus, parásitos) y sustancias tóxicas
            (metales pesados, químicos). {'\n'}
            Agradable: Clara (sin turbidez), incolora, sin olor ni sabor desagradables.
          </Text>
          <Image
            source={require('../assets/images/images2.jpeg')}
            style={{ width: 200, height: 150, marginTop: 10, borderRadius: 10 }}
          />
        </View>
      )}

      {/* Botones de navegación */}
      <View style={{ marginTop: 20, flexDirection: 'row', gap: 10 }}>
        <Button text="Return" onClick={onReturn} />
        <Button text="Next" onClick={onNext} />
      </View>
    </View>
  );
};

export default Screen3;
