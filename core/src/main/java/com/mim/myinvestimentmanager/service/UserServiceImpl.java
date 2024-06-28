package com.mim.myinvestimentmanager.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mim.myinvestimentmanager.model.User;
import com.mim.myinvestimentmanager.repository.UserRepository;
import com.mim.myinvestimentmanager.service.interfaces.UserService;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> list() {
        return this.userRepository.findAll();
    }

    @Override
    public User searchById(Long id) {
        Optional<User> user = this.userRepository.findById(id);

        if (!user.isPresent()) {
            throw new EntityNotFoundException("O USUÁRIO COM ID " + id + " NÃO FOI ENCONTRADO.");
        }

        return user.get();
    }

    @Override
    public User update(User object) {
        User existingUser = this.searchById(object.getId());

        if (Objects.nonNull(existingUser)) {
            BeanUtils.copyProperties(object, existingUser, "id", "password");

            return this.userRepository.save(existingUser);
        }

        return null;
    }

    @Override
    public void deleteById(Long id) {
        this.searchById(id);
        this.userRepository.deleteById(id);
    }

    @Override
    public List<User> saveAll(List<User> list) {
        return this.userRepository.saveAll(list);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User authenticate(String email, String password) {
        User user = findByEmail(email);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }

        return null;
    }

    @Override
    public User findByIdAndReturnNameAndEmail(Long id) {
        Optional<User> userOptional = userRepository.findById(id);
        return userOptional.map(user -> {
            User userProjection = new User();
            userProjection.setName(user.getName());
            userProjection.setEmail(user.getEmail());
            return userProjection;
        }).orElse(null);
    }

    @Override
    public User updateUserDetails(User user, String oldPassword, String newPassword) {
    User existingUser = this.searchById(user.getId());

    if (Objects.nonNull(existingUser)) {
        if (oldPassword != null && !existingUser.authenticate(oldPassword)) {
            throw new IllegalArgumentException("Senha antiga incorreta.");
        }

        // Atualiza apenas se a nova senha não for nula e diferente da senha antiga
        if (newPassword != null && !newPassword.equals(existingUser.getPassword())) {
            existingUser.setPassword(newPassword);
        }

        // Atualiza nome e email
        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());

        return this.userRepository.save(existingUser);
    }

    return null;
}


}
