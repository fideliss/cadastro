import React from 'react'

export default props => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <i className="fa fa-user"></i> Cadastro de Usuário
                </a>
            </div>

            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a href="#/cadastro">Cadastro</a></li>
                </ul>
            </div>
        </div>
    </nav>
)