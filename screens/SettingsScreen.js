import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

export default function AccountSettings() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profilePicture}>
          <Text style={styles.initials}>VT</Text>
        </View>
        <Text style={styles.name}>Valentina Toledo</Text>
        <Text style={styles.email}>toledo.valentina@tecnica7.edu.ar</Text>
      </View>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Opciones de descarga</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Opciones de reproducción de video</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Seguridad de la cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePicture: {
    backgroundColor: '#ccc',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    fontSize: 24,
    color: '#000',
  },
  name: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
  email: {
    fontSize: 14,
    color: '#888',
  },
  option: {
    backgroundColor: '#ffff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  optionText: {
    color: '#000',
  },
});