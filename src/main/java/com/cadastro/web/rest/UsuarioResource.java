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

@CrossOrigin(origins = "http://localhost:8081")
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
        if (this.usuarioService.buscaPeloEmail(usuarioDTO.getEmail()) != null) {
            String erro = "Já foi cadastrado um usuário com o e-mail informado.";
            response.setErrors(new ArrayList<String>());
            response.getErrors().add(erro);
        } else {
            Usuario usuario = new Usuario();
            usuario.setNome(usuarioDTO.getNome());
            usuario.setEmail(usuarioDTO.getEmail());
            usuario.setSenha(usuarioDTO.getSenha());

            this.usuarioService.salvaOuAltera(usuario);

            response.setData(usuarioDTO);
        }
        return response;
    }

    @PutMapping(value = "/{id}")
    public ResponseUtil<UsuarioDTO> update(@PathVariable Long id, @RequestBody UsuarioDTO usuarioDTO) {
        ResponseUtil<UsuarioDTO> response = new ResponseUtil<UsuarioDTO>();
        Usuario usuario = this.usuarioService.buscaPeloId(id);

        if (usuario != null) {
            usuario.setNome(usuarioDTO.getNome());
            usuario.setEmail(usuarioDTO.getEmail());
            usuario.setSenha(usuarioDTO.getSenha());
            this.usuarioService.salvaOuAltera(usuario);
            response.setData(usuarioDTO);
        } else {
            response.setErrors(new ArrayList<String>());
            String erro = "Não foi encontrado um usuário com o id: " + id;
            response.getErrors().add(erro);
        }

        return response;
    }

    @DeleteMapping(value = "/{id}")
    public ResponseUtil<String> delete(@PathVariable Long id) {
        ResponseUtil<String> response = new ResponseUtil<String>();

        if (this.usuarioService.existe(id)) {
            this.usuarioService.deleta(id);
            response.setData("Usuário deletado.");
        } else {
            response.setErrors(new ArrayList<String>());
            String erro = "Não foi encontrado um usuário com o id: " + id;
            response.getErrors().add(erro);
        }

        return response;
    }

}
