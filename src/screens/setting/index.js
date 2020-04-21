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
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}

export default SettingScreen
