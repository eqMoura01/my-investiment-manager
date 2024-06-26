package com.mim.myinvestimentmanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mim.myinvestimentmanager.model.StockPurchase;
import com.mim.myinvestimentmanager.service.interfaces.StockPurchaseService;

@RestController
@RequestMapping("/stockPurchase")
public class StockPurchaseController {
    
    @Autowired
    private StockPurchaseService stockPurchaseService;

    @PostMapping("/{userId}")
    public ResponseEntity<StockPurchase> save(@PathVariable Long userId, @RequestBody StockPurchase stockPurchase) {
        stockPurchase.setUserId(userId); // Define o ID do usuário na compra
        StockPurchase savedStockPurchase = stockPurchaseService.save(stockPurchase);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedStockPurchase);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<StockPurchase>> listByUserId(@PathVariable Long userId) {
        List<StockPurchase> stockPurchases = stockPurchaseService.listByUserId(userId);
        return ResponseEntity.ok().body(stockPurchases);
    }

    @GetMapping("/{userId}/{id}")
    public ResponseEntity<StockPurchase> findByIdAndUserId(@PathVariable Long userId, @PathVariable Long id) {
        StockPurchase stockPurchase = stockPurchaseService.findByIdAndUserId(id, userId);
        return ResponseEntity.ok().body(stockPurchase);
    }

    @PutMapping("/{userId}/{id}")
    public ResponseEntity<StockPurchase> update(@PathVariable Long userId, @RequestBody StockPurchase stockPurchase) {
        stockPurchase.setUserId(userId); // Define o ID do usuário na compra
        StockPurchase updatedStockPurchase = stockPurchaseService.update(stockPurchase);
        return ResponseEntity.ok().body(updatedStockPurchase);
    }

    @DeleteMapping("/{userId}/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long userId, @PathVariable Long id) {
        stockPurchaseService.deleteByIdAndUserId(id, userId);
        return ResponseEntity.ok().build();
    }
}
