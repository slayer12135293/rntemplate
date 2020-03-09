import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer'

import { Icon, Text, Button } from 'react-native-elements'
import colors  from '../constants/colors'
import VersionNumber from 'react-native-version-number'
import { useSelector, useDispatch } from 'react-redux'

import * as actions from '../actions/loginActions'

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
    header: {
        alignItems: 'center',
        justifyContent:'center',
        width:'100%',
        flex:1,
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
        case 'Logout':
            return (<Icon
                name='logout'
                type='material-community'
                size={24}
                color={colors.YELLOW}
            />)
        default:
            return(<Icon
                name='cloud'
                type='material'
                size={24}
                color={colors.YELLOW}
            />)
    }
}

const DrawerContent = ({ state, navigation }) => {
    const { userName } = useSelector(state => state.login)
    const dispatch = useDispatch()
    return (
        <>              
            <DrawerContentScrollView >
                <View style={styles.header}>    
                    <Image
                        source={{ uri: 'https://www.kindpng.com/picc/m/176-1763273_homer-simpson-bebendo-png-transparent-png.png' }}
                        style={{ width: 200, height: 200 }}
                    />          
                    <Text >
                        {userName}
                    </Text>
                </View>
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
                <DrawerItem
                    label="Logout"
                    icon={()=>iconMapper('Logout')}  
                    onPress={()=>dispatch(actions.logout())}          
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
}

export default DrawerContent
