import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Usuario from '../usuario/usuario'

export default props => (
    <Router history={hashHistory}>
        <Route path="/cadastro" component={Usuario} />
        <Redirect from="*" to="/cadastro" />
    </Router>
)