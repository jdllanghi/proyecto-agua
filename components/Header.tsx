import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/images/logo.jpeg')} style={styles.logo} />
      <Text style={styles.title}>CALIDAD DE AGUA RICAURTE - CUENCA - ECUADOR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#004a6f',
    padding: 10,
    width: '100%',
  },
  logo: {
    width: 40, // Ajusta el tamaño según lo necesites
    height: 40,
    resizeMode: 'contain',
    marginRight: 10, // Espacio entre la imagen y el texto
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

