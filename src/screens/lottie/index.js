import React, { useEffect }  from 'react'
import { View } from 'react-native'
import * as actions from '../../actions/loginActions'
import { Button } from 'react-native-elements'
import LottieView from 'lottie-react-native'
import owlie from '../../assets/lottie/owlie.json'
import globalStyles from '../../assets/globalStyles'

const LottieScreen = ({ navigation }) => {
    
    return (
        <View style={globalStyles.container}>
            <View style={{ width:'70%', height:400 }}>
                <LottieView
                    source={owlie}
                    autoPlay
                    loop
                />
            </View>
            
            <Button onPress={() => navigation.navigate('Home')} title="home" /> 
        </View>
    )
}

export default LottieScreen
