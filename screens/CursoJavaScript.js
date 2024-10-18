import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, ScrollView} from 'react-native';

export default function CursoJavScript() {
    return (

        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.cont}>

                     {/* FOTO DEL LOGO */}
                    <Text style={styles.logo}>
                    LookAt logo
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


});








