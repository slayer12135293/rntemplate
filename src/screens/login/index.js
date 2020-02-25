import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    Dimensions, 
    Image,
    
} from 'react-native'
import * as actions from '../../actions/loginActions'

import { Button, Icon, Input,Text } from 'react-native-elements'

import { useSelector, useDispatch } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import whiteChoco from '../../assets/images/choco-wm.png'
import SplashScreen from 'react-native-splash-screen'
import colors from '../../constants/colors'

const window = Dimensions.get('window')

const LoginScreen = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])
    const dispatch = useDispatch()
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errorMsg, setErrorMsg ] = useState(null)

    const loginVerify = () => {
        var response = dispatch(actions.login(username, password))
        setErrorMsg(response)        
    }
    return(
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>            
            <View style={styles.container}>
                <Image source={whiteChoco} style={styles.logo} />
                <Input
                    placeholder='Username'
                    leftIcon={
                        <Icon
                            name='account'
                            type='material-community'
                            size={24}
                            color='#00aced'
                        />
                    }
                    onChangeText={username=> setUsername(username)}
                    
                />
                <Input
                    placeholder='Password'
                    leftIcon={
                        <Icon
                            name='key'
                            type='material-community'
                            size={24}
                            color='#00aced'
                        />
                    }
                    secureTextEntry
                    containerStyle={{ marginTop:10 }}
                    onChangeText={psw => setPassword(psw)}
                />
                <Text style={{ color:colors.RED, marginTop:10 }}>{errorMsg}</Text>
                <Button                    
                    title="login"
                    type="solid"
                    containerStyle= {{ width: '96%', marginTop:30 }}
                    onPress={()=>loginVerify()}
                    disabled= {username === '' || password === ''}
                />   

                {/* <Icon.Button
                    name="facebook"
                    backgroundColor="#3b5998"
                >
                    Login with Facebook
                </Icon.Button>   */}

            </View>
            
        </KeyboardAwareScrollView>
        
    )
}
const IMAGE_HEIGHT = window.width / 2
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        height: IMAGE_HEIGHT,
        resizeMode: 'contain',
        marginBottom: 20,
    },
})
export default LoginScreen
