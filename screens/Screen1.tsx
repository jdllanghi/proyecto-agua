import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

interface Screen1Props {
  onNext: () => void;
}

const Screen1: React.FC<Screen1Props> = ({ onNext }) => {
  return (
    <Section title="Bienvenido" style={styles.section}>
      <Image 
        source={require('../assets/images/images6.png')} 
        style={styles.image} 
        resizeMode="contain" 
      />

      <View style={styles.row}>
        <Text style={styles.text}>Dispositivo</Text>
        <Button text="Acción Dispositivo" onClick={() => console.log("Acción para Dispositivo")} />
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Longitud</Text>
        <Button text="Acción Longitud" onClick={() => console.log("Acción para Longitud")} />
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Latitud</Text>
        <Button text="Acción Latitud" onClick={() => console.log("Acción para Latitud")} />
      </View>

      <Button text="Next" onClick={onNext} style={styles.nextButton} />
    </Section>
  );
};

const styles = StyleSheet.create({
  section: {
    width: '100%',
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: 500,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
  nextButton: {
    width: '100%',
    height: 50,
    fontSize: 18,
  },
});

export default Screen1;