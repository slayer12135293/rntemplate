import * as actionTypes from '../actionTypes/loginTypes'
import storageKeys from '../constants/storageKeys'
import SecureStorage from 'react-native-secure-storage'
import secureStorageConfig from '../utils/secureStorageConfig'

const login = (userName, password) => async(dispatch) => {
    
    dispatch({
        type: actionTypes.LOADING,
        payload:{ loading:true },
    })

    if (userName == 'Homer' || password === 'Qwertyui') {

        await SecureStorage.setItem(storageKeys.USERNAME, userName, secureStorageConfig)
        await SecureStorage.setItem(storageKeys.PASSWORD, password, secureStorageConfig)

        dispatch({
            type: actionTypes.LOGIN,
            payload: { userName, token:'asdfasdf', user: { userName,password } },
        })

    } else {
        dispatch({
            type:actionTypes.ERROR,
            payload:{ error:'wrong password' },
        })
    }

    dispatch({
        type: actionTypes.LOADING,
        payload:{ loading:false },
    })   
}

const loginFromStorage = () => async(dispatch, getState) => {
    
    dispatch({
        type: actionTypes.LOADING,
        payload:{ loading:true },
    })
    const { isloggedIn } = getState().login
    if (isloggedIn) {
        dispatch(logout())
    }

    try {
        const storedUserName = await SecureStorage.getItem(storageKeys.USERNAME, secureStorageConfig)
        const storedPassword = await SecureStorage.getItem(storageKeys.PASSWORD, secureStorageConfig)
        if (storedUserName) {
            return dispatch(login(storedUserName, storedPassword))
        }
        
    } catch (error) {
        console.log('secure storage failure')
    }

    dispatch({
        type: actionTypes.LOADING,
        payload:{ loading:false },
    })
}

const logout = () => async (dispatch) => {
    dispatch({
        type: actionTypes.LOGOUT,
    })
    await SecureStorage.removeItem(storageKeys.USERNAME, secureStorageConfig)
    await SecureStorage.removeItem(storageKeys.PASSWORD, secureStorageConfig)
}

export { login, logout, loginFromStorage }
