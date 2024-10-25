import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

const Stack = ({navigation}) => {
  const course = {
    title: "Curso de Desarrollo Web 2",
    description: "Sigue desarrollando páginas con este curso avanzado de desarrollo web.",
    content: "HTML5, CSS3, JavaScript Avanzado, y Frameworks Frontend",
    price: "$90.000",
    duration: "12 semanas",
    hoursPerWeek: "6 horas",
    difficulty: "Media",
    instructor: "Pedro Gómez",
    rating: 4.2,
    students: "12",
    image: "https://www.masterseosem.com/images/etiquetas-html.webp",
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