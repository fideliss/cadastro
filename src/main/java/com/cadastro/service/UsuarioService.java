package com.cadastro.service;

import com.cadastro.entity.Usuario;

import java.util.List;

public interface UsuarioService {

    Usuario buscaPeloNome(String nome);

    Usuario buscaPeloEmail(String email);

    List<Usuario> buscaTodos();

    Usuario buscaPeloId(Long id);

    void salvaOuAltera(Usuario usuario);

    void deleta(Long id);

    Boolean existe(Long id);

}
