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
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User save(User object) {
        return this.userRepository.save(object);
    }

    @Override
    public List<User> list() {
        return this.userRepository.findAll();
    }

    @Override
    public User searchById(Long id) {
        Optional<User> user = this.userRepository.findById(id);

        if (!user.isPresent()) {
            throw new EntityNotFoundException("O USUARIO COM ID " + id + " NÃO FOI ENCONTRADO.");
        }

        return user.get();
    }

    @Override
    public User update(User object) {
        User usuario = this.searchById(object.getId());

        if (Objects.nonNull(object)) {
            BeanUtils.copyProperties(object, usuario);
            
            this.userRepository.save(object);
        }

        return object;
    }

    @Override
    public void deleteById(Long id) {
        this.searchById(id);

        this.userRepository.deleteById(id);
    }
    
}
