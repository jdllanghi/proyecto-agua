import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.title}>Potable</Text>

      <Image
        source={require('../assets/images/images.jpeg')}
        style={styles.image}
      />

      <Button
        text={showText ? "Ocultar Detalles" : "Mostrar Detalles"}
        onClick={toggleText}
        style={styles.button}
      />

      {showText && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>
            Segura: Libre de microorganismos dañinos (bacterias, virus, parásitos) y sustancias tóxicas
            (metales pesados, químicos). {'\n'}
            Agradable: Clara (sin turbidez), incolora, sin olor ni sabor desagradables.
          </Text>
          <Image
            source={require('../assets/images/images2.jpeg')}
            style={styles.image}
          />
        </View>
      )}

      <View style={styles.navigationButtons}>
        <Button text="Return" onClick={onReturn} style={styles.button} />
        <Button text="Next" onClick={onNext} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    width: 200,
    height: 150,
    marginVertical: 10,
    borderRadius: 10,
  },
  button: {
    width: '100%',
    marginBottom: 10,
    height: 50,
    fontSize: 16,
  },
  detailsContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  detailsText: {
    textAlign: 'center',
    color: '#666',
  },
  navigationButtons: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
  },
});

export default Screen3;
