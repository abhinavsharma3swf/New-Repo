package com.bridge.example.nutritiontrackerbackend.Repository;

import com.bridge.example.nutritiontrackerbackend.Entity.FoodEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodRepository extends JpaRepository<FoodEntry, Long> {
    List<FoodEntry> findAllByDate(String date);
}
