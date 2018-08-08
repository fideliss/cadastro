import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { 
    salvaUsuario,
    changeNome,
    changeEmail,
    changeSenha
} from './usuarioActions'

class UsuarioForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { salvaUsuario, nome, email, senha } = this.props
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-1">Nome</label>
                    <div className="col-sm-4">
                        <input className="form-control" id="nome" placeholder="Nome" value={this.props.nome}
                            onChange={this.props.changeNome} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-1">E-mail</label>
                    <div className="col-sm-4">
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" 
                            value={this.props.email} onChange={this.props.changeEmail} placeholder="E-mail" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-1">Senha</label>
                    <div className="col-sm-4">
                        <input type="senha" className="form-control" id="senha" placeholder="Senha"
                            value={this.props.senha} onChange={this.props.changeSenha} />
                    </div>
                </div>
                <div className="container">
                    <button onClick={() => salvaUsuario(nome, email, senha)} 
                        className="btn btn-primary">Salvar</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({ 
    nome: state.nome, 
    email: state.email, 
    senha: state.senha 
})
const mapDispatchToProps = dispatch => bindActionCreators({ 
    salvaUsuario, 
    changeNome, 
    changeEmail, 
    changeSenha 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UsuarioForm)