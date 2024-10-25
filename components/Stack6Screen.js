import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

const Stack = () => {
  const course = {
    title: "Curso de Python",
    description: "Aprende a programar en Python, uno de los lenguajes más versátiles y populares para el desarrollo web, ciencia de datos y más.",
    content: "Sintaxis básica, Funciones, Programación Orientada a Objetos, Librerías populares.",
    price: "$85.000",
    duration: "8 semanas",
    hoursPerWeek: "4 horas",
    difficulty: "Intermedio",
    instructor: "María González",
    rating: 3.9,
    students: "7",
    image: "https://images.hdqwalls.com/download/python-logo-4k-i6-1920x1080.jpg",
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

        <TouchableOpacity style={styles.button} onPress={() => alert('¡Curso comprado!')}>
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
    backgroundColor: "#121212", // Fondo oscuro
  },
  card: {
    backgroundColor: "#1e1e1e", // Fondo de la tarjeta
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000", // Sombra para el efecto de tarjeta
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // Elevación para Android
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
    color: "#ffffff", // Texto blanco
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 18,
    color: "#cccccc", // Texto gris claro
    marginBottom: 20,
  },
  courseDetail: {
    fontSize: 16,
    color: "#cccccc",
    marginBottom: 10,
  },
  courseDetailValue: {
    color: "#ffffff", // Valor destacado en blanco
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#03DAC6", // Fondo del botón
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#121212", // Color del texto del botón
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Stack;