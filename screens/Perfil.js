import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.cont}>
          {/* ICONO DE PERFIL */}
          <Image
            style={styles.icon}
            source={require('../assets/profile.png')}
          />

          {/* TITULO PERFIL */}
          <Text style={styles.titulo}>Perfil</Text>

          {/* EDITAR NOMBRE */}
          <Text style={styles.createAccount}>Editar nombre</Text>
          <TextInput
            placeholder=''
            style={styles.textInput}
            placeholderTextColor="#fff"
          />

          {/* EDITAR APELLIDO */}
          <Text style={styles.createAccount}>Editar apellido</Text>
          <TextInput
            placeholder=''
            style={styles.textInput}
            placeholderTextColor="#fff"
          />

          {/* EDITAR EMAIL */}
          <Text style={styles.createAccount}>Editar mail</Text>
          <TextInput
            placeholder=''
            style={styles.textInput}
            placeholderTextColor="#fff"
          />

          {/* CONTRASEÑA */}
          <Text style={styles.createAccount}>Contraseña</Text>
          <TextInput
            placeholder=''
            style={styles.textInput}
            placeholderTextColor="#fff"
            secureTextEntry
          />

          <TouchableOpacity style={styles.boton}>
            <Text style={styles.botonText}>Guardar cambios</Text>
          </TouchableOpacity>

          <Text style={styles.createAccount}>
            ¿Olvidaste tu contraseña? Recupérala aquí
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Cambiado a 1 para ocupar toda la pantalla
    backgroundColor: '#121212', // Cambiado a un fondo menos oscuro
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center', // Centrar contenido verticalmente
    padding: 20, // Espaciado alrededor del contenido
  },
  cont: {
    backgroundColor: '#1e1e1e', // Fondo del contenedor, puedes ajustarlo si es necesario
    paddingTop: 30,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 30,
  },
  icon: {
    alignSelf: 'center', // Centrar el icono
    width: 70,
    height: 70,
  },
  titulo: {
    fontSize: 37, // Tamaño de fuente más grande
    color: '#fff', // Color de texto
    textAlign: 'center', // Centrar texto
    fontWeight: 'bold',
    marginTop: 40,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#fff', // Color del borde de los campos de texto
    padding: 10,
    borderRadius: 9,
    marginVertical: 20,
    height: 40,
    color: '#fff',
    backgroundColor: 'transparent',
  },
  boton: {
    borderWidth: 1, // Asegúrate de que el borde esté definido
    borderColor: '#03DAC6', // Color del borde del botón
    padding: 10,
    borderRadius: 9,
    marginVertical: 20,
    height: 40,
    backgroundColor: '#03DAC6', // Color de fondo del botón
    alignItems: 'center', // Centrar texto dentro del botón
    justifyContent: 'center', // Centrar texto dentro del botón
  },
  botonText: {
    color: 'black', // Color del texto del botón
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccount: {
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
  },
});
