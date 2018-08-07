import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import UsuarioForm from './usuarioForm'

const URL = 'http://localhost:8080/api/cadastro/'

export default class Usuario extends Component {
    constructor(props) {
        super(props)
        this.state = { nome: '', email: '', senha: '', list:[] }

        this.onChangeNome = this.onChangeNome.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangeSenha = this.onChangeSenha.bind(this)
        this.salvaUsuario = this.salvaUsuario.bind(this)
    }

    onChangeNome(e) {
        this.setState({ ...this.state, nome: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ ...this.state, email: e.target.value })
    }

    onChangeSenha(e) {
        this.setState({ ...this.state, senha: e.target.value })
    }

    salvaUsuario() {
        console.log(this.state.nome + this.state.email + this.state.senha)
    }

    render() {
        return (
            <div>
                <PageHeader />
                <UsuarioForm 
                    nome={this.state.nome} 
                    email={this.state.email} 
                    senha={this.state.senha} 
                    onChangeNome={this.onChangeNome} 
                    onChangeEmail={this.onChangeEmail} 
                    onChangeSenha={this.onChangeSenha} 
                    onClickSalvar={this.salvaUsuario} />
            </div>
        )
    }
}