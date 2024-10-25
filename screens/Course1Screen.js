import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Course1Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/sad-robot-3d-icon-download-in-png-blend-fbx-gltf-file-formats--unhappy-brain-ai-technology-activity-pack-science-icons-7746762.png?f=webp' }} // Cambia este URL por el de tu imagen de robot triste
        style={styles.image}
      />
      <Text style={styles.message}>No hay cursos comprados.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeScreen')} // Navega a HomeScreen
      >
        <Text style={styles.buttonText}>Comprar Cursos</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Course')} // Navega a Course
      >
        <Text style={styles.buttonText}>Ver Cursos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Cambiar a flex-start para mover el contenido hacia arriba
    alignItems: 'center',
    backgroundColor: '#121212', // Fondo oscuro
    padding: 20, // Espaciado interno
  },
  image: {
    width: 150, // Ancho de la imagen
    height: 150, // Alto de la imagen
    marginTop: 40, // Añadir espacio superior para mover la imagen más abajo
    marginBottom: 20, // Espacio debajo de la imagen
  },
  message: {
    fontSize: 24, // Aumentar tamaño de fuente para mayor claridad
    fontWeight: 'bold',
    color: '#fff', // Texto blanco
    marginBottom: 20, // Espacio debajo del mensaje
    textAlign: 'center', // Centrar el texto
  },
  button: {
    backgroundColor: '#03DAC6', // Cambiado a color deseado
    borderRadius: 25, // Bordes redondeados
    paddingVertical: 15, // Espaciado interno vertical
    paddingHorizontal: 20, // Espaciado interno horizontal
    width: '80%', // Ancho del botón
    alignItems: 'center', // Centrar texto dentro del botón
    marginVertical: 10, // Aumentar el espacio entre botones
  },
  buttonText: {
    color: '#fff', // Texto blanco
    fontSize: 18, // Tamaño de fuente
    fontWeight: 'bold', // Negrita
  },
});

export default Course1Screen;
