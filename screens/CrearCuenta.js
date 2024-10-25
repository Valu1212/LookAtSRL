import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, ScrollView,} from 'react-native';
import '../styles/crearCuenta.css'; 
import InicioSesion from './InicioSesion';
export default function crearCuenta() {
    return (

        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.cont}>

                     {/* FOTO DEL LOGO */}
                     <Image  style={styles.logo}
                    source={require('../assets/logotq1.png')}
                ></Image>
                    {/* TITULO CREAR CUERNTA */}
                    <Text style={styles.titulo}>
                    Crear Cuenta
                    </Text>

                    {/* NOMBRE */}
                    <TextInput 
                    placeholder='Nombre'
                    style={styles.textInput}
                    placeholderTextColor="#fff" 
                    />

                    {/* APELLIDO */}
                    <TextInput 
                    placeholder='Apellido'
                    style={styles.textInput}
                    placeholderTextColor="#fff" 
                    />
                    
                    {/* FECHA DE NACIMIENTO */}
                    <TextInput 
                        placeholder="DD/MM/YYYY" // Placeholder para la fecha
                        style={styles.textInput}
                        keyboardType="numeric" // Solo números en el teclado
                        placeholderTextColor="#fff" 
                    />

                    {/* MAIL */}
                    <TextInput 
                    placeholder='example@gmail.com'
                    style={styles.textInput}
                    placeholderTextColor="#fff" 
                    />

                    {/* TELEFONO */}
                    <TextInput 
                    placeholder='telefono'
                    style={styles.textInput}
                    placeholderTextColor="#fff" 
                    />    

                    {/* CONTRASEÑA */}
                    <TextInput
                    placeholder='contraseña'
                    style={styles.textInput}
                    secureTextEntry // Para ocultar el texto de la contraseña
                    placeholderTextColor="#fff" 
                    />

                    {/* REPETIR CONTRASEÑA */}
                    <TextInput
                    placeholder='Repita nuevamente la contraseña'
                    style={styles.textInput}
                    secureTextEntry // Para ocultar el texto de la contraseña
                    placeholderTextColor="#fff" 
                    />

                    <TouchableOpacity>
                    <Text style={styles.boton}> Crear Cuenta</Text>
                    
                    </TouchableOpacity>
            
                    <Text style={styles.linea}>
                    ----------------- o  -----------------
                    </Text>

                    <TouchableOpacity>
                    
                    <Text style={styles.google}> Ingresar con Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Text style={styles.createAccount}>
                    ¿Ya tienes una cuenta? 
                    Iniciar sesión
                    </Text>
                    </TouchableOpacity>

                    

                </View>
          <StatusBar style="auto"/>
        </View>
        </ScrollView>
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

    cont:{
      backgroundColor: '#000',
      paddingTop: 30,
      paddingBottom: 120,
      paddingLeft: 80,
      paddingRight: 80,
      borderRadius: 30
  
    },
    logo:{
        color: '#fff', // Color de texto
        textAlign: 'center', // Centrar texto
        marginTop: 12,
        width:160,
        height:160,
        marginLeft:80,
    },
    titulo: {
        fontSize: 37, // Tamaño de fuente más grande
        color: '#fff', // Color de texto
        textAlign: 'center', // Centrar texto
        fontWeight: 'bold',
        marginTop: 30,
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#fff',
      padding: 10,
      width:'80%',
      margingTop: 30,
      borderRadius: 9,
      marginVertical: 20,
      height:40,
      width: 320,
      color: '#fff',
      backgroundColor: 'transparent',
      placeholderTextColor: "",
    },
    boton:{
      borderWidth: 1,
      padding: 10,
      width:'80%',
      borderRadius: 9,
      marginVertical: 20,
      height:40,
      width: 320,
      color: 'black',
      backgroundColor: '#03DAC6',

      textAlign: 'center', // Centrar texto
      fontSize: 18,
    },
  
    linea:{
      marginLeft: 1,
      color: 'white',
    },
  
    google:{
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      width:'80%',
      borderRadius: 9,
      marginVertical: 10,
      height:40,
      width: 320,
      backgroundColor: '#03DAC6',
      textAlign: 'center', // Centrar texto
      fontSize: 16,
    },
    createAccount:{
      fontWeight: 'bold',   
      marginVertical: 10,
      color:'white'
    },
    linkText:{
      color:'#fff',
    }
  

});







