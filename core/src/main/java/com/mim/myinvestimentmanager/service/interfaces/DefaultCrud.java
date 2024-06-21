package com.mim.myinvestimentmanager.service.interfaces;

import java.util.List;

public interface DefaultCrud<T> {
    T save(T object);

    List<T> list();
    
    T searchById(Long id);

    T update(T object);

    void deleteById(Long id);

    List<T> saveAll(List<T> list);
}
