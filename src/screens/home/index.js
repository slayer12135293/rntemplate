import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import SplashScreen from 'react-native-splash-screen'
import globalStyle from '../../assets/globalStyles'
import { useDispatch } from 'react-redux'
import * as actions from '../../actions/loginActions'

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        SplashScreen.hide()
    }, [])
    return (
        <View style={globalStyle.container}>
            <Text>This is home Screen</Text>
            <Button
                onPress={() => navigation.navigate('Setting')}
                title="Go to setting"                
            />
            <Button title="Log out" 
                containerStyle={{  marginTop:100, width:'98%' }}
                onPress={()=>dispatch(actions.logout())}
            />
        </View>
    )
}

export default HomeScreen
