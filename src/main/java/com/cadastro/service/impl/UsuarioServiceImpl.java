package com.cadastro.service.impl;

import com.cadastro.entity.Usuario;
import com.cadastro.repository.UsuarioRepository;
import com.cadastro.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario buscaPeloNome(String nome) {
        return this.usuarioRepository.findByNome(nome);
    }

    public Usuario buscaPeloEmail(String email) {
        return this.usuarioRepository.findByEmail(email);
    }

    public List<Usuario> buscaTodos() {
        return this.usuarioRepository.findAll();
    }

    public Usuario buscaPeloId(Long id) {
        return this.usuarioRepository.findOne(id);
    }

    public void salvaOuAltera(Usuario usuario) {
        this.usuarioRepository.save(usuario);
    }

    public void deleta(Long id) {
        this.usuarioRepository.delete(id);
    }

    public Boolean existe(Long id) {
        return this.usuarioRepository.exists(id);
    }

}
