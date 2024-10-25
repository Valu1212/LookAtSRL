import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function InicioSesion({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: '#000' }}>
      {/* FOTO DEL LOGO */}
      <Image style={styles.logo} source={require('../assets/logotq1.png')} />

      <View style={styles.cont}>
        <Text style={styles.titulo}>INICIAR SESIÓN</Text>

        <Text style={styles.createAccount}>Ingresar mail</Text>
        <TextInput
          placeholder='john@email.com'
          style={styles.textInput}
          placeholderTextColor="#fff"
        />

        <Text style={styles.createAccount}>Ingresar contraseña</Text>
        <TextInput
          placeholder='contraseña'
          secureTextEntry={true} // Para que el texto aparezca oculto
          style={styles.textInput}
          placeholderTextColor="#fff"
        />

        {/* BOTÓN INICIAR SESIÓN */}
        <TouchableOpacity style={styles.botonContainer} onPress={() => navigation.navigate('Inicio')}>
          <Text style={styles.botonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <Text style={styles.linea}>----------------- o -----------------</Text>

        <TouchableOpacity style={styles.googleContainer}>
          <Text style={styles.googleText}>Ingresar con Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('CrearCuenta')}>
          <Text style={styles.createAccount}>¿No tienes una cuenta? Crear cuenta</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000', // Asegura fondo negro
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  logo: {
    marginTop: 50,
    width: 160,
    height: 160,
  },
  cont: {
    backgroundColor: '#000', // Asegura fondo negro
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
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
    backgroundColor: 'transparent',
  },
  botonContainer: {
    borderWidth: 1,
    borderColor: '#03DAC6', // Color del borde del botón
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
});
