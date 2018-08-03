package com.cadastro.web.rest;

import com.cadastro.dto.UsuarioDTO;
import com.cadastro.entity.Usuario;
import com.cadastro.util.ResponseUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/cadastro")
public class UsuarioResource {

    @GetMapping("/")
    public List<UsuarioDTO> listaUsuarios() {
        List<UsuarioDTO> usuariosDTOS = new ArrayList<UsuarioDTO>();

        UsuarioDTO usuario = new UsuarioDTO();
        usuario.setNome("Usuário teste");
        usuario.setEmail("Email teste");
        usuario.setSenha("Senha criptografada");

        usuariosDTOS.add(usuario);

        return usuariosDTOS;
    }

}
