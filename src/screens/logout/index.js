import React, { useEffect }  from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../actions/loginActions'
import { Text } from 'react-native-elements'

const LogoutScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.logout())
        //navigation.navigate('Login')
    }, [])
    
    return (
        <>
            <Text>logging out</Text>
        </>
    )
}

export default LogoutScreen
