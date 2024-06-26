package com.mim.myinvestimentmanager.service.interfaces;

import java.util.List;

import com.mim.myinvestimentmanager.model.StockPurchase;

public interface StockPurchaseService {
    StockPurchase save(StockPurchase object);
    List<StockPurchase> listByUserId(Long userId);
    StockPurchase findByIdAndUserId(Long id, Long userId);
    StockPurchase update(StockPurchase object);
    void deleteByIdAndUserId(Long id, Long userId);
    List<StockPurchase> saveAll(List<StockPurchase> list);
}
