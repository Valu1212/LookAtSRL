import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function InicioSesion({navigation}) {
  // Estados para email y contraseña
  const [email, setEmail] = useState('');
  const [contrasenia, setPassword] = useState('');

  // Función para manejar el inicio de sesión
  const handleLogin = async () => {
    try {
      // Realizar solicitud al backend para verificar las credenciales
      const response = await fetch(`http://192.168.1.37:3000/api/usuario/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contrasenia, email}), // Enviar la contraseña en el cuerpo de la solicitud
      });
      console.log(response)
      const data = await response.json(); // Respuesta del servidor
      console.log(data)

      if (response.ok) {
        // Guardar los datos del usuario en AsyncStorage
        await AsyncStorage.setItem('userId', data.id.toString());
        await AsyncStorage.setItem('userName', data.nombre);
        await AsyncStorage.setItem('userLastName', data.apellido);
        await AsyncStorage.setItem('userEmail', data.email);

        // Redirigir a la pantalla de inicio
        navigation.replace('Inicio');  // Usamos replace para que no se pueda volver a la pantalla de login
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Hubo un problema con la conexión al servidor');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: '#000' }}>
      {/* FOTO DEL LOGO */}
      <Image style={styles.logo} source={require('../assets/logotq1.png')} />

      <View style={styles.cont}>
        <Text style={styles.titulo}>INICIAR SESIÓN</Text>

        <Text style={styles.createAccount}>Ingresar mail</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder='john@email.com'
          style={styles.textInput}
          placeholderTextColor="#fff"
        />

        <Text style={styles.createAccount}>Ingresar contraseña</Text>
        <TextInput
          value={contrasenia}
          onChangeText={setPassword}
          placeholder='contraseña'
          secureTextEntry={true} // Para que el texto aparezca oculto
          style={styles.textInput}
          placeholderTextColor="#fff"
        />

        {/* BOTÓN INICIAR SESIÓN */}
        <TouchableOpacity style={styles.botonContainer} onPress={handleLogin}>
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
