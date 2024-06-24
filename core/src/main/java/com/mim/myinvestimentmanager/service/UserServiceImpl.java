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
            BeanUtils.copyProperties(object, existingUser, "id"); // Copia todas as propriedades exceto o ID
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
}
