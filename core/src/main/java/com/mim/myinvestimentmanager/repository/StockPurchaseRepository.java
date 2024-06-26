package com.mim.myinvestimentmanager.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mim.myinvestimentmanager.model.StockPurchase;

public interface StockPurchaseRepository extends JpaRepository<StockPurchase, Long> {
    List<StockPurchase> findByUserId(Long userId);
    Optional<StockPurchase> findByIdAndUserId(Long id, Long userId);
}
