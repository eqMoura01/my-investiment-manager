package com.mim.myinvestimentmanager.service.interfaces;

import com.mim.myinvestimentmanager.model.User;

public interface UserService extends DefaultCrud<User>{
    User findByEmail(String email); // Método para buscar usuário por e-mail
    User authenticate(String email, String password);
    User findByIdAndReturnNameAndEmail(Long id);
    
}
