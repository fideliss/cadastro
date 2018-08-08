import React from 'react'

const UsuarioList = props => {
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
                    <tr>
                        <td>Teste</td>
                        <td>teste@teste.com</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UsuarioList