import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from "react-native";

export default function CursoJavaScript() {
    return (

        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.cont}>

                {/* ICONO DE PERFIL */}
                <Image  style={styles.icon}
                    source={require('../assets/profile.png')}
                ></Image>

                {/* TITULO CREAR CUERNTA */}
                <Text style={styles.titulo}>
                        Perfil
                </Text>
                    {/* EDITAR NHOMBRE */}
                <Text style={styles.createAccount}>
                        Editar nombre
                </Text>
                <TextInput 
                    placeholder=''
                    style={styles.textInput}
                    placeholderTextColor="#fff" 
                  />
                {/* EDITAR APELLIDO */}
                <Text style={styles.createAccount}>
                        Editar apellido
                </Text>
                <TextInput 
                    placeholder=''
                    style={styles.textInput}
                    placeholderTextColor="#fff" 
                  />

            {/* EDITAR MAIL */}
                <Text style={styles.createAccount}>
                        Editar mail
                </Text>
                {/* MAIL */}
                <TextInput 
                    placeholder=''
                    style={styles.textInput}
                    placeholderTextColor="#fff" 
                  />
                <Text style={styles.createAccount}>
                        Contraseña
                </Text>
                <TextInput
                    placeholder=''
                    style={styles.textInput}
                    placeholderTextColor="#fff" 
                    secureTextEntry // Para ocultar el texto de la contraseña
                />




                    <TouchableOpacity>
                    <Text style={styles.boton}>Guardar cambios</Text>
                    
                    </TouchableOpacity>



                    <Text style={styles.createAccount}>
¿Olvidaste tu contraseña? Recuperala aquí ->
                    </Text>

    
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
      borderRadius: 30,
  
    },
    js:{
        width:336,
        height:210,
    },
    contenidos:{
        marginTop:30,
        fontSize:23,
        color:'#fff',
    },
    contenidos2:{
        fontSize:20,
        color:'#fff',
    },
    proxClase:{
        fontSize:20,
        color:'#fff',
    },
    icon:{

        marginLeft: 125,
       width:70,
        height:70,  
     
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

    createAccount:{
      fontWeight: 'bold',   
      marginVertical: 10,
      color:'white'
    }
  

});
