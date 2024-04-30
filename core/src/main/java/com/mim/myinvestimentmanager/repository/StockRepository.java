package com.mim.myinvestimentmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mim.myinvestimentmanager.model.Stock;

@Repository
public interface StockRepository  extends JpaRepository<Stock, Long>{
    
}
