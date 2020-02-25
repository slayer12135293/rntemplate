import React, { useEffect } from 'react'
import {
    View,
    StyleSheet,
    Dimensions, 
    Image,
    Text,
} from 'react-native'
import * as actions from '../../actions/loginActions'

import { Button, Icon, Input } from 'react-native-elements'

import { useSelector, useDispatch } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import whiteChoco from '../../assets/images/choco-wm.png'
import SplashScreen from 'react-native-splash-screen'

const window = Dimensions.get('window')

const LoginScreen = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])
    const dispatch = useDispatch()
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
                />
                <Button                    
                    title="login"
                    type="solid"
                    containerStyle= {{ width: '96%', marginTop:50 }}
                    onPress={() =>{console.log('fired'), dispatch(actions.login('asdfasdf','asdfasdf'))}}
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
        //paddingHorizontal: 10,
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
