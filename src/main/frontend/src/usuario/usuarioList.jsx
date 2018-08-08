import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const UsuarioList = props => {
    const itensTabela = () => {
        const list = props.list || []
        return list.map(usuario => (
            <tr>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td></td>
            </tr>
        ))
    }

    return (
        <div>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th className="tableActions">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {itensTabela()}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({ list: state.list })

export default connect(mapStateToProps)(UsuarioList)