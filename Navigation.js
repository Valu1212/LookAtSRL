import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useColorScheme } from "react-native"; 

// Pantallas
import HomeScreen from "./screens/HomeScreen";
import CourseScreen from "./screens/CourseScreen";
import Course1Screen from "./screens/Course1Screen";
import SettingsScreen from "./screens/SettingsScreen";
import CourseCpp from "./screens/CourseCpp";
import CourseJav from "./screens/CourseJav";
import Creditos from "./screens/Creditos";
import Perfil from "./screens/Perfil";
import Pagos from "./screens/Pagos";
import StackScreen from "./components/StackScreen";
import Stack2Screen from "./components/Stack2Screen";
import Stack3Screen from "./components/Stack3Screen";
import Stack4Screen from "./components/Stack4Screen";
import Stack5Screen from "./components/Stack5Screen";
import Stack6Screen from "./components/Stack6Screen";
import InicioSesion from "./screens/InicioSesion";
import CrearCuenta from "./screens/CrearCuenta";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: '#000' }, // Encabezado negro
                headerTintColor: '#ffffff', // Color del texto del encabezado
            }}

            >
            <HomeStackNavigator.Screen
                name="InicioSesion"
                component={InicioSesion}
            /> 

            <HomeStackNavigator.Screen
                name="CrearCuenta"
                component={CrearCuenta}
            /> 

            <HomeStackNavigator.Screen
                name="Inicio"
                component={HomeScreen}
            /> 

            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
 
            <HomeStackNavigator.Screen
                name="Stack2"
                component={Stack2Screen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />

            <HomeStackNavigator.Screen
                name="Stack3"
                component={Stack3Screen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />

            <HomeStackNavigator.Screen
                name="Stack4"
                component={Stack4Screen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />

            <HomeStackNavigator.Screen
                name="Stack5"
                component={Stack5Screen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />

            <HomeStackNavigator.Screen
                name="Stack6"
                component={Stack6Screen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />

            <HomeStackNavigator.Screen
                name="Pagos"
                component={Pagos}
                options={{
                    headerBackTitleVisible: false,
                }}
            />  
        </HomeStackNavigator.Navigator>   
    );
}

// Crear una pila para `CourseScreen`
const CourseStackNavigator = createNativeStackNavigator();

function CourseStack() {
    return (
        <CourseStackNavigator.Navigator
            initialRouteName="Course1"
        >
            <CourseStackNavigator.Screen 
                name="Course1" 
                component={Course1Screen} 
                options={{
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#000' }, // Encabezado negro
                    headerTintColor: '#ffffff', // Color del texto del encabezado
                }}
            />
            <CourseStackNavigator.Screen 
                name="Course" 
                component={CourseScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#ffffff',
                }}
            />    

            <CourseStackNavigator.Screen 
                name="CourseCpp" 
                component={CourseCpp}
                options={{
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#ffffff',
                }}
            />

            <CourseStackNavigator.Screen 
                name="CourseJav" 
                component={CourseJav}
                options={{
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#ffffff',
                }}
            />
        </CourseStackNavigator.Navigator>
    );
}

const SettingsStackNavigator = createNativeStackNavigator();

function SettingsStack() {
    return (
        <SettingsStackNavigator.Navigator>
            <SettingsStackNavigator.Screen 
                name="SettingsScreen" 
                component={SettingsScreen} 
                options={{
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#ffffff',
                }}
            />

            <SettingsStackNavigator.Screen 
                name="Perfil" 
                component={Perfil} 
                options={{
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#ffffff',
                }}
            />
    
            <SettingsStackNavigator.Screen 
                name="Creditos" 
                component={Creditos} 
                options={{
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: '#000' },
                    headerTintColor: '#ffffff',
                }}
            />
        </SettingsStackNavigator.Navigator>
    );
}

// Mantener la navegación por pestañas
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#03DAC6",  // Color de la pestaña activa
                tabBarInactiveTintColor: "#b0b0b0", // Color de la pestaña inactiva
                tabBarStyle: {
                    backgroundColor: "#000",  // Fondo del menú de pestañas (negro)
                    borderTopColor: "#000",   // Color del borde superior del menú de pestañas
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={MyStack}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                    headerShown: false,  
                }}
            />
            <Tab.Screen
                name="Course"
                component={CourseStack}
                options={{
                    tabBarLabel: 'Mis Cursos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book-education" color={color} size={30} />
                    ),
                    headerShown: false,  
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsStack}
                options={{
                    tabBarLabel: 'Ajustes',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="brightness-5" color={color} size={30} />
                    ),
                    headerShown: false,  
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    const colorScheme = useColorScheme(); // Usar useColorScheme para obtener el modo actual

    return (
        <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
             <MyTabs />
        </NavigationContainer>
    );
}
