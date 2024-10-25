import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Course1Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>No hay cursos comprados.</Text>
      <Button
        title="Ver Cursos"
        onPress={() => navigation.navigate('Course')} // Navega a CourseScreen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', // Fondo oscuro
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Texto blanco
  },
});

export default Course1Screen;