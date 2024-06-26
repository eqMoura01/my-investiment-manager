package com.mim.myinvestimentmanager.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mim.myinvestimentmanager.model.Stock;
import com.mim.myinvestimentmanager.repository.StockRepository;
import com.mim.myinvestimentmanager.service.interfaces.StockService;

import jakarta.persistence.EntityNotFoundException;

@Service
public class StockServiceImpl implements StockService {

    @Autowired
    private StockRepository stockRepository;

    @Override
    public Stock save(Stock object) {
        return this.stockRepository.save(object);
    }

    @Override
    public List<Stock> list() {
        return this.stockRepository.findAll();
    }

    @Override
    public Stock searchById(Long id) {
        Optional<Stock> stock = this.stockRepository.findById(id);

        if (!stock.isPresent()) {
            throw new EntityNotFoundException("A AÇÃO COM ID " + id + " NÃO FOI ENCONTRADA.");
        }

        return stock.get();
    }

    @Override
    public Stock update(Stock object) {
        Stock stock = this.searchById(object.getId());

        if (Objects.nonNull(object)) {
            BeanUtils.copyProperties(object, stock);

            this.stockRepository.save(object);
        }

        return object;
    }

    @Override
    public void deleteById(Long id) {
        this.searchById(id);

        this.stockRepository.deleteById(id);
    }

    @Override
    public List<Stock> saveAll(List<Stock> list) {

        List<Stock> validStocks = new ArrayList<>();
        for (Stock stock : list) {
            if (!stock.getStock().endsWith("F")) {
                validStocks.add(stock);
            }
        }

        return this.stockRepository.saveAll(validStocks);
    }

    

}
