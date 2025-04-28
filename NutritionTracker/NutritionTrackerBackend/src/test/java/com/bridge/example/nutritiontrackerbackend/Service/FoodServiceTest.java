package com.bridge.example.nutritiontrackerbackend.Service;

import com.bridge.example.nutritiontrackerbackend.Entity.FoodEntry;
import com.bridge.example.nutritiontrackerbackend.FoodService.FoodService;
import com.bridge.example.nutritiontrackerbackend.Repository.FoodRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.assertj.core.api.Assertions.assertThat;

public class FoodServiceTest {

    @Mock
    FoodRepository foodRepository;

    @InjectMocks
    FoodService foodService;

    private FoodEntry testFoodEntry;

    @BeforeEach
    void setup() {


        MockitoAnnotations.openMocks(this);
        testFoodEntry = new FoodEntry();
        testFoodEntry.setId(1L);
        testFoodEntry.setQty(1);
//        testFoodEntry.setCalories(100);
//        testFoodEntry.setCarbs(30);
//        testFoodEntry.setFat(25);
//        testFoodEntry.setProtein(20);
        testFoodEntry.setName("Oatmeal");
        testFoodEntry.setDate("12-Mar-25");
    }

   @Test
    void shouldSaveNewFoodItem () {
       when(foodRepository.save(testFoodEntry)).thenReturn(testFoodEntry);
       FoodEntry actualRequest = foodService.createFoodEntry(testFoodEntry);
       verify(foodRepository, times(1)).save(any(FoodEntry.class));
       assertThat(actualRequest).isEqualTo(testFoodEntry);
   }

   @Test
   void shouldReturnFoodEntriesByDate() {
        String date = "12-Mar-25";
        List<FoodEntry> mockEnteries = List.of(
                new FoodEntry(1L, "Oatmeal", date, 2D),
                new FoodEntry(2L, "Cookies", date, 1D));
        when(foodRepository.findAllByDate(date)).thenReturn(mockEnteries);
   }
}
