import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button,image } from 'react-native'
import React, { useEffect, useState } from 'react'

// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { auth } from '../../config/firebase'



const HomeScreen = ({ navigation }) => {
    const user = auth.currentUser;
    const logOut = () => {
        auth.signOut();
        navigation.replace('LoginScreen')
      };

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={logOut}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            )

        }), [navigation]
    })

    return (
        <View style={styles.container}>
            <Text style={styles.smallText}>Welcome {user.email}!</Text>


        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    smallText: {
        color: "#000000"
    }
})