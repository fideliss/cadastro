package com.cadastro.service;

import com.cadastro.entity.Usuario;

import java.util.List;

public interface UsuarioService {

    public Usuario buscaPeloNome(String nome);

    public List<Usuario> buscaTodos();

    public Usuario buscaPeloId(Long id);

    public void salva(Usuario usuario);

}
