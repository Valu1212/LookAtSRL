import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';  // Importamos useState
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, ScrollView, } from 'react-native';
import { Picker } from '@react-native-picker/picker';  // Importamos Picker
import { Modal } from 'react-native';

export default function Pagos() {
    const [selectedPayment1, setSelectedPayment1] = useState('Visa');
    const [selectedPayment2, setSelectedPayment2] = useState('Argentina');
    const [modalVisible, setModalVisible] = useState(false);
    const realizarCompra = () => {
        setModalVisible(true);
    };

    return (
        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>

                {/* FOTO DEL LOGO */}
                <Image style={styles.logo}
                        source={require('../assets/logotq1.png')}

                ></Image>


                <View style={styles.cont}>
                    <Text style={styles.titulo}>
                        Medios de pago
                    </Text>



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


                    {/* EXPIRACION */}

                    <Text style={styles.codigos}>
                        Nombre                                 ApellidoS
                    </Text>
                    <View style={styles.persona}>

                        <TextInput
                            placeholder='Nombre'
                            style={styles.nomYape}
                            placeholderTextColor="#535353"
                            keyboardType='default'
                            maxLength={2} // Limitar a 2 dígitos
                        />

                        <TextInput
                            placeholder='Apellido'
                            style={styles.nomYape}
                            placeholderTextColor="#535353"
                            keyboardType='tedefaultxt'
                            maxLength={4} // Limitar a 4 dígitos
                        />

                    </View>
                    {/* DIRECCION DE FACTURACIÓN */}
                    <Text style={styles.facturacionText}>
                        Direccion de facturacion
                    </Text>
                    <TextInput
                        placeholder='Dirección de facturación'
                        style={styles.facturacion}
                        placeholderTextColor="#535353"
                    />

                    {/* LOCALIDAD */}
                    <Text style={styles.facturacionText}>
                        Localidad
                    </Text>
                    <TextInput
                        placeholder='Localidad'
                        style={styles.facturacion}
                        placeholderTextColor="#535353"
                    />

                    {/* CODIGO POSTAL */}
                    <Text style={styles.facturacionText}>
                        Codigo postal
                    </Text>
                    <TextInput
                        placeholder='Codigo postal'
                        style={styles.facturacion}
                        placeholderTextColor="#535353"
                        keyboardType='numeric'
                        maxLength={4} // Limitar a 4 dígitos
                    />

                    {/* PAISES */}
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

                    <TouchableOpacity onPress={realizarCompra}>
                        <Text style={styles.comprar}> Realizar compra</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
                <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => setModalVisible(false)}
>
    <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
            <Text style={styles.modalText}>La compra ha sido realizada con éxito.</Text>
            <Text style={styles.inspirationalText}>
                ¡Felicitaciones! Estás un paso más cerca de dominar la programación. ¡Aprovecha al máximo tus nuevos cursos!
            </Text>
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
            >
                <Text style={styles.closeButtonText}>Volver al menú</Text>
            </TouchableOpacity>
        </View>
    </View>
</Modal>


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

    // NOMBRE Y APELLIDO 
    persona: {
        flexDirection: 'row', // Alinear elementos en fila
        justifyContent: 'space-between', // Espacio entre los elementos
        width: 20, // Ancho del contenedor
        marginVertical: 10, // Espaciado vertical
    },

    nomYape: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,

        borderRadius: 9,
        height: 40,
        width: 155,
        color: 'white',
        backgroundColor: 'transparent',
        marginRight: 10,
    },
    nomApe: {
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white',
        marginBottom: -15,
    },



    // DIRECCION DE FACTURACIÓN
    facturacionText: {
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white',
        marginBottom: -15,
    },
    facturacion: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        width: '80%',
        margingTop: 30,
        borderRadius: 9,
        marginVertical: 28,
        height: 40,
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
    // BOTON COMPRAR
    comprar: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        width: '80%',
        borderRadius: 9,
        marginVertical: 40,
        height: 40,
        width: 320,
        backgroundColor: '#03DAC6',
        textAlign: 'center', // Centrar texto
        fontSize: 16,
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

    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        width: '90%',
        height: '50%', // Aumentar la altura
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center', // Centrar verticalmente
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    inspirationalText: {
        fontSize: 18, // Aumentar el tamaño de la fuente
        fontWeight: '600', // Hacer el texto un poco más grueso
        color: '#555', // Color más suave
        marginBottom: 30,
        textAlign: 'center',
        fontStyle: 'italic', // Texto en cursiva
        paddingHorizontal: 10, // Añadir un poco de padding
    },
    closeButton: {
        backgroundColor: '#03DAC6',
        padding: 12,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    


});