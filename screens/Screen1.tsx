import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

interface Screen1Props {
  onNext: () => void;
}

const Screen1: React.FC<Screen1Props> = ({ onNext }) => {
  return (
    <Section title="BIENVENIDOS" style={styles.section}>
      {/* Contenedor de imágenes alineadas a los lados */}
      <View style={styles.imageRow}>
        {/* Imagen a la izquierda */}
        <Image 
          source={require('../assets/images/images6.png')} 
          style={styles.image} 
          resizeMode="contain"  // Mantener la relación de aspecto
        />
        {/* Imagen a la derecha */}
        <Image 
          source={require('../assets/images/images8.jpg')} 
          style={styles.image} 
          resizeMode="contain"  // Mantener la relación de aspecto
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Dispositivo</Text>
        <Button text="DATOS" onClick={() => console.log("Acción para Dispositivo")} />
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Longitud</Text>
        <Button text="DATOS" onClick={() => console.log("Acción para Longitud")} />
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Latitud</Text>
        <Button text="DATOS" onClick={() => console.log("Acción para Latitud")} />
      </View>

      <Button text="SIGUIENTE" onClick={onNext} style={styles.nextButton} />
    </Section>
  );
};

const styles = StyleSheet.create({
  section: {
    width: '100%',
    flex: 1,
    padding: 20,
  },
  // Estilo para el contenedor de las imágenes alineadas
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',  // Distribuye las imágenes a los extremos
    marginBottom: 30,  // Espacio debajo de las imágenes
  },
  image: {
    width: '48%',  // La imagen ocupará un 48% del ancho del contenedor
    height: 200,   // Altura de las imágenes
    maxWidth: 500, // El ancho máximo de cada imagen será de 500px
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,  // Tamaño de letra más grande para mejor legibilidad
    fontFamily: 'Arial',  // Fuente más moderna
    fontWeight: '600',  // Peso de fuente medio
    color: '#004a6f',  // El mismo color que el encabezado
    letterSpacing: 0.5,  // Espaciado entre letras para un look más limpio
  },
  nextButton: {
    width: '100%',
    height: 50,
    fontSize: 18,
  },
});

export default Screen1;
