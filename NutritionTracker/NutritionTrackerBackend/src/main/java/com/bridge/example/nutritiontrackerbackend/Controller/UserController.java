package com.bridge.example.nutritiontrackerbackend.Controller;
import com.bridge.example.nutritiontrackerbackend.Entity.UserEntity;
import com.bridge.example.nutritiontrackerbackend.FoodService.UserService;
import org.apache.catalina.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")

@CrossOrigin(origins = "http://localhost:5173")

public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserEntity> createUser(@RequestBody UserEntity userEntity){
        return new ResponseEntity<>(userService.createUser(userEntity), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserEntity> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    //To return the entire list of users//
    @GetMapping
    public ResponseEntity<List<UserEntity>> getUsers(){
        return ResponseEntity.ok(userService.getUsers());
    }
}
