import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import SplashScreen from 'react-native-splash-screen'

const HomeScreen = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])
    return (
        <View>
            <Text>This is home Screen</Text>
        </View>
    )
}

export default HomeScreen
