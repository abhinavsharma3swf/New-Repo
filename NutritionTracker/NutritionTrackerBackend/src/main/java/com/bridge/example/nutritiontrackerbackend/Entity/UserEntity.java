package com.bridge.example.nutritiontrackerbackend.Entity;
import jakarta.persistence.*;
import java.util.List;

@Entity
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String username;
    private int age;

    private int goalCalories;


    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="user_id")
    private List<FoodEntry> foodEntries;

    public UserEntity() {

    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getGoalCalories() {
        return goalCalories;
    }

    public void setGoalCalories(int goalCalories) {
        this.goalCalories = goalCalories;
    }

    public UserEntity(String username, int age, int goalCalories) {
        this.username = username;
        this.age = age;
        this.goalCalories = goalCalories;
    }
}
