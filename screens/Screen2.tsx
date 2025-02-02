import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Section } from '../components/Section';
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
    <Section title="Detalles del Agua" style={styles.section}>
      <Text style={styles.highlightedText}>Fecha y hora de la última muestra:</Text>

      <View style={styles.row}>
        <Text style={styles.text}>Estado del Agua</Text>
        <Button
          text={showEstadoAgua ? "Ocultar" : "Mostrar"}
          onClick={toggleEstadoAgua}
          style={styles.smallButton}
        />
      </View>
      {showEstadoAgua && <Text style={styles.detailsText}>Estado detallado...</Text>}

      <View style={styles.row}>
        <Text style={styles.text}>Potable</Text>
        <Button
          text={showPotable ? "Ocultar" : "Mostrar"}
          onClick={togglePotable}
          style={styles.smallButton}
        />
      </View>
      {showPotable && <Text style={styles.detailsText}>Agua potable detallada...</Text>}

      <View style={styles.row}>
        <Text style={styles.text}>No Potable</Text>
        <Button
          text={showNoPotable ? "Ocultar" : "Mostrar"}
          onClick={toggleNoPotable}
          style={styles.smallButton}
        />
      </View>
      {showNoPotable && <Text style={styles.detailsText}>Agua no potable detallada...</Text>}

      <View style={styles.navigationButtons}>
        <Button text="Return" onClick={onReturn} style={styles.navigationButton} />
        <Button text="Next" onClick={onNext} style={styles.navigationButton} />
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
    fontFamily: 'Arial',  // Fuente más moderna
    fontWeight: 'bold',
    color: '#004a6f',  // Manteniendo el color de la estructura
    marginBottom: 10,
    letterSpacing: 0.5,  // Espaciado entre letras
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,  // Aumentamos el tamaño de la fuente
    fontFamily: 'Arial',  // Fuente más moderna
    fontWeight: '600',  // Peso de la fuente
    color: '#004a6f',  // El mismo color que el encabezado
    letterSpacing: 0.5,  // Espaciado entre letras
  },
  smallButton: {
    width: '40%',
    height: 40,
    fontSize: 14,  // Aumentamos el tamaño de la fuente en los botones pequeños
  },
  detailsText: {
    fontSize: 16,  // Tamaño de la fuente para los detalles
    color: '#666',
    marginTop: 5,
    fontFamily: 'Arial',  // Fuente moderna
    letterSpacing: 0.5,  // Espaciado entre letras
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
    fontSize: 18,  // Aumentamos el tamaño de la fuente en los botones de navegación
  },
});

export default Screen2;
