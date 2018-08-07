import { combineReducers } from 'redux'
import usuarioReducer from '../usuario/usuarioReducer';

const rootReducer = combineReducers({
    usuario: usuarioReducer
})

export default usuarioReducer