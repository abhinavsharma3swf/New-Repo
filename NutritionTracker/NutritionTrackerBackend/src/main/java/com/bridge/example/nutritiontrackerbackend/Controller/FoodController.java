package com.bridge.example.nutritiontrackerbackend.Controller;

import com.bridge.example.nutritiontrackerbackend.Entity.FoodEntry;
import com.bridge.example.nutritiontrackerbackend.FoodService.FoodService;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/foodentry")

@CrossOrigin(origins = "http://localhost:5173")

public class FoodController {

    private final FoodService foodService;

    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }


    @PostMapping("/{userId}")
    public ResponseEntity<FoodEntry> createFoodEntry(@PathVariable Long userId, @RequestBody FoodEntry newFoodEntry)
    {
        FoodEntry savedEntry = foodService.createFoodEntry(userId, newFoodEntry);
        return new ResponseEntity<>(savedEntry, HttpStatus.CREATED);
    }

    //To fetch all the food entries
    @GetMapping
    public ResponseEntity<List<FoodEntry>> fetchFoodEntry() {
        List<FoodEntry> entries = foodService.fetchFoodEntry();
        return new ResponseEntity<>(entries, HttpStatus.OK);
    }

    //To fetch the specific user food entry with the provided date
    @GetMapping("/{userId}")
    public ResponseEntity<List<FoodEntry>> getFoodByUserAndDate (@PathVariable Long userId, @RequestParam String date){
        List<FoodEntry> entries = foodService.getFoodEntriesByUserAndDate(userId, date);
        return new ResponseEntity<>(entries, HttpStatus.OK);
    }
}
