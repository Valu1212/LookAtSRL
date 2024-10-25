import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const [isVibrationEnabled, setIsVibrationEnabled] = useState(true);
  const [areNotificationsEnabled, setAreNotificationsEnabled] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleVibration = () => setIsVibrationEnabled(prevState => !prevState);
  const toggleNotifications = () => setAreNotificationsEnabled(prevState => !prevState);

  const handleLogout = () => {
    alert('Sesión cerrada');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>LookAt</Text>

        {isLoggedIn ? (
          <View style={styles.loginSection}>
            <Ionicons name="person-circle" size={60} color="#03DAC6" />
            <Text style={styles.userText}>Usuario Logueado</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => alert('Editar perfil')}>
              <Text style={styles.editButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.loginSection}>
            <TextInput style={styles.input} placeholder="Usuario" placeholderTextColor="#666" />
            <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry placeholderTextColor="#666" />
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
        )}

        <Text style={styles.sectionTitle}>Ajustes Generales</Text>
        <View style={styles.option}>
          <Ionicons name="moon-outline" size={24} color="#03DAC6" />
          <Text style={styles.optionText}>Modo Oscuro</Text>
          <Switch
            value={true} // Modo oscuro siempre activo
            disabled // Desactivar el switch
            thumbColor="#03DAC6"
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </View>

        <Text style={styles.sectionTitle}>Notificaciones</Text>
        <View style={styles.option}>
          <Ionicons name="notifications-outline" size={24} color={areNotificationsEnabled ? "#03DAC6" : "#666"} />
          <Text style={styles.optionText}>Notificaciones</Text>
          <Switch
            value={areNotificationsEnabled}
            onValueChange={toggleNotifications}
            thumbColor={areNotificationsEnabled ? "#03DAC6" : "#f4f3f4"}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </View>

        <Text style={styles.sectionTitle}>Accesibilidad</Text>
        <View style={styles.option}>
          <MaterialIcons name="accessibility-new" size={24} color="#666" />
          <Text style={styles.optionText}>Vibración</Text>
          <Switch
            value={isVibrationEnabled}
            onValueChange={toggleVibration}
            thumbColor={isVibrationEnabled ? "#03DAC6" : "#f4f3f4"}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={() => alert('Cambios guardados')}>
          <Text style={styles.saveButtonText}>Guardar Cambios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.creditsButton} onPress={() => {}}>
          <Text style={styles.creditsButtonText}>Ver Créditos</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 30,
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: 18,
    color: "#bbbbbb",
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "600",
  },
  loginSection: {
    backgroundColor: "#1C1C1C",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  userText: {
    color: "#ffffff",
    marginLeft: 15,
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#333333",
    color: "#ffffff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#03DAC6",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#03DAC6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  editButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1C1C1C",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: "#ffffff",
    flex: 1,
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: "#03DAC6",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  creditsButton: {
    backgroundColor: "#03DAC6",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  creditsButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#03DAC6",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SettingsScreen;
