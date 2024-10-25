import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Creditos = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* FOTO DEL LOGO */}
        <Image style={styles.logo} source={require('../assets/logotq1.png')} />
        <View style={styles.card}>
          <Text style={styles.mainTitle}>Bienvenidos a la App</Text>
          <Text style={styles.subtitle}>Créditos</Text>
          <Text style={styles.developerText}>Desarrolladores:</Text>
          <Text style={styles.name}>Valentina Belén Toledo</Text>
          <Text style={styles.name}>Malena Ludmila Juárez</Text>
          <Text style={styles.class}>7mo 1ra - Programación</Text>
          <Text style={styles.quote}>
            "La programación es el arte de pensar en algo que no existe."
          </Text>
          <Text style={styles.motto}>
            "Aprende, crea y transforma el futuro."
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fondo de la pantalla
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center', // Centrar contenido verticalmente
    alignItems: 'center', // Centrar contenido horizontalmente
    padding: 20, // Espaciado alrededor del contenido
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    padding: 40,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
    marginBottom: 20, // Espaciado inferior
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#03DAC6',
  },
  subtitle: {
    fontSize: 28,
    marginBottom: 10,
    color: '#fff',
  },
  developerText: {
    fontSize: 24,
    marginBottom: 10,
    color: '#fff',
  },
  name: {
    fontSize: 22,
    marginVertical: 5,
    color: '#fff',
  },
  class: {
    fontSize: 22,
    marginTop: 15,
    fontStyle: 'italic',
    color: '#ccc',
  },
  quote: {
    marginTop: 20,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  motto: {
    marginTop: 10,
    fontSize: 20,
    color: '#fff',
    fontStyle: 'italic',
  },
});

export default Creditos;
