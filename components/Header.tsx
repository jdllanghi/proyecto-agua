import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      {/* Logo a la izquierda */}
      <Image source={require('../assets/images/logo.jpeg')} style={styles.logo} />

      {/* Título en el centro */}
      <Text style={styles.title}>CALIDAD DE AGUA RICAURTE - CUENCA - ECUADOR</Text>

      {/* Imagen a la derecha */}
      <Image source={require('../assets/images/images7.jpg')} style={styles.image7} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribuye el espacio entre los elementos
    backgroundColor: '#004a6f',
    padding: 15,
    width: '100%',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  image7: {
    width: 80,  // Mismo tamaño que el logo
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Centrar el texto
    flex: 1, // Ocupa el espacio restante
    marginHorizontal: 10, // Espacio entre el texto y las imágenes
  },
});