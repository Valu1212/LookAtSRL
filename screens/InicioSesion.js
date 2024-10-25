// import { StyleSheet, Text, View } from 'react-native';
// export default function InicioSesion() {
//     return (
//         <>
//             <Text>
//                 Screen dentro de Screen Uno, para ver como se navega entre screens
//             </Text>
//         </>
//     );
// }


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image } from 'react-native';


export default function InicioSesion() {
  return (
    <View style={styles.container}>

      {/* FOTO DEL LOGO */}
      <Image style={styles.logo}
        source={require('../assets/logotq1.png')}
      ></Image>

      <View style={styles.cont}>
        <Text style={styles.titulo}>
          INICIAR SESIÓN
        </Text>

        <Text style={styles.createAccount}>
          Ingresar mail
        </Text>
        <TextInput
          placeholder='john@email.com'
          style={styles.textInput}
          placeholderTextColor="#fff"
        />
        <Text style={styles.createAccount}>
          Ingresar contraseña
        </Text>
        <TextInput
          placeholder='contraseña'
          style={styles.textInput}
          placeholderTextColor="#fff"
        />

        <TouchableOpacity>
          <Text style={styles.boton}> Iniciar Sesión</Text>
        </TouchableOpacity>

        <Text style={styles.linea}>
          ----------------- o  -----------------
        </Text>

        <TouchableOpacity>

          <Text style={styles.google}> Ingresar con Google</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={styles.createAccount}>
          ¿No tienes una cuenta?
          Crear cuenta
        </Text>
        </TouchableOpacity>

      {/* T */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, // Cambiado a 1 para ocupar toda la pantalla
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Añadido padding para un mejor espaciado
    color: '#fff',
  },
  lookAt: {
    color: '#FFF',
    marginBottom: 55,
    fontSize: 45,
    fontWeight: 'bold',
  },
  cont: {
    backgroundColor: '#000',
    paddingTop: 30,
    paddingBottom: 120,
    paddingLeft: 80,
    paddingRight: 80,
    borderRadius: 30

  },
  logo: {
    color: '#fff', // Color de texto
    textAlign: 'center', // Centrar texto
    marginTop: 80,
    width: 160,
    height: 160,
    marginLeft: 0,
  },
  titulo: {
    fontSize: 37, // Tamaño de fuente más grande
    color: '#fff', // Color de texto
    textAlign: 'center', // Centrar texto
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    width: '80%',
    margingTop: 30,
    borderRadius: 9,
    marginVertical: 20,
    height: 40,
    width: 320,
    color: 'white',
    backgroundColor: 'transparent'
  },
  boton: {
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 9,
    marginVertical: 20,
    height: 40,
    width: 320,
    color: 'black',
    backgroundColor: '#03DAC6',

    textAlign: 'center', // Centrar texto
    fontSize: 18,
  },

  linea: {
    marginLeft: 1,
    color: 'white',
  },

  google: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '80%',
    borderRadius: 9,
    marginVertical: 10,
    height: 40,
    width: 320,
    backgroundColor: '#03DAC6',
    textAlign: 'center', // Centrar texto
    fontSize: 16,
  },
  createAccount: {
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white'
  }



});








