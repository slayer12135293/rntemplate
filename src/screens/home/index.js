import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Text, Button, Header } from 'react-native-elements'
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
        <View style={{ flex:1 }}>
            <Header
                statusBarProps={{ barStyle: 'light-content', translucent: true }}
                barStyle="light-content" 
                leftComponent={{ 
                    icon: 'menu', 
                    color: '#fff',
                    onPress: ()=> navigation.openDrawer(),
                }}
                centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'space-around',
                }}
            />
            <View style={globalStyle.container}>
            
                <Text>This is home Screen</Text>
                <Button
                    onPress={() => navigation.navigate('Setting')}
                    title="Go to settings"                
                />
                <Button title="Log out" 
                    containerStyle={{  marginTop:100, width:'98%' }}
                    onPress={()=>dispatch(actions.logout())}
                />
            </View>
        </View>
        
    )
}

export default HomeScreen
