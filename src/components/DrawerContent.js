import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer'

import { Icon, Text } from 'react-native-elements'
import colors  from '../constants/colors'
import VersionNumber from 'react-native-version-number'

const styles = StyleSheet.create({
    footer: {
        bottom:0, 
        alignItems: 'center',
        justifyContent:'center',
        width:'100%',
    },   
    footerText: {
        color:colors.GRAY,
    },
})

const iconMapper = (routeName) => {
    switch(routeName) {
        case 'Home':
            return (<Icon
                name='home'
                type='FontAwesome'
                size={24}
                color={colors.YELLOW}
            />)
        case 'Setting':
            return (<Icon
                name='settings'
                type='simple-line-icon'
                size={24}
                color={colors.YELLOW}
            />)
        case 'Help':
            return (<Icon
                name='help'
                type='material'
                size={24}
                color={colors.YELLOW}
            />)
        default:
            return(<Icon
                name='account'
                type='material'
                size={24}
                color={colors.YELLOW}
            />)
    }
}

const DrawerContent = ({ state, navigation }) => (
    <>  
        <DrawerContentScrollView >
            {
                state.routes.map((item,index) => {
                    return(
                        <DrawerItem
                            key={index}
                            label={item.name}
                            onPress={()=>navigation.navigate(item.name)}
                            icon={()=>iconMapper(item.name)}
                            style= {{ borderBottomWidth:1, borderBottomColor: colors.GRAY }}
        
                        />)
                })
            }
            <DrawerItem
                label="Help"
                icon={()=>iconMapper('Help')}
        
            />
            
        </DrawerContentScrollView>
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                App Version: {VersionNumber.appVersion} / 
                Build Version: {VersionNumber.buildVersion}
            </Text>
        </View>
        
    </>
  
)

export default DrawerContent
