import * as actionTypes from '../actionTypes/loginTypes'
const initState = {
    userName: 'HomerJ',
    password: 'Qwertyui',
    token:null,
    isLoading:false,
    isloggedIn: false,
    error:null,
    loading:false,
    user: null,
}

const loginReducer = (state = initState, { type, payload } ) =>{
    switch(type) {
        case actionTypes.LOADING:
            return{
                ...state,
                isLoading: payload.loading,
            }
        case actionTypes.ERROR:
            return{
                ...state,
                error: payload.error,
            }    
        case actionTypes.LOGIN: 
            return{
                ...state,
                isloggedIn:true,
                userName: payload.userName,
                token:payload.token,
                user:payload.user,
            }
        case actionTypes.LOGOUT: 
            return{
                ...state,
                isloggedIn:false,
                userName: '',
                token:'',
                user:'',
            }
        default:
            return state
    }
}

export default loginReducer
