import React from 'react'

export default props => (
    <form className="form-horizontal">
        <div className="form-group">
            <label className="control-label col-sm-1">Nome</label>
            <div className="col-sm-4">
                <input className="form-control" id="nome" placeholder="Nome" value={props.nome}
                    onChange={props.onChangeNome} />
            </div>
        </div>
        <div className="form-group">
            <label className="control-label col-sm-1">E-mail</label>
            <div className="col-sm-4">
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" 
                    value={props.email} onChange={props.onChangeEmail} placeholder="E-mail" />
            </div>
        </div>
        <div className="form-group">
            <label className="control-label col-sm-1">Senha</label>
            <div className="col-sm-4">
                <input type="senha" className="form-control" id="senha" placeholder="Senha"
                    value={props.senha} onChange={props.onChangeSenha} />
            </div>
        </div>
        <div className="container col-sm-1">
            <button onClick={props.onClickSalvar} className="btn btn-primary">Salvar</button>
        </div>
    </form>
)