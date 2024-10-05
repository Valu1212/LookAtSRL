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
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';



export default function InicioSesion() {
    return (
        <View style={styles.container}>
            <Text style={styles.lookAt}>
              LOOK AT
            </Text>
            <View style={styles.cont}>
                <Text style={styles.titulo}>
                  INICIAR SESIÓN
                </Text>


                <TextInput 
                  placeholder='john@email.com'
                  style={styles.textInput}
                />

                <TextInput
                placeholder='contraseña'
                style={styles.textInput}
                />

                <TouchableOpacity>
                  <Text style={styles.boton}> Iniciar Sesión</Text>
                </TouchableOpacity>
           
                <Text style={styles.linea}>
                ---------- o  ----------
                </Text>

                <TouchableOpacity>
                  <Text style={styles.google}> Ingresar con Google</Text>
                </TouchableOpacity>


                <Text style={styles.createAccount}>
                ¿No tienes una cuenta? 
                Crear cuenta
                </Text>

   
            </View>
          <StatusBar style="auto"/>
        </View>
    );
}



const styles = StyleSheet.create({
  container: {
      flex: 1, // Cambiado a 1 para ocupar toda la pantalla
      backgroundColor: '#131313',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20, // Añadido padding para un mejor espaciado
      color: '#fff',
  },
  lookAt:{
    color: '#FFF',
    marginBottom: 55,
    fontSize: 45,
    fontWeight: 'bold',   
  },
  cont:{
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 120,
    paddingLeft: 80,
    paddingRight: 80,
    borderRadius: 30

  },
  titulo: {
      fontSize: 37, // Tamaño de fuente más grande
      color: '#000', // Color de texto
      textAlign: 'center', // Centrar texto
      fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width:'80%',
    margingTop: 30,
    borderRadius: 30,
    marginVertical: 20,
    height:40,
    width: 200,
    
    backgroundColor: '#dbdbd8'
  },
  boton:{
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width:'80%',
    borderRadius: 30,
    marginVertical: 20,
    height:40,
    width: 120,
    color: 'black',
    backgroundColor: '#dbdbd8',
    marginLeft: 32,
  },

  linea:{
    marginLeft: 1,
  },

  google:{
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width:'80%',
    borderRadius: 30,
    marginVertical: 10,
    height:40,
    width: 200,
    backgroundColor: '#dbdbd8'
  },
  createAccount:{
    fontWeight: 'bold',   
    marginVertical: 10,
  }



});








