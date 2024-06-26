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
    public StockPurchase save(StockPurchase stockPurchase) {
        return this.stockPurchaseRepository.save(stockPurchase);
    }

    @Override
    public List<StockPurchase> listByUserId(Long userId) {
        return this.stockPurchaseRepository.findByUserId(userId);
    }

    @Override
    public StockPurchase findByIdAndUserId(Long id, Long userId) {
        Optional<StockPurchase> optionalStockPurchase = this.stockPurchaseRepository.findByIdAndUserId(id, userId);
        if (optionalStockPurchase.isPresent()) {
            return optionalStockPurchase.get();
        }
        throw new EntityNotFoundException("Compra de ação não encontrada para o usuário com ID " + userId);
    }

    @Override
    public StockPurchase update(StockPurchase stockPurchase) {
        StockPurchase existingStockPurchase = this.findByIdAndUserId(stockPurchase.getId(), stockPurchase.getUserId());
        if (Objects.nonNull(existingStockPurchase)) {
            BeanUtils.copyProperties(stockPurchase, existingStockPurchase);
            this.stockPurchaseRepository.save(existingStockPurchase);
        }
        return existingStockPurchase;
    }

    @Override
    public void deleteByIdAndUserId(Long id, Long userId) {
        Optional<StockPurchase> optionalStockPurchase = this.stockPurchaseRepository.findByIdAndUserId(id, userId);
        if (optionalStockPurchase.isPresent()) {
            this.stockPurchaseRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Compra de ação não encontrada para o usuário com ID " + userId);
        }
    }

    @Override
    public List<StockPurchase> saveAll(List<StockPurchase> list) {
        return this.stockPurchaseRepository.saveAll(list);
    }
}
