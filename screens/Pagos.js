import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';  // Importamos useState
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, ScrollView, } from 'react-native';

import { Picker } from '@react-native-picker/picker';  // Importamos Picker

export default function Pagos() {
    const [selectedPayment1, setSelectedPayment1] = useState('Visa');
    const [selectedPayment2, setSelectedPayment2] = useState('Argentina');

    return (
        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>

                {/* FOTO DEL LOGO */}
                <Image style={styles.logo}
                    source={require('../assets/logo.png')}

                ></Image>


                <View style={styles.cont}>
                    <Text style={styles.titulo}>
                        Medios de pago
                    </Text>

                    <Image style={styles.visaLogo}
                        source={require('../assets/visalogo3.png')}

                    >
                    </Image>
                    <Image style={styles.visaLogo}
                        source={require('../assets/mastercard.png')}
                    >
                    </Image>


                    <Text style={styles.primerPago}>Seleccione su primer medio de pago</Text>
                    <View style={styles.pickerContainer1}>
                        <Picker
                            selectedValue={selectedPayment1}
                            onValueChange={(itemValue) => setSelectedPayment1(itemValue)}
                            dropdownIconColor="#fff"
                        >
                            <Picker.Item label="Visa" value="Visa" />
                            <Picker.Item label="Mastercard" value="Mastercard" />

                        </Picker>
                        <Text style={styles.selectedText}>{selectedPayment1}</Text>
                    </View>


                    {/* NUMERO DE TARJETA */}
                    <Text style={styles.nroTarjeta}>
                        Numero de tarjeta
                    </Text>

                    {/* NUMERO DE TARJETA */}
                    <TextInput
                        placeholder='0678 7532 8854 5025'
                        style={styles.nrotarje}
                        placeholderTextColor="#535353"
                        keyboardType='numeric'
                        maxLength={16} // Limitar a 16 dígitos
                    />

                    {/* EXPIRACION */}

                    <Text style={styles.codigos}>
                        Fecha de caducidad               Codigo de seguridad
                    </Text>
                    <View style={styles.cod}>

                        <TextInput
                            placeholder='Día'
                            style={styles.fecha}
                            placeholderTextColor="#535353"
                            keyboardType='numeric'
                            maxLength={2} // Limitar a 2 dígitos
                        />

                        <TextInput
                            placeholder='Año'
                            style={styles.fecha}
                            placeholderTextColor="#535353"
                            keyboardType='numeric'
                            maxLength={4} // Limitar a 4 dígitos
                        />
                        <TextInput
                            placeholder='CVC'
                            style={styles.cvc}
                            placeholderTextColor="#535353"
                            keyboardType='numeric'
                            maxLength={3} // Limitar a 4 dígitos
                        />
                    </View>


                    <Text style={styles.infoFacturacion}>Información de facturación</Text>




                    {/* NOMBRE */}
                    <TextInput 
                    placeholder='Nombre'
                    style={styles.nombreApe}
                    placeholderTextColor="#fff" 
                    />

                    {/* APELLIDO */}
                    <TextInput 
                    placeholder='Apellido'
                    style={styles.nombreApe}
                    placeholderTextColor="#fff" 
                    />

                    <Text style={styles.pais}>Pais</Text>
                    <View style={styles.pickerContainer2}>
                        <Picker
                            selectedValue={selectedPayment2}
                            onValueChange={(itemValue) => setSelectedPayment2(itemValue)}
                            dropdownIconColor="#fff"
                        >
                            <Picker.Item label="Argentina" value="Argentina" />
                            <Picker.Item label="Bolivia" value="Bolivia" />
                            <Picker.Item label="Chile" value="Chile" />
                            <Picker.Item label="México" value="México" />
                            <Picker.Item label="Paraguay" value="Paraguay" />
                            <Picker.Item label="Uruguay" value="Uruguay" />
                            <Picker.Item label="Venezuela" value="Venezuela" />
                        </Picker>
                        <Text style={styles.selectedText}>{selectedPayment2}</Text>
                    </View>
                </View>
                <StatusBar style="auto" />
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
        marginTop: 12,
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
    // TARJETA LOGO
    visaLogo: {
        width: 85,
        height: 45,
        flexDirection: 'row',
        width: 50, // Ajusta el ancho según lo necesites
        height: 30, // Ajusta la altura según lo necesites
    },



    // ELEGIR TARJETA
    pickerContainer1: {
        width: 320,
        height: 48,
        borderWidth: 1, // Borde alrededor del Picker
        borderColor: '#fff', // Color del borde
        borderRadius: 9, // Bordes redondeados
        marginVertical: 8, // Espaciado vertical
        overflow: 'hidden', // Para que los bordes redondeados se vean
        paddingVertical: 10, // Espaciado interno vertical
    },
    primerPago: {
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white',
        marginBottom: -10,
    },

    // NUMERO DE TARJETA
    nroTarjeta: {
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white',
        marginBottom: 5,
    },
    nrotarje: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        width: '80%',
        borderRadius: 9,
        marginVertical: 8,
        height: 40,
        width: 320,
        color: 'white',
        backgroundColor: 'transparent'
    },

    // CODIGO DE SEGURIDAD Y FECHAS
    fecha: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        width: '40%',
        borderRadius: 9,
        height: 40,
        width: 60,
        color: 'white',
        backgroundColor: 'transparent',
        marginRight: 10,
    },
    cvc: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        width: '40%',
        borderRadius: 9,
        height: 40,
        width: 60,
        color: 'white',
        backgroundColor: 'transparent',
        marginLeft: 45,
    },
    codigos: {
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white',
        marginBottom: -15,
    },
    cod: {
        flexDirection: 'row', // Alinear elementos en fila
        justifyContent: 'space-between', // Espacio entre los elementos
        width: 20, // Ancho del contenedor
        marginVertical: 10, // Espaciado vertical
    },

// NOMBRE

nombreApe: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    width:'20%',
    margingTop: 30,
    borderRadius: 9,
    marginVertical: 20,
    height:40,
    width: 320,
    color: '#fff',
    backgroundColor: 'transparent',
    placeholderTextColor: "",
  },
    // PAIS
    pickerContainer2: {
        width: 320,
        height: 48,
        borderWidth: 1, // Borde alrededor del Picker
        borderColor: '#fff', // Color del borde
        borderRadius: 9, // Bordes redondeados
        marginVertical: 12, // Espaciado vertical
        overflow: 'hidden', // Para que los bordes redondeados se vean
        paddingVertical: 10, // Espaciado interno vertical
    },
    pais: {
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white'
    },

//TITULO INFORMACION DE FACTURACION
    infoFacturacion: {
        fontSize: 37, // Tamaño de fuente más grande
        color: '#fff', // Color de texto
        textAlign: 'center', // Centrar texto
        fontSize: 25,
        marginTop: 50,
    },
  
// PICKERS 
    picker: {
        height: 20, // Altura del Picker
        color: 'white',
    },
    pickerItem: {
        height: 20, // Altura de cada ítem en el dropdown
        color: 'black', // Color del texto de los ítems
    },
    selectedText: {
        // Ajuste positivo para acercar un poco
        color: 'white',
        fontWeight: 'bold',
        // Alineación a la izquierda
        textAlign: 'left',
        marginLeft: 10,
        marginTop: -50,
    },


});

