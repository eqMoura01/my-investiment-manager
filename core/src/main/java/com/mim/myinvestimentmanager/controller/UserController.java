package com.mim.myinvestimentmanager.controller;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mim.myinvestimentmanager.model.User;
import com.mim.myinvestimentmanager.service.interfaces.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<User> signUp(@RequestBody User user) {
        System.out.println("Dados recebidos no signup: " + user.toString());
        User createdUser = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginUser) {
        User user = userService.findByEmail(loginUser.getEmail());

        if (user == null || !user.authenticate(loginUser.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        return ResponseEntity.ok(Collections.singletonMap("userId", user.getId()));
    }

    @PostMapping("/getuserinfo")
    public ResponseEntity<?> getUserInfoById(@RequestBody Long userId) {
        User user = userService.findByIdAndReturnNameAndEmail(userId);

        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(user);
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody User user) {
        try {
            System.out.println("Dados recebidos para atualização: " + user.toString());

            // Recupere e valide as senhas
            String oldPassword = user.getPassword();
            String newPassword = user.getNewPassword();

            // Remova as senhas do objeto User para evitar persistência não intencional no
            // banco de dados
            user.setPassword(null);
            user.setNewPassword(null);

            // Chame o serviço para atualizar o usuário
            User updatedUser = userService.updateUserDetails(user, oldPassword, newPassword);

            if (updatedUser != null) {
                return ResponseEntity.ok(updatedUser);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Erro ao atualizar dados do usuário: " + e.getMessage());
        }
    }

}
