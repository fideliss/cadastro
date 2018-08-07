import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import UsuarioForm from './usuarioForm'

export default class Usuario extends Component {
    constructor(props) {
        super(props)
        this.state = { nome: '', email: '', senha: '', list:[] }
    }

    render() {
        return (
            <div>
                <PageHeader />
                <UsuarioForm />
            </div>
        )
    }
}