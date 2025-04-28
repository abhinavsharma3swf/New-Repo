package com.bridge.example.nutritiontrackerbackend.FoodService;

import com.bridge.example.nutritiontrackerbackend.Entity.FoodEntry;
import com.bridge.example.nutritiontrackerbackend.Entity.UserEntity;
import com.bridge.example.nutritiontrackerbackend.Repository.FoodRepository;
import com.bridge.example.nutritiontrackerbackend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {


    @Autowired
    private final FoodRepository foodRepository;
    private final UserRepository userRepository;

    public FoodService(UserRepository userRepository, FoodRepository foodRepository) {
        this.userRepository = userRepository;
        this.foodRepository = foodRepository;
    }

    public FoodEntry createFoodEntry(Long userId, FoodEntry newFoodEntry) {
        UserEntity user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User Not Found"));
        newFoodEntry.setUser(user);
        return foodRepository.save(newFoodEntry);
    }

    public List<FoodEntry> fetchFoodEntry() {
        return foodRepository.findAll();
    }
}


