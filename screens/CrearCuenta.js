import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function CrearCuenta({navigation}) {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cont}>
          {/* FOTO DEL LOGO */}
          <Image style={styles.logo} source={require('../assets/logotq1.png')} />

          {/* TITULO CREAR CUENTA */}
          <Text style={styles.titulo}>Crear Cuenta</Text>

          {/* CAMPOS DE TEXTO */}
          <TextInput placeholder="Nombre" style={styles.textInput} placeholderTextColor="#fff" />
          <TextInput placeholder="Apellido" style={styles.textInput} placeholderTextColor="#fff" />
          <TextInput placeholder="DD/MM/YYYY" style={styles.textInput} keyboardType="numeric" placeholderTextColor="#fff" />
          <TextInput placeholder="example@gmail.com" style={styles.textInput} placeholderTextColor="#fff" />
          <TextInput placeholder="Teléfono" style={styles.textInput} placeholderTextColor="#fff" />
          <TextInput placeholder="Contraseña" style={styles.textInput} secureTextEntry placeholderTextColor="#fff" />
          <TextInput placeholder="Repita nuevamente la contraseña" style={styles.textInput} secureTextEntry placeholderTextColor="#fff" />

          {/* BOTÓN CREAR CUENTA */}
          <TouchableOpacity style={styles.botonContainer}>
            <Text style={styles.botonText}>Crear Cuenta</Text>
          </TouchableOpacity>

          <Text style={styles.linea}>----------------- o -----------------</Text>

          {/* BOTÓN INGRESAR CON GOOGLE */}
          <TouchableOpacity style={styles.googleContainer}>
            <Text style={styles.googleText}>Ingresar con Google</Text>
          </TouchableOpacity>

          {/* LINK INICIAR SESIÓN */}
          <TouchableOpacity onPress={() => navigation.navigate('InicioSesion')}>
            <Text style={styles.createAccount}>
              ¿Ya tienes una cuenta? <Text style={styles.linkText}>Iniciar sesión</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000', // Fondo negro para toda la pantalla
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  cont: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%', // Para que no ocupe todo el ancho y quede centrado
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 37,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    borderRadius: 9,
    marginVertical: 10,
    width: 320,
    color: '#fff',
  },
  botonContainer: {
    borderRadius: 9,
    backgroundColor: '#03DAC6',
    paddingVertical: 10,
    width: 320,
    alignItems: 'center',
    marginVertical: 20,
  },
  botonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linea: {
    color: '#fff',
    marginVertical: 10,
  },
  googleContainer: {
    borderRadius: 9,
    backgroundColor: '#03DAC6',
    paddingVertical: 10,
    width: 320,
    alignItems: 'center',
    marginVertical: 10,
  },
  googleText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccount: {
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
  },
  linkText: {
    color: '#03DAC6',
    textDecorationLine: 'underline',
  },
});
