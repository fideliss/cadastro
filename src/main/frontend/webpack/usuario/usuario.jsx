import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UsuarioForm from './usuarioForm'
import UsuarioList from './usuarioList'

export default class Usuario extends Component {
    render() {
        return (
            <div>
                <UsuarioForm />
                <UsuarioList />
            </div>
        )
    }
}