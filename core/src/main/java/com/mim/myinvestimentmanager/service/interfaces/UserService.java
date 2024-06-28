package com.mim.myinvestimentmanager.service.interfaces;

import com.mim.myinvestimentmanager.model.User;

public interface UserService extends DefaultCrud<User> {
    User findByEmail(String email);
    User authenticate(String email, String password);
    User findByIdAndReturnNameAndEmail(Long id);
    User updateUserDetails(User user, String oldPassword, String newPassword); // Adicionando o novo parâmetro newPassword
}

