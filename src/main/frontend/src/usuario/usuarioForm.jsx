import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class UsuarioForm extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" id="nome" placeholder="Nome" value={this.props.nome} />
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input type="senha" className="form-control" id="senha" placeholder="senha" />
                </div>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    nome: state.nome,
    email: state.email,
    senha: state.senha
})

export default connect(mapStateToProps)(UsuarioForm)