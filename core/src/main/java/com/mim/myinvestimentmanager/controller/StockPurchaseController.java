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

    @PostMapping
    public ResponseEntity<StockPurchase> save(@RequestBody StockPurchase object){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.stockPurchaseService.save(object));
    }

    @GetMapping
    public ResponseEntity<List<StockPurchase>> listAll(){
        return ResponseEntity.ok().body(this.stockPurchaseService.list());
    }

    @GetMapping("/{id}")
    public ResponseEntity<StockPurchase> findById(@PathVariable Long id){
        return ResponseEntity.ok().body(this.stockPurchaseService.searchById(id));
    }

    @PutMapping 
    public ResponseEntity<StockPurchase> update(@RequestBody StockPurchase object) {
        return ResponseEntity.ok().body(this.stockPurchaseService.update(object));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id){
        this.stockPurchaseService.deleteById(id);

        return ResponseEntity.ok().build();
    }

}
