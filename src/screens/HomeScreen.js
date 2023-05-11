import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button,Image } from 'react-native'
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
                    <Image
                    source={{
                        uri:'https://img.icons8.com/?size=512&id=2445&format=png'
                    }}
                    style={styles.logOutImage}
                     />
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
    },
    logOutImage: {
        width:25,
        height:25,
        marginRight:10
    }
})