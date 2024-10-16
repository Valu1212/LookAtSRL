import React from "react";
import { View, Text, StyleSheet } from "react-native";

const JavaScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Curso de JavaScript</Text>
      <Text>Contenido del curso de JavaScript...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default JavaScreen;
