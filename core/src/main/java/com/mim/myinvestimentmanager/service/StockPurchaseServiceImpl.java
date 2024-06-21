package com.mim.myinvestimentmanager.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mim.myinvestimentmanager.model.StockPurchase;
import com.mim.myinvestimentmanager.repository.StockPurchaseRepository;
import com.mim.myinvestimentmanager.service.interfaces.StockPurchaseService;

import jakarta.persistence.EntityNotFoundException;

@Service
public class StockPurchaseServiceImpl implements StockPurchaseService {

    @Autowired
    private StockPurchaseRepository stockPurchaseRepository;

    @Override
    public StockPurchase save(StockPurchase object) {
        return this.stockPurchaseRepository.save(object);
    }

    @Override
    public List<StockPurchase> list() {
        return this.stockPurchaseRepository.findAll();
    }

    @Override
    public StockPurchase searchById(Long id) {
        Optional<StockPurchase> stock = this.stockPurchaseRepository.findById(id);

        if (!stock.isPresent()) {
            throw new EntityNotFoundException("O USUARIO COM ID " + id + " NÃO FOI ENCONTRADO.");
        }

        return stock.get();
    }

    @Override
    public StockPurchase update(StockPurchase object) {
        StockPurchase stockPurchase = this.searchById(object.getId());

        if (Objects.nonNull(object)) {
            BeanUtils.copyProperties(object, stockPurchase);
            
            this.stockPurchaseRepository.save(object);
        }

        return object;
    }

    @Override
    public void deleteById(Long id) {
        this.searchById(id);

        this.stockPurchaseRepository.deleteById(id);
    }

    @Override
    public List<StockPurchase> saveAll(List<StockPurchase> list) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'saveAll'");
    }

}
