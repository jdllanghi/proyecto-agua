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
      
      <View style={styles.imageRow}>
    
        <Image 
          source={require('../assets/images/images6.png')} 
          style={styles.image} 
          resizeMode="contain"  
        />
        
        <Image 
          source={require('../assets/images/images8.jpg')} 
          style={styles.image} 
          resizeMode="contain" 
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
 
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    marginBottom: 30,  
  },
  image: {
    width: '48%',  
    height: 200,  
    maxWidth: 500, 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,  
    fontFamily: 'Arial',  
    fontWeight: '600',  
    color: '#004a6f',  
    letterSpacing: 0.5, 
  },
  nextButton: {
    width: '100%',
    height: 50,
    fontSize: 18,
  },
});

export default Screen1;
