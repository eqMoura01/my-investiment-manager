package com.mim.myinvestimentmanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mim.myinvestimentmanager.model.Usuario;
import com.mim.myinvestimentmanager.service.interfaces.UsuarioService;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/user")
public class UsuarioController {
    
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<Usuario> save(@RequestBody Usuario object){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.usuarioService.save(object));
    }

    @GetMapping("/listAll")
    public ResponseEntity<List<Usuario>> listAll(){
        return ResponseEntity.ok().body(this.usuarioService.list());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> findById(@PathVariable Long id){
        return ResponseEntity.ok().body(this.usuarioService.searchById(id));
    }

    @PutMapping
    public ResponseEntity<Usuario> update(@RequestBody Usuario object) {
        return ResponseEntity.ok().body(this.usuarioService.update(object));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id){
        this.usuarioService.deleteById(id);

        return ResponseEntity.ok().build();
    }
}
