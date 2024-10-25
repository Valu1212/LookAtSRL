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

                    {/* TITULO CREAR CUERNTA */}
                    <Text style={styles.titulo}>
                        JAVA SCRIPT
                    </Text>
                    
                    <Image  style={styles.js}
                    source={require('../assets/js.png')}
                    >
                    </Image>

                    <Text style={styles.contenidos} >
                         Contenidos:{"\n"}
                    </Text>

                    <Text style={styles.contenidos2} >
                         -Variables{"\n"}
                         -Operadores{"\n"}
                        -Funciones{"\n"}
                        -Arrays{"\n"}
                        -Objetos.{"\n"}
                        -DOM{"\n"}

                    </Text>
                    <Text style={styles.proxClase}>
                         Proxima clase:
                    </Text>


                    <TouchableOpacity>
                    <Text style={styles.boton}> Crear Cuenta</Text>
                    
                    </TouchableOpacity>
            
                    <Text style={styles.linea}>
                    ----------------- o  -----------------
                    </Text>

                    <TouchableOpacity>
                    
                    <Text style={styles.google}> Ingresar con Google</Text>
                    </TouchableOpacity>


                    <Text style={styles.createAccount}>
                    ¿Ya tienes una cuenta? 
                    Iniciar sesión
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
    logo:{
        color: '#fff', // Color de texto
        textAlign: 'center', // Centrar texto
        marginTop: 20,
        fontSize:28,
    },
    titulo: {
        fontSize: 37, // Tamaño de fuente más grande
        color: '#fff', // Color de texto
        textAlign: 'center', // Centrar texto
        fontWeight: 'bold',
        marginTop: 100,
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
      backgroundColor: '#e28000',

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
      backgroundColor: '#e28000',
      textAlign: 'center', // Centrar texto
      fontSize: 16,
    },
    createAccount:{
      fontWeight: 'bold',   
      marginVertical: 10,
      color:'white'
    }
  

});
