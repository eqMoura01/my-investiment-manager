package com.mim.myinvestimentmanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mim.myinvestimentmanager.model.Stock;
import com.mim.myinvestimentmanager.service.interfaces.StockService;

@RestController
@RequestMapping("/stock")
public class StockController {
    
    @Autowired
    private StockService stockService;

    @PostMapping
    public ResponseEntity<Stock> save(@RequestBody Stock object){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.stockService.save(object));
    }

    @GetMapping
    public ResponseEntity<List<Stock>> listAll(){
        return ResponseEntity.ok().body(this.stockService.list());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Stock> findById(@PathVariable Long id){
        return ResponseEntity.ok().body(this.stockService.searchById(id));
    }

    @PutMapping
    public ResponseEntity<Stock> update(@RequestBody Stock object) {
        return ResponseEntity.ok().body(this.stockService.update(object));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id){
        this.stockService.deleteById(id);

        return ResponseEntity.ok().build();
    }

}
