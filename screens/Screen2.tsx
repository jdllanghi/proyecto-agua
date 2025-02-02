import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.highlightedText}>Fecha y hora de la última muestra:</Text>

      <View style={styles.row}>
        <Text style={styles.sectionTitle}>Estado del Agua</Text>
        <Button
          text={showEstadoAgua ? "Ocultar Detalles" : "Mostrar Detalles"}
          onClick={toggleEstadoAgua}
          style={styles.smallButton}
        />
      </View>
      {showEstadoAgua && <Text style={styles.detailsText}>Detalles sobre el Estado del Agua...</Text>}

      <View style={styles.row}>
        <Text style={styles.sectionTitle}>Potable</Text>
        <Button
          text={showPotable ? "Ocultar Detalles" : "Mostrar Detalles"}
          onClick={togglePotable}
          style={styles.smallButton}
        />
      </View>
      {showPotable && <Text style={styles.detailsText}>Detalles sobre Agua Potable...</Text>}

      <View style={styles.row}>
        <Text style={styles.sectionTitle}>No Potable</Text>
        <Button
          text={showNoPotable ? "Ocultar Detalles" : "Mostrar Detalles"}
          onClick={toggleNoPotable}
          style={styles.smallButton}
        />
      </View>
      {showNoPotable && <Text style={styles.detailsText}>Detalles sobre Agua No Potable...</Text>}

      <View style={styles.navigationButtons}>
        <Button text="Return" onClick={onReturn} style={styles.button} />
        <Button text="Next" onClick={onNext} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f8ff',
  },
  button: {
    width: '100%',
    marginBottom: 10,
    height: 50,
    fontSize: 16,
  },
  smallButton: {
    width: '100%',
    marginBottom: 10,
    height: 40,
    fontSize: 12,  // Tamaño de fuente reducido
  },
  navigationButtons: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
  },
  highlightedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#555',
  },
  detailsText: {
    color: '#666',
  },
});

export default Screen2;
