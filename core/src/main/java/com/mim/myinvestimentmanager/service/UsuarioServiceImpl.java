package com.mim.myinvestimentmanager.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mim.myinvestimentmanager.model.Usuario;
import com.mim.myinvestimentmanager.repository.UsuarioRepository;
import com.mim.myinvestimentmanager.service.interfaces.UsuarioService;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UsuarioServiceImpl implements UsuarioService{

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public Usuario save(Usuario object) {
        return this.usuarioRepository.save(object);
    }

    @Override
    public List<Usuario> list() {
        return this.usuarioRepository.findAll();
    }

    @Override
    public Usuario searchById(Long id) {
        Optional<Usuario> usuario = this.usuarioRepository.findById(id);

        if (!usuario.isPresent()) {
            throw new EntityNotFoundException("O USUARIO COM ID " + id + " NÃO FOI ENCONTRADO.");
        }

        return usuario.get();
    }

    @Override
    public Usuario update(Usuario object) {
        Usuario usuario = this.searchById(object.getId());

        if (Objects.nonNull(object)) {
            BeanUtils.copyProperties(object, usuario);
            
            this.usuarioRepository.save(object);
        }

        return object;
    }

    @Override
    public void deleteById(Long id) {
        this.searchById(id);

        this.usuarioRepository.deleteById(id);
    }
    
}
