package com.bridge.example.nutritiontrackerbackend.Controller;

import com.bridge.example.nutritiontrackerbackend.Entity.FoodEntry;
import com.bridge.example.nutritiontrackerbackend.FoodService.FoodService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/foodentry{userId}")

@CrossOrigin(origins = "http://localhost:5173")

public class FoodController {

    private final FoodService foodService;

    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }


    @PostMapping
    public ResponseEntity<FoodEntry> createFoodEntry(@PathVariable Long userId, @RequestBody FoodEntry newFoodEntry)
    {
        FoodEntry savedEntry = foodService.createFoodEntry(userId, newFoodEntry);
        return new ResponseEntity<>(savedEntry, HttpStatus.CREATED);
    }

    @GetMapping
    public List<FoodEntry> fetchFoodEntry() {
        return foodService.fetchFoodEntry();
    }
//    @GetMapping
//    public ResponseEntity<List<FoodEntry>> fetchFoodEntry() {
//        List<FoodEntry> entries = foodService.fetchFoodEntry();
//        return new ResponseEntity<>(entries, HttpStatus.OK);
//    }


}
