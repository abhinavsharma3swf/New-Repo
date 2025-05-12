package com.bridge.example.nutritiontrackerbackend.Controller;
import com.bridge.example.nutritiontrackerbackend.Entity.FoodEntry;
import com.bridge.example.nutritiontrackerbackend.FoodService.FoodService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(FoodController.class)

public class FoodControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private FoodService foodService;

    @Test
    void shouldCreateFoodEntry() throws Exception {
        FoodEntry foodEntry = new FoodEntry(1L, "Oatmeal", "12-Mar-25", 2D, "red");
        String foodEntryJSON = objectMapper.writeValueAsString(foodEntry);
        mockMvc.perform(MockMvcRequestBuilders
                .post("/api/foodentry")
                .contentType(MediaType.APPLICATION_JSON)
                .content(foodEntryJSON))
                .andExpect(status().is2xxSuccessful());
    }
}
