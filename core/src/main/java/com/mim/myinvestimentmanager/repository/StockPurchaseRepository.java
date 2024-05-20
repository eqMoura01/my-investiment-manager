package com.mim.myinvestimentmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mim.myinvestimentmanager.model.StockPurchase;

public interface StockPurchaseRepository extends JpaRepository<StockPurchase, Long> {
    
}
