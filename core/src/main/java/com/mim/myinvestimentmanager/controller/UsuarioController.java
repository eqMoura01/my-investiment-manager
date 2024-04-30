package com.mim.myinvestimentmanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mim.myinvestimentmanager.model.User;
import com.mim.myinvestimentmanager.service.interfaces.UserService;


@RestController
@RequestMapping("/user")
public class UsuarioController {
    
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<User> save(@RequestBody User object){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.userService.save(object));
    }

    @GetMapping("/listAll")
    public ResponseEntity<List<User>> listAll(){
        return ResponseEntity.ok().body(this.userService.list());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable Long id){
        return ResponseEntity.ok().body(this.userService.searchById(id));
    }

    @PutMapping
    public ResponseEntity<User> update(@RequestBody User object) {
        return ResponseEntity.ok().body(this.userService.update(object));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id){
        this.userService.deleteById(id);

        return ResponseEntity.ok().build();
    }
}
