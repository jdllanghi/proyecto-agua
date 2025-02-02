import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Section } from '../components/Section';
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
    <Section title="Potable" style={styles.section}>
      <Text style={styles.highlightedText}>Información sobre Agua Potable</Text>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/images.jpeg')}
          style={styles.image}
        />
      </View>

      <View style={styles.row}>
        <Button
          text={showText ? "OCULTAR" : "MOSTRAR"}
          onClick={toggleText}
          style={styles.smallButton}
        />
      </View>

      {showText && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>
            Segura: Libre de microorganismos dañinos (bacterias, virus, parásitos) y sustancias tóxicas
            (metales pesados, químicos). {'\n'}
            Agradable: Clara (sin turbidez), incolora, sin olor ni sabor desagradables.
          </Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/images2.jpeg')}
              style={styles.image}
            />
          </View>
        </View>
      )}

      <View style={styles.navigationButtons}>
        <Button text="REGRESAR" onClick={onReturn} style={styles.navigationButton} />
        <Button text="SIGUIENTE" onClick={onNext} style={styles.navigationButton} />
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  section: {
    width: '100%',
    flex: 1,
    padding: 20,
  },
  highlightedText: {
    fontSize: 20,  
    fontFamily: 'Arial',  
    fontWeight: 'bold',
    color: '#004a6f',  
    marginBottom: 15,
    textAlign: 'center', 
    letterSpacing: 0.5,  
  },
  imageContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    marginVertical: 10,
  },
  image: {
    width: 250, 
    height: 180, 
    borderRadius: 10,
  },
  smallButton: {
    width: '40%',
    height: 40,
    fontSize: 14,  
  },
  detailsContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  detailsText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,  
    fontFamily: 'Arial',  
    letterSpacing: 0.5,  
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    marginBottom: 20,
  },
  navigationButtons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  navigationButton: {
    width: '48%',
    height: 50,
    fontSize: 18,  
  },
});

export default Screen3;
