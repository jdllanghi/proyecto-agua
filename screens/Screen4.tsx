import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Section } from '../components/Section';
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
    <Section title="No Potable" style={styles.section}>
      <Text style={styles.highlightedText}>Información sobre Agua No Potable</Text>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/images3.jpeg')}
          style={styles.image}
        />
      </View>

      <View style={styles.row}>
        <Button
          text={showText ? "Ocultar" : "Mostrar"}
          onClick={toggleText}
          style={styles.smallButton}
        />
      </View>

      {showText && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>
            Insegura: Contiene microorganismos dañinos (bacterias, virus, parásitos) y/o sustancias tóxicas
            (metales pesados, químicos, pesticidas). {'\n'}
            Desagradable: Turbia (con partículas en suspensión), con color, con olor y/o sabor desagradables.
          </Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/images5.jpeg')}
              style={styles.image}
            />
          </View>
        </View>
      )}

      <View style={styles.navigationButtons}>
        <Button text="Return" onClick={onReturn} style={styles.navigationButton} />
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
    fontSize: 20,  // Aumentamos el tamaño de la fuente para mayor visibilidad
    fontFamily: 'Arial',  // Fuente moderna
    fontWeight: 'bold',
    color: '#004a6f',  // El mismo color que el encabezado
    marginBottom: 15,
    textAlign: 'center', // Centra el texto
    letterSpacing: 0.5,  // Espaciado entre letras
  },
  imageContainer: {
    alignItems: 'center', // Centra la imagen
    justifyContent: 'center',
    marginVertical: 10,
  },
  image: {
    width: 250,  // Aumentamos el tamaño de la imagen
    height: 180, // Proporcionalmente mayor
    borderRadius: 10,
  },
  smallButton: {
    width: '40%',
    height: 40,
    fontSize: 14,  // Aumentamos el tamaño de la fuente en los botones pequeños
  },
  detailsContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  detailsText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,  // Tamaño de la fuente más grande para mayor legibilidad
    fontFamily: 'Arial',  // Fuente moderna
    letterSpacing: 0.5,  // Espaciado entre letras
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centra el contenido de la fila
    marginBottom: 20,
  },
  navigationButtons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center', // Centra los botones de navegación
    width: '100%',
  },
  navigationButton: {
    width: '48%',
    height: 50,
    fontSize: 18,  // Aumentamos el tamaño de la fuente en los botones de navegación
  },
});

export default Screen4;
