import React from "react";
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


const CourseScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>LookAt</Text>
      </View>

      <Text style={styles.sectionTitle}>Cursos Comprados</Text>

      {/* Primer curso (C++) */}
      <TouchableOpacity onPress={() => navigation.navigate('CourseCpp')}>
        <View style={styles.recommendedCard}>
          <Image
            source={{ uri: "https://media.licdn.com/dms/image/D5612AQGbnhsdREIvJg/article-cover_image-shrink_720_1280/0/1717078192231?e=2147483647&v=beta&t=XovGHrOcu3j4JST3dxyl8lmCFiuawhn4za952oQNn_Q" }}
            style={styles.recommendedImage}
          />
          <View style={styles.recommendedContent}>
            <Text style={styles.recommendedTitle}>Curso C++</Text>
            <Text style={styles.progressLabel}>Progreso: 35%</Text>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: "35%" }]} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Segundo curso (Java) */}
      <TouchableOpacity onPress={() => navigation.navigate('CourseJav')}>
        <View style={styles.recommendedCard}>
          <Image
            source={{ uri: "https://media.licdn.com/dms/image/C4D12AQFfImTmGXJ6Eg/article-cover_image-shrink_600_2000/0/1601814273575?e=2147483647&v=beta&t=-_GKAVi7LOnwb55bM7G22cZoEL0523-KYEu7S6RlDWM" }}
            style={styles.recommendedImage}
          />
          <View style={styles.recommendedContent}>
            <Text style={styles.recommendedTitle}>Curso Java Avanzado</Text>
            <Text style={styles.progressLabel}>Progreso: 60%</Text>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: "60%" }]} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212', // Fondo oscuro
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Texto blanco
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff', // Texto blanco
  },
  recommendedCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#1e1e1e', // Fondo de las tarjetas
    borderRadius: 8, // Bordes redondeados
    padding: 10, // Espaciado interno
  },
  recommendedImage: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 8, // Bordes redondeados para la imagen
  },
  recommendedContent: {
    flex: 1,
    justifyContent: 'center',
  },
  recommendedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Texto blanco
  },
  progressLabel: {
    fontSize: 14,
    marginVertical: 4,
    color: '#ccc', // Texto gris claro
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#76c7c0',
  },
});

export default CourseScreen;
