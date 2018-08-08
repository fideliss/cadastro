import axios from 'axios'

const URL = 'http://localhost:8080/api/cadastro/'

export const salvaUsuario = (nome = '', email = '', senha = '') => {
    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    }

    return dispatch => {
        axios.post(URL, usuario)
            .then(resp => dispatch(clear()))
    }
}

export const changeNome = event => ({
    type: 'NOME_CHANGED',
    payload: event.target.value
})

export const changeEmail = event => ({
    type: 'EMAIL_CHANGED',
    payload: event.target.value
})

export const changeSenha = event => ({
    type: 'SENHA_CHANGED',
    payload: event.target.value
})

export const clear= () => {
    return [{ type: 'USUARIO_CLEAR' }]
}