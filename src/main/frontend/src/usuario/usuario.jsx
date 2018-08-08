import React from 'react'

import PageHeader from '../template/pageHeader'
import UsuarioForm from './usuarioForm'
import UsuarioList from './usuarioList'

export default props => (
    <div>
        <PageHeader name="Cadastro" />
        <UsuarioForm />
        <UsuarioList />
    </div>
)