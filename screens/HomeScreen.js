import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons"; // Para íconos de estrellas y más

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleCardPress = (stack) => {
    navigation.navigate(stack);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>LookAt</Text>
        <Text style={styles.headerSubtitle}></Text>
      </View>

      {/* Categorías */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Desarrollo Web</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Lenguajes de Programación</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Bases de Datos</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Cursos destacados */}
      <Text style={styles.sectionTitle}>Cursos Disponibles</Text>
      <CourseCard
        onPress={() => handleCardPress("Stack")}
        image="https://th.bing.com/th/id/OIP.JJrv12zejU-pJrpNoKIg5QHaEK?w=1200&h=675&rs=1&pid=ImgDetMain"
        title="Curso de Java Basico"
        description="Aprende Java desde cero"
        rating={4.5}
        students="5"
      />
      <CourseCard
        onPress={() => handleCardPress("Stack2")}
        image="https://imgpublic.com/wp-content/uploads/2020/01/html-et-css-pour-wordpress.jpg"
        title="Curso desarrollo web 1"
        description="Aprende HTML y css con este curso para principiantes"
        rating={4.7}
        students="6"
      />
      <CourseCard
        onPress={() => handleCardPress("Stack3")}
        image="https://media.licdn.com/dms/image/D5612AQGbnhsdREIvJg/article-cover_image-shrink_720_1280/0/1717078192231?e=2147483647&v=beta&t=XovGHrOcu3j4JST3dxyl8lmCFiuawhn4za952oQNn_Q"
        title="Curso de C++"
        description="Inicia programando con C++"
        rating={4.2}
        students="9"
      />
      <CourseCard
        onPress={() => handleCardPress("Stack4")}
        image="https://www.masterseosem.com/images/etiquetas-html.webp"
        title="Curso de Desarrollo web 2"
        description="Sigue desarrollando paginas con este curso profesional de desarrollo web 2"
        rating={4.2}
        students="12"
      />
      <CourseCard
        onPress={() => handleCardPress("Stack5")}
        image="https://media.licdn.com/dms/image/C4D12AQFfImTmGXJ6Eg/article-cover_image-shrink_600_2000/0/1601814273575?e=2147483647&v=beta&t=-_GKAVi7LOnwb55bM7G22cZoEL0523-KYEu7S6RlDWM"
        title="Curso de Java Avanzado"
        description="Impulsa tu carrera con Java avanzado: descubre técnicas, optimiza proyectos y domina herramientas clave."
        rating={4.2}
        students="8"
      />
      <CourseCard
        onPress={() => handleCardPress("Stack6")}
        image="https://images.hdqwalls.com/download/python-logo-4k-i6-1920x1080.jpg"
        title="Curso de Python"
        description="Inicia tu aventura en programación con Python, un lenguaje versátil y fácil de aprender."
        rating={3.9}
        students="7"
      />

      <Text style={styles.sectionTitle}>Cursos Iniciados</Text>
      <View style={styles.recommendedCard}>
        <Image
          source={{ uri: "https://media.licdn.com/dms/image/D5612AQGbnhsdREIvJg/article-cover_image-shrink_720_1280/0/1717078192231?e=2147483647&v=beta&t=XovGHrOcu3j4JST3dxyl8lmCFiuawhn4za952oQNn_Q" }}
          style={styles.recommendedImage}
        />
        <View style={styles.recommendedContent}>
          <Text style={styles.recommendedTitle}>Curso C++</Text>
          <Text style={styles.progressLabel}>Progreso: 35% </Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: "35%" }]} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// Componente CourseCard (tarjeta de curso)
const CourseCard = ({ onPress, image, title, description, rating, students }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: image }} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <View style={styles.cardFooter}>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <Text style={styles.studentText}>{students} estudiantes</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Color de fondo oscuro
  },

  header: {
   // Color más oscuro para el encabezado
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    marginTop: 65, // Aumenta el margen superior para bajar el encabezado
  },

  headerTitle: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
  },

  headerSubtitle: {
    color: "#cccccc", // Color de texto gris claro
    fontSize: 16,
    marginTop: 5,
  },

  categoryScroll: {
    marginBottom: 20,
  },

  categoryButton: {
    backgroundColor: "#03DAC6",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },

  categoryText: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#ffffff", // Texto blanco para resaltar
    marginHorizontal: 15,
    marginTop: 30, // Ajustado
    marginBottom: 20, // Ajustado
  },

  card: {
    backgroundColor: "#1F1F1F", // Fondo oscuro para las tarjetas
    marginHorizontal: 15,
    marginBottom: 40, // Reducido para evitar demasiada separación
    marginTop: 30, // Aumentado para más separación del título
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3, // Sombra para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  cardImage: {
    width: "100%",
    height: 150,
  },

  cardContent: {
    padding: 15,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },

  cardDescription: {
    fontSize: 14,
    color: "#cccccc",
    marginVertical: 5,
  },

  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  ratingText: {
    marginLeft: 5,
    fontSize: 16,
    color: "#ffffff",
  },

  studentText: {
    fontSize: 14,
    color: "#cccccc",
  },

  ctaButton: {
    backgroundColor: "#03DAC6", // Botón llamativo con color acento
    marginHorizontal: 15,
    marginVertical: 20,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },

  ctaButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },

  recommendedCard: {
    backgroundColor: "#2A2A2A", // Fondo más oscuro para la tarjeta recomendada
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
  },

  recommendedImage: {
    width: 100,
    height: 100,
  },

  recommendedContent: {
    padding: 10,
    justifyContent: "center",
  },

  recommendedTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },

  progressLabel: {
    fontSize: 12,
    color: "#cccccc",
    marginTop: 5,
  },

  progressBarContainer: {
    width: "100%",
    height: 8,
    backgroundColor: "#444",
    borderRadius: 4,
    marginTop: 5,
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#03DAC6",
    borderRadius: 4,
  },
});

export default HomeScreen;
