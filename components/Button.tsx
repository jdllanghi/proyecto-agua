import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  text: string; // Cambié "Text" a "text" para seguir convenciones
  onClick: () => void;
  style?: object; // Cambié "className" a "style" para React Native
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, style }) => {
  return (
    <TouchableOpacity
      onPress={onClick} // Cambié "onClick" a "onPress"
      style={[styles.button, style]} // Usamos StyleSheet
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#007acc',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});