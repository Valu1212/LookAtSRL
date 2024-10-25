import React from "react";
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const CourseJav = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: "https://media.licdn.com/dms/image/C4D12AQFfImTmGXJ6Eg/article-cover_image-shrink_600_2000/0/1601814273575?e=2147483647&v=beta&t=-_GKAVi7LOnwb55bM7G22cZoEL0523-KYEu7S6RlDWM" }}
        style={styles.headerImage}
      />
      <Text style={styles.title}>Curso Java Avanzado</Text>

      <Text style={styles.sectionTitle}>Contenidos:</Text>
      <Text style={styles.content}>
        - Programación Orientada a Objetos{'\n'}
        - Excepciones y Manejo de Errores{'\n'}
        - Colecciones y Genéricos{'\n'}
        - Conexión a Bases de Datos{'\n'}
        - Desarrollo de Aplicaciones Web
      </Text>

      <Text style={styles.sectionTitle}>Próxima Clase:</Text>
      <Text style={styles.classDetails}>Fecha: 29 de octubre 2024</Text>
      <Text style={styles.classDetails}>Horario: 17:00 - 18:30</Text>
      <Text style={styles.classDetails}>Enlace de Zoom: <Text style={styles.link}>zoom.us/j/987654321</Text></Text>

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
    color: '#03DAC6',
  },
  buttonContainer: {
    alignItems: 'center', // Centrar horizontalmente
    marginTop: 20,
  },
  roundButton: {
    backgroundColor: '#03DAC6',
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

export default CourseJav;
