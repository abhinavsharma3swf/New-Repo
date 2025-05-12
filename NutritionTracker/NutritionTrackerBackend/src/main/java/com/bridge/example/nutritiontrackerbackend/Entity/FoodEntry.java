package com.bridge.example.nutritiontrackerbackend.Entity;

import jakarta.persistence.*;

@Entity
public class FoodEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String name;
    private String date;
    private double qty;

    private String color;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "macrosentity_id")
    private MacrosEntity macrosEntity;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

public FoodEntry() {

    }

    public FoodEntry(Long id, String name, String date, double qty, String color) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.qty = qty;
        this.color = color;
    }

    public MacrosEntity getMacrosEntity() {
        return macrosEntity;
    }

    public void setMacrosEntity(MacrosEntity macrosEntity) {
        this.macrosEntity = macrosEntity;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "FoodEntry{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", date='" + date + '\'' +
                ", qty=" + qty +
                ", color='" + color + '\'' +
                ", macrosEntity=" + macrosEntity +
                ", user=" + user +
                '}';
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Long getId() {
        return id;
    }

    public double getQty() {
        return qty;
    }

    public void setQty(double qty) {
        this.qty = qty;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}