import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function CrearCuenta() {
  return (
    
    <View style={styles.container}>
      <StatusBar style="light" />
                       {/* FOTO DEL LOGO */}
                       <Image  style={styles.logo}
                    source={require('../assets/logotq1.png')}
                ></Image>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
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
  },
  logo:{
    color: '#fff', // Color de texto
    textAlign: 'center', // Centrar texto
    marginTop: 12,
    width:160,
    height:160,
    marginLeft:0,
},
  mainTitle: {
    fontSize: 36, // Aumenté el tamaño
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#03DAC6', // Color modificado
  },
  subtitle: {
    fontSize: 28, // Aumenté el tamaño
    marginBottom: 10,
    color: '#fff',
  },
  developerText: {
    fontSize: 24, // Aumenté el tamaño
    marginBottom: 10,
    color: '#fff',
  },
  name: {
    fontSize: 22, // Aumenté el tamaño
    marginVertical: 5,
    color: '#fff',
  },
  class: {
    fontSize: 22, // Aumenté el tamaño
    marginTop: 15,
    fontStyle: 'italic',
    color: '#ccc',
  },
  quote: {
    marginTop: 20,
    fontSize: 20, // Aumenté el tamaño
    color: '#fff',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  motto: {
    marginTop: 10,
    fontSize: 20, // Aumenté el tamaño
    color: '#fff',
    fontStyle: 'italic',
  },
});
