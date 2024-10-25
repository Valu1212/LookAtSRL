import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

const Stack = ({ navigation }) => { // Añadido el prop navigation
  const course = {
    title: "Curso de Java Basico",
    description: "Aprende Java desde cero, dominando variables, funciones, objetos y mucho más.",
    content: "Estructuras de Control, Funciones y Métodos, y Programación Orientada a Objetos",
    price: "$65.000",
    duration: "8 semanas",
    hoursPerWeek: "4 horas",
    difficulty: "Facil",
    instructor: "Juan Pérez",
    rating: 4.5,
    students: "5",
    image: "https://th.bing.com/th/id/OIP.JJrv12zejU-pJrpNoKIg5QHaEK?w=1200&h=675&rs=1&pid=ImgDetMain",
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: course.image }} style={styles.image} />
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseDescription}>{course.description}</Text>
        <Text style={styles.courseDetail}>Contenidos: <Text style={styles.courseDetailValue}>{course.content}</Text></Text>
        <Text style={styles.courseDetail}>Precio: <Text style={styles.courseDetailValue}>{course.price}</Text></Text>
        <Text style={styles.courseDetail}>Duración: <Text style={styles.courseDetailValue}>{course.duration}</Text></Text>
        <Text style={styles.courseDetail}>Horas a la semana: <Text style={styles.courseDetailValue}>{course.hoursPerWeek}</Text></Text>
        <Text style={styles.courseDetail}>Dificultad: <Text style={styles.courseDetailValue}>{course.difficulty}</Text></Text>
        <Text style={styles.courseDetail}>Profesor/a: <Text style={styles.courseDetailValue}>{course.instructor}</Text></Text>
        <Text style={styles.courseDetail}>Calificación: <Text style={styles.courseDetailValue}>{course.rating} ⭐</Text></Text>
        <Text style={styles.courseDetail}>Estudiantes inscritos: <Text style={styles.courseDetailValue}>{course.students}</Text></Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Pagos')} // Navega a la pantalla de Pagos
        >
          <Text style={styles.buttonText}>Comprar Curso</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
  },
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  courseTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 18,
    color: "#cccccc",
    marginBottom: 20,
  },
  courseDetail: {
    fontSize: 16,
    color: "#cccccc",
    marginBottom: 10,
  },
  courseDetailValue: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#03DAC6",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#121212",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Stack;
