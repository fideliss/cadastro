import React from 'react'

export default props => (
    <form>
        <div className="form-group">
            <label>Nome</label>
            <input className="form-control" id="nome" placeholder="Nome" value={props.nome}
                onChange={props.onChangeNome} />
        </div>
        <div className="form-group">
            <label>E-mail</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" 
                value={props.email} onChange={props.onChangeEmail} placeholder="E-mail" />
        </div>
        <div className="form-group">
            <label>Senha</label>
            <input type="senha" className="form-control" id="senha" placeholder="Senha"
                value={props.senha} onChange={props.onChangeSenha} />
        </div>
        <button onClick={props.onClickSalvar} className="btn btn-primary">Salvar</button>
    </form>
)