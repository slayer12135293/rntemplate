import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Header } from 'react-native-elements'
import MapView from 'react-native-maps'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
})
const SettingScreen = ({ navigation }) => {
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
                centerComponent={{ text: 'Setting', style: { color: '#fff' } }}
                containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'space-around',
                }}
            />
            <Text>This is setting Screen</Text>

            <MapView
                style={styles.map}
                initialRegion={{
                    longitudeDelta: 0.5,
                    latitudeDelta: 0.5,
                    latitude: 59.3210473,
                    longitude: 18.0717866,
                }}
            />
        </View>
    )
}

export default SettingScreen
