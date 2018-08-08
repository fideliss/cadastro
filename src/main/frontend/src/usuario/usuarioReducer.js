const INITIAL_STATE = { nome: '', email: '', senha: '', list:[] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USUARIO_CLEAR':
            return { ...state, nome: '', email: '', senha: '' }
        case 'NOME_CHANGED':
            return { ...state, nome: action.payload }
        case 'EMAIL_CHANGED':
            return { ...state, email: action.payload }
        case 'SENHA_CHANGED':
            return { ...state, senha: action.payload }
        default: 
            return state
    }
}