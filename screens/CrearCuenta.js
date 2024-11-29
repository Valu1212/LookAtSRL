import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CrearCuenta({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [contrasenia2, setContrasenia2] = useState('');

  const handleCrearCuenta = async () => {
    if (contrasenia !== contrasenia2) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    const usuario = {
      nombre,
      apellido,
      fechaNacimiento,
      email,
      telefono,
      contrasenia,
      contrasenia2,
    };

    try {
      const response = await fetch('http://192.168.1.37:3000/api/usuario/registrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('usuario', JSON.stringify(data));
        Alert.alert('Éxito', 'Cuenta creada exitosamente');
        navigation.navigate('InicioSesion');
      } else {
        Alert.alert('Error', data.message || 'No se pudo crear la cuenta');
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema con la conexión');
    }
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cont}>
          <Image style={styles.logo} source={require('../assets/logotq1.png')} />
          <Text style={styles.titulo}>Crear Cuenta</Text>
          <TextInput
            placeholder="Nombre"
            style={styles.textInput}
            placeholderTextColor="#fff"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            placeholder="Apellido"
            style={styles.textInput}
            placeholderTextColor="#fff"
            value={apellido}
            onChangeText={setApellido}
          />
          <TextInput
            placeholder="DD/MM/YYYY"
            style={styles.textInput}
            keyboardType="numeric"
            placeholderTextColor="#fff"
            value={fechaNacimiento}
            onChangeText={setFechaNacimiento}
          />
          <TextInput
            placeholder="example@gmail.com"
            style={styles.textInput}
            placeholderTextColor="#fff"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Teléfono"
            style={styles.textInput}
            placeholderTextColor="#fff"
            value={telefono}
            onChangeText={setTelefono}
          />
          <TextInput
            placeholder="Contraseña"
            style={styles.textInput}
            secureTextEntry
            placeholderTextColor="#fff"
            value={contrasenia}
            onChangeText={setContrasenia}
          />
          <TextInput
            placeholder="Repita nuevamente la contraseña"
            style={styles.textInput}
            secureTextEntry
            placeholderTextColor="#fff"
            value={contrasenia2}
            onChangeText={setContrasenia2}
          />
          <TouchableOpacity style={styles.botonContainer} onPress={handleCrearCuenta}>
            <Text style={styles.botonText}>Crear Cuenta</Text>
          </TouchableOpacity>
          <Text style={styles.linea}>----------------- o -----------------</Text>
          <TouchableOpacity style={styles.googleContainer}>
            <Text style={styles.googleText}>Ingresar con Google</Text>
          </TouchableOpacity>
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
    backgroundColor: '#000',
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
    width: '90%',
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
