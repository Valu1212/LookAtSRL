import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CourseCard from "../components/CourseCard";

const HomeScreen = () => {
  const navigation = useNavigation();

 
  const handleCardPress = () => {
    navigation.navigate("Stack"); 
  };

  

  return (
    <ScrollView style={styles.container}>
     
      <Text style={styles.title}>LookAt</Text>
      
   
      <CourseCard
        onPress={handleCardPress}
        image="https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/que-es-javascript-descubre-sus-5-principales-usos.jpg"
        title="Curso de JavaScript"
        description="Aprende JavaScript desde cero"
      />
   

      <CourseCard
        onPress={handleCardPress}
        image="https://www.masterseosem.com/images/etiquetas-html.webp"
        title="Curso de HTML"
        description="Aprende HTML"
      />


      <CourseCard
        onPress={handleCardPress}
        image="https://media.licdn.com/dms/image/D5612AQGbnhsdREIvJg/article-cover_image-shrink_720_1280/0/1717078192231?e=2147483647&v=beta&t=XovGHrOcu3j4JST3dxyl8lmCFiuawhn4za952oQNn_Q"
        title="Curso de C++"
        description="Inicia programando con C++"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },

  title: {
    fontSize: 30,       
    fontWeight: 'bold',  
    marginBottom: 20,  
    textAlign: 'left',  
    paddingBottom: 50,
  },
});

export default HomeScreen;