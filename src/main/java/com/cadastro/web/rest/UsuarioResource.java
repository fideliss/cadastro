package com.cadastro.web.rest;

import com.cadastro.dto.UsuarioDTO;
import com.cadastro.entity.Usuario;
import com.cadastro.service.UsuarioService;
import com.cadastro.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/cadastro")
public class UsuarioResource {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/")
    public List<UsuarioDTO> listaUsuarios() {
        List<UsuarioDTO> usuariosDTOS = new ArrayList<UsuarioDTO>();
//        List<Usuario> usuarios = this.usuarioService.buscaTodos();
//        Usuario usuario = this.usuarioService.buscaPeloNome("Fidelis");

        Usuario usuario = this.usuarioService.buscaPeloId(1L);

        UsuarioDTO usuarioDTO = new UsuarioDTO();
        if (usuario != null) {
            usuarioDTO.setNome(usuario.getNome());
            usuarioDTO.setEmail(usuario.getEmail());
            usuarioDTO.setSenha(usuario.getSenha());
        }

        usuariosDTOS.add(usuarioDTO);

        return usuariosDTOS;
    }

}
