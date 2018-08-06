package com.cadastro.web.rest;

import com.cadastro.dto.UsuarioDTO;
import com.cadastro.entity.Usuario;
import com.cadastro.service.UsuarioService;
import com.cadastro.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/cadastro")
public class UsuarioResource {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<UsuarioDTO> listaUsuarios() {
        List<UsuarioDTO> usuariosDTOS = new ArrayList<UsuarioDTO>();
        List<Usuario> usuarios = this.usuarioService.buscaTodos();


        if (usuarios != null && usuarios.size() > 0) {
            for (Usuario usuario : usuarios) {
                UsuarioDTO usuarioDTO = new UsuarioDTO();
                usuarioDTO.setNome(usuario.getNome());
                usuarioDTO.setEmail(usuario.getEmail());
                usuarioDTO.setSenha(usuario.getSenha());

                usuariosDTOS.add(usuarioDTO);
            }
        }

        return usuariosDTOS;
    }

    @PostMapping
    public ResponseUtil<UsuarioDTO> create(@Valid @RequestBody UsuarioDTO usuarioDTO) {
        ResponseUtil<UsuarioDTO> response = new ResponseUtil<UsuarioDTO>();

        Usuario usuario = new Usuario();
        usuario.setNome(usuarioDTO.getNome());
        usuario.setEmail(usuarioDTO.getEmail());
        usuario.setSenha(usuarioDTO.getSenha());

        this.usuarioService.salva(usuario);

        response.setData(usuarioDTO);
        return response;
    }

}
