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
import { StyleSheet, Text, View, TextInput } from 'react-native';

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
                />
                <TextInput
                placeholder='contraseña'
                />

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
    paddingTop: 150,
    paddingBottom: 250,
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

});








