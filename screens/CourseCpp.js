import React from "react";
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const CourseCpp = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: "https://media.licdn.com/dms/image/D5612AQGbnhsdREIvJg/article-cover_image-shrink_720_1280/0/1717078192231?e=2147483647&v=beta&t=XovGHrOcu3j4JST3dxyl8lmCFiuawhn4za952oQNn_Q" }}
        style={styles.headerImage}
      />
      <Text style={styles.title}>Curso C++</Text>

      <Text style={styles.sectionTitle}>Contenidos:</Text>
      <Text style={styles.content}>
        - Introducción a C++{'\n'}
        - Estructuras de Control{'\n'}
        - Funciones y Métodos{'\n'}
        - Programación Orientada a Objetos{'\n'}
        - Manejo de Archivos
      </Text>

      <Text style={styles.sectionTitle}>Próxima Clase:</Text>
      <Text style={styles.classDetails}>Fecha: 28 de octubre 2024</Text>
      <Text style={styles.classDetails}>Horario: 18:00 - 19:30</Text>
      <Text style={styles.classDetails}>Enlace de Zoom: <Text style={styles.link}>zoom.us/j/123456789</Text></Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.roundButton}>
          <Text style={styles.buttonText}>Agregar Tarea</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
  },
  classDetails: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 10,
  },
  link: {
    color: '#76c7c0',
  },
  buttonContainer: {
    alignItems: 'center', // Centrar horizontalmente
    marginTop: 20,
  },
  roundButton: {
    backgroundColor: '#03DAC6', // Cambiado a #03DAC6
    width: 150,  // Ancho del botón
    height: 60, // Alto del botón
    borderRadius: 30, // Hacerlo redondo
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Tamaño de texto más pequeño
    fontWeight: 'bold',
  },
});

export default CourseCpp;
