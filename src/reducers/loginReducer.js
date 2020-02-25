import { LOGIN } from '../actionTypes/loginTypes'
const initState = {
    userName: 'HomerJ',
    password: 'qwertyui',
    token:null,
    isloggedIn: false,
    user: null,
}

const loginReducer = (state = initState, { type, payload } ) =>{
    switch(type) {
        case LOGIN: 
            return{
                ...state,
                isloggedIn:true,
                userName: payload.userName,
                token:payload.token,
                user:payload.user,
            }
        default:
            return state
    }
}

export default loginReducer
