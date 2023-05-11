import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, StackActions } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { auth } from '../config/firebase'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Button } from 'react-native'

const Stack = createNativeStackNavigator()
export default function App() {
<<<<<<< HEAD
=======
  
>>>>>>> f4a0426 (added a sign out button)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">

        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{
            title: "Login"
          }}
        />
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name='SignupScreen'
          component={SignupScreen}
          options={{
            title: "Signup"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
